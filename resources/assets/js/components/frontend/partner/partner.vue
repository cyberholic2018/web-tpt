<template>
    <div class="row">
        <div class="col-md-12 partner-filter" style="background:#004471">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" style="line-height: 60px; color: #EEE">
                        {{partner_finder}}
                    </div>
                    <div class="col-md-4">
                        <div class="select-wrapper">
                            <select class="" name="" v-model="partnerType">
                                <option value="">{{partner_finder_choose}}</option>
                                <option v-for="item in typeList" v-bind:value="item.guid">{{item.title}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="select-wrapper">
                            <select class="" name="" v-model="partnerLocation">
                                <option value="">{{partner_finder_country}}</option>
                                <option v-for="item in locationList" v-bind:value="item.guid">{{item.title}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3" style="height:600px; padding: 0; overflow: auto;">
            <ul class="partner-list">
                <li v-for="item in feature" class="map-btn" v-bind:id="item.id">
                    <h4>{{item.name}}</h4>
                    <h5>{{item.addressString}}</h5>
                    <a v-bind:href="item.link">{{item.link}}</a>
                    <button class="map-button"><span class="glyphicon glyphicon-map-marker"></span></button>
                </li>
            </ul>
        </div>
        <div class="col-md-9" id="map" style="height:600px">

        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');
    export default {
        data() {
            return {
                partnerType: '',
                partnerLocation: '',
                typeList: [],
                locationList: [],
                feature: [],
                partner_finder: $('#partner_finder').val(),
                partner_finder_choose: $('#partner_finder_choose').val(),
                partner_finder_country: $('#partner_finder_country').val(),
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        created: function () {
            var self = this;
            var token = this.token;

            var getPartnerLocationPromise = new Promise(function (resolve, reject) {
                $.ajax({
                    url: '/category/get',
                    type: 'POST',
                    cache: false,
                    data: {
                        type: 'partnerLocation'
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(response) {
                    resolve(response);
                })
                .fail(function(error) {
                    reject(error);
                });
            });

            var getPartnerTypePromise = new Promise(function (resolve, reject) {
                $.ajax({
                    url: '/category/get',
                    type: 'POST',
                    cache: false,
                    data: {
                        type: 'partnerType'
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(response) {
                    resolve(response);
                })
                .fail(function(error) {
                    reject(error);
                });
            });

            Promise.all([
                getPartnerLocationPromise,
                getPartnerTypePromise
            ]).then(function (results) {
                self.typeList = results[1];
                self.locationList = results[0];

                self.getPartners();
            });

        },
        watch: {
            partnerType: {
                handler: function (partnerType, oldVal) {
                    var self = this;
                    self.getPartners();
                },
                deep: true
            },
            partnerLocation: {
                handler: function (partnerLocation, oldVal) {
                    var self = this;
                    self.getPartners();
                },
                deep: true
            }
        },
        methods: {
            getPartners: function () {
                var self = this;
                var token = this.token;

                $.ajax({
                    url: '/partner/get',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        partnerType: self.partnerType,
                        partnerLocation: self.partnerLocation
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function(response) {
                    self.feature = [];

                    response.forEach(function (item) {
                        self.feature.push({
                            id: item.guid,
                            name: item.name,
                            link: item.link,
                            addressString: item.addressString,
                            position: new google.maps.LatLng(parseFloat(item.longitude), parseFloat(item.latitude)),
                            type: 'location'
                        });
                    });

                    window.feature = self.feature;

                    window.initGoogleMap();
                    // self.initMap();
                })
                .fail(function() {
                })
                .always(function() {
                });

            }
        }
    }
</script>
