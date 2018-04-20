@extends('frontend.partners.main')

@section('sub-script')
    <script src="/js/partner.js" charset="utf-8"></script>
    <script>
        // var map;
        window.initGoogleMap = function () {
            initMap();
        };

        function initMap() {
            var features = window.feature;

            if (!features) {
                return;
            }

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: features[0].position,
                mapTypeId: 'roadmap'
            });

            var iconBase = '/img/icon/';
            var icons = {
                location: {
                    icon: iconBase + 'icon-teardrop-cyan.png'
                }
            };

            var lastInfowindow;            

            // Create markers.
            features.forEach(function(feature) {
                var marker = new google.maps.Marker({
                    position: feature.position,
                    icon: icons[feature.type].icon,
                    map: map
                });

                var contentString = '<div class="map-content">' +
                    '<h3 style="margin-top: 11px;">' + feature.name + '</h3>' +
                    '<h4>' + feature.addressString + '</h4>' +
                    '<a href="' + feature.link + '" target="_blank">' + feature.link + '</a>' +
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                marker.addListener('click', function() {
                    if (lastInfowindow) {
                        lastInfowindow.close();
                    }

                    infowindow.close();
                    infowindow.setContent(contentString);
                    map.panTo(marker.getPosition());
                    infowindow.open(map, marker);
                    lastInfowindow = infowindow;
                });

                setTimeout(function () {
                    $('.map-btn').on('click', function() {
                        var mapId = $(this).attr('id');

                        if (feature.id === mapId) {

                            if (lastInfowindow) {
                                lastInfowindow.close();
                            }

                            infowindow.close();
                            infowindow.setContent(contentString);
                            map.panTo(marker.getPosition());
                            infowindow.open(map, marker);
                            lastInfowindow = infowindow;
                        }
                    });
                }, 50);


            });

        }
    </script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWGyWQEgeR_KqcgTOAuUaGe4BmmnclGzs&callback=initMap" type="text/javascript"></script>
@endsection

{{-- Google map api key --}}
{{-- AIzaSyBWGyWQEgeR_KqcgTOAuUaGe4BmmnclGzs --}}

@section('sub-content')

    <div class="row" id="partner">
        <input type="hidden" id="partner_finder" name="" value="{!! trans('string.partner_finder') !!}">
        <input type="hidden" id="partner_finder_choose" name="" value="{!! trans('string.partner_finder_choose') !!}">
        <input type="hidden" id="partner_finder_country" name="" value="{!! trans('string.partner_finder_country') !!}">
        <div class="col-md-12">
            <partner></partner>
        </div>

        {{-- <div class="col-md-3" style="height:600px; padding: 0; overflow: auto;">
            <ul class="partner-list">
                @foreach (PartnerView::all() as $item)
                    <li class="map-btn" data-map-id="{{$item->guid}}">
                        <h4>{{$item->name}}</h4>
                        <h5>{{$item->addressString}}</h5>
                        <a href="{{$item->link}}">{{$item->link}}</a>
                        <button class="map-button"><span class="glyphicon glyphicon-map-marker"></span></button>
                    </li>
                @endforeach
            </ul>
        </div>
        <div class="col-md-9" id="map" style="height:600px">

        </div> --}}
    </div>

@endsection
