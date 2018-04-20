<template>
    <div class="row">
        <div class="col-md-6">
            <div v-if="isLoaded" class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        參數設定
                    </h3>
                </div>
                <div class="panel-body">
                    <table class="table field-table">
                        <tr>
                            <td><label>使用者預設起始點數</label></td>
                            <td><input class="form-control" type="number" v-model="businessLogic.defaultPoint"></td>
                        </tr>
                        <tr>
                            <td><label>紅利點數使用比率</label></td>
                            <td>
                                <div class="input-group">
                                    <input class="form-control" type="number" v-model="businessLogic.percentage">
                                    <span class="input-group-addon">%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><label>推薦者獎勵點數</label></td>
                            <td><input class="form-control" type="number" v-model="businessLogic.recommendUserSharePoint"></td>
                        </tr>
                        <tr>
                            <td><label>開啟點數使用設定</label></td>
                            <td><toggle-button v-model="businessLogic.bonusUseLimitSetup"/></td>
                        </tr>
                        <tr v-if="businessLogic.bonusUseLimitSetup">
                            <td><label>最高可使用點數</label></td>
                            <td><input class="form-control" type="number" v-model="businessLogic.maxUsage"></td>
                        </tr>
                        <tr v-if="businessLogic.bonusUseLimitSetup">
                            <td><label>最低可使用點數</label></td>
                            <td><input class="form-control" type="number" v-model="businessLogic.minUsage"></td>
                        </tr>
                    </table>
                </div>
                <div v-if="isSetuped" class="panel-footer">
                    <button v-if="isDirty" type="button" class="btn btn-success btn-sm btn-block" @click="updateBonusParameter()">儲存參數</button>
                    <button v-else type="button" class="btn btn-success btn-sm btn-block" name="button" disabled>儲存參數</button>
                </div>
                <div v-else class="panel-footer">
                    <button v-if="isDirty" type="button" class="btn btn-success btn-sm btn-block" @click="addBonusParameter()">新增參數</button>
                    <button v-else type="button" class="btn btn-success btn-sm btn-block" name="button" disabled>儲存參數</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ToggleButton from 'vue-js-toggle-button';

    Vue.use(ToggleButton);

    export default {
        data() {
            return {
                isDirty: true,
                isSetuped: false,
                isLoaded: false,
                token: $('meta[name="csrf-token"]').attr('content'),
                businessLogic: {
                    defaultPoint: null,
                    percentage: null,
                    recommendUserSharePoint: null,
                    bonusUseLimitSetup: false,
                    maxUsage: null,
                    minUsage: null
                }
            }
        },
        created: function () {
            $('.loading-bar').fadeOut('100');
            this.getBonusParameter();
        },
        methods: {
            getBonusParameter: function () {
                var self = this;

                var getParameter = new Promise(function (resolve, reject) {
                    $.ajax({
                        url: '/admin/business/bonus/get',
                        type: 'GET',
                        cache: false,
                        dataType: 'json'
                    })
                    .done(function(result) {
                        resolve(result);
                    })
                    .fail(function() {
                        resolve(false);
                    });
                });

                Promise.all([getParameter])
                    .then(function (results) {
                        var bonusParameter = results[0];

                        if (!bonusParameter) {
                            self.isSetuped = false;
                        } else {
                            self.businessLogic = {
                                defaultPoint: bonusParameter.defaultPoint,
                                percentage: bonusParameter.percentage,
                                recommendUserSharePoint: bonusParameter.recommendUserSharePoint,
                                bonusUseLimitSetup: Boolean(bonusParameter.bonusUseLimitSetup),
                                maxUsage: bonusParameter.maxUsage,
                                minUsage: bonusParameter.minUsage
                            };
                            self.isSetuped = true;
                        }

                        self.isLoaded = true;
                    });
            },
            addBonusParameter: function () {
                var self = this;
                var token = this.token;

                if (parseInt(this.businessLogic.maxUsage) < parseInt(this.businessLogic.minUsage)) {
                    console.log(123);
                    return;
                }

                $.ajax({
                    url: '/admin/business/bonus/add',
                    type: 'POST',
                    data: {
                        defaultPoint: self.businessLogic.defaultPoint,
                        percentage: self.businessLogic.percentage,
                        recommendUserSharePoint: self.businessLogic.recommendUserSharePoint,
                        bonusUseLimitSetup: self.businessLogic.bonusUseLimitSetup ? 1 : 0,
                        maxUsage: self.businessLogic.maxUsage,
                        minUsage: self.businessLogic.minUsage
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '新增紅利點數設定成功');
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    self.getBonusParameter();
                });
            },
            updateBonusParameter: function () {
                var self = this;
                var token = this.token;

                if (parseInt(this.businessLogic.maxUsage) < parseInt(this.businessLogic.minUsage)) {
                    self.showMessage('warning', '最低可使用點數不得高於最高可使用點數');
                    return;
                }

                $.ajax({
                    url: '/admin/business/bonus/update',
                    type: 'POST',
                    data: {
                        defaultPoint: self.businessLogic.defaultPoint,
                        percentage: self.businessLogic.percentage,
                        recommendUserSharePoint: self.businessLogic.recommendUserSharePoint,
                        bonusUseLimitSetup: self.businessLogic.bonusUseLimitSetup ? 1 : 0,
                        maxUsage: self.businessLogic.maxUsage,
                        minUsage: self.businessLogic.minUsage
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '編輯紅利點數設定成功');
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    self.getBonusParameter();
                });
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
