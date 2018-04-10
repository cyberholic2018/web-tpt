<template>
    <div class="row">
        <div class="col-md-6">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addShipping" data-backdrop="static">
                新增運費規格
            </button>

            <table class="table field-table">
                <thead>
                    <tr>
                        <th>運送方式</th>
                        <th>運送費用</th>
                        <th align="center" width="40">操作</th>
                        <th align="center" width="40">刪除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in shippingMehtods">
                        <td>{{item.shippingTitle}}</td>
                        <td>{{item.shippingPrice}}</td>
                        <td align="center"><i class="fa fa-pencil-square-o method-btn" aria-hidden="true" @click="editShipping(item)"></i></td>
                        <td align="center"><i class="fa fa-trash method-btn" aria-hidden="true" @click="deleteShipping(item)"></i></td>
                    </tr>
                </tbody>
            </table>

            <!-- Modal -->
            <div class="modal fade" id="addShipping" tabindex="-1" role="dialog" aria-labelledby="addShippingLabel">
                <div class="modal-dialog" role="document">
                    <form v-on:submit.prevent="addShippingMethod">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="addShippingLabel">運費設定視窗</h4>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="shippingTitle">運費說明</label>
                                    <input class="form-control" type="text" id="shippingTitle" name="shippingTitle" required autofocus v-model="shippingMehtod.shippingTitle">
                                </div>
                                <div class="form-group">
                                    <label for="shippingType">運送類型</label>
                                    <select class="form-control" name="shippingType" v-model="shippingMehtod.shippingType" required>
                                        <option value="delivery">宅配運送</option>
                                        <option value="cvs">超商取貨</option>
                                    </select>
                                </div>
                                <div class="form-group" v-if="shippingMehtod.shippingType == 'delivery'">
                                    <label for="shippingTemperature">運送類型</label>
                                    <select class="form-control" name="shippingTemperature" v-model="shippingMehtod.shippingTemperature" required>
                                        <option value="room">常溫配送</option>
                                        <option value="refrigeration">低溫配送</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="shippingPrice">運費金額 NT$</label>
                                    <input class="form-control" type="number" id="shippingPrice" name="shippingPrice" required v-model="shippingMehtod.shippingPrice" min="0">
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="freeShipping" id="freeShipping" v-model="shippingMehtod.freeShipping"><label for="freeShipping">免運費</label>
                                </div>
                                <div class="form-group" v-if="shippingMehtod.freeShipping">
                                    <label for="freeShippingMininum">免運額限</label>
                                    <input class="form-control" type="number" name="freeShippingMininum" id="freeShippingMininum" v-model="shippingMehtod.freeShippingMininum" min="0">
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                                <button type="submit" class="btn btn-primary">新增設定</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="modal fade" id="editShipping" tabindex="-1" role="dialog" aria-labelledby="editShippingLabel">
                <div class="modal-dialog" role="document">
                    <form v-on:submit.prevent="editShippingMethodAction">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="editShippingLabel">運費設定視窗</h4>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="shippingTitle">運費說明</label>
                                    <input class="form-control" type="text" id="shippingTitle" name="shippingTitle" required autofocus v-model="editShippingMethod.shippingTitle">
                                </div>
                                <div class="form-group">
                                    <label for="shippingType">運送類型</label>
                                    <select class="form-control" name="shippingType" v-model="editShippingMethod.shippingType" required>
                                        <option value="delivery">宅配運送</option>
                                        <option value="cvs">超商取貨</option>
                                    </select>
                                </div>
                                <div class="form-group" v-if="editShippingMethod.shippingType == 'delivery'">
                                    <label for="shippingTemperature">運送類型</label>
                                    <select class="form-control" name="shippingTemperature" v-model="editShippingMethod.shippingTemperature" required>
                                        <option value="room">常溫配送</option>
                                        <option value="refrigeration">低溫配送</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="shippingPrice">運費金額 NT$</label>
                                    <input class="form-control" type="number" id="shippingPrice" name="shippingPrice" required v-model="editShippingMethod.shippingPrice" min="0">
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="freeShipping" id="freeShipping" v-model="editShippingMethod.freeShipping"><label for="freeShipping">免運費</label>
                                </div>
                                <div class="form-group" v-if="editShippingMethod.freeShipping">
                                    <label for="freeShippingMininum">免運額限</label>
                                    <input class="form-control" type="number" name="freeShippingMininum" id="freeShippingMininum" v-model="editShippingMethod.freeShippingMininum" min="0">
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>
                                <button type="submit" class="btn btn-primary">儲存設定</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');
    export default {
        data() {
            return {
                shippingMehtod: {
                    shippingTitle: null,
                    shippingPrice: null,
                    freeShipping: false,
                    shippingType: null,
                    shippingTemperature: null,
                    freeShippingMininum: null
                },
                editShippingMethod: {
                    shippingTitle: null,
                    shippingPrice: null,
                    freeShipping: false,
                    shippingType: null,
                    shippingTemperature: null,
                    freeShippingMininum: null
                },
                mode: 'add',
                shippingMehtods: [],
                token: $('meta[name="csrf-token"]').attr('content')
            }
        },
        created: function () {
            this.getShippingMethod();
        },
        computed: {
            methodTranslate: function () {
                var shippingMehtod = this.shippingMehtod;

                return {
                    shippingTitle: shippingMehtod.shippingTitle,
                    shippingPrice: shippingMehtod.shippingPrice,
                    freeShipping: shippingMehtod.freeShipping ? 1 : 0,
                    shippingType: shippingMehtod.shippingType,
                    shippingTemperature: shippingMehtod.shippingTemperature,
                    freeShippingMininum: shippingMehtod.freeShippingMininum
                }
            },
            editMethodTranslate: function () {
                var shippingMehtod = this.editShippingMethod;

                shippingMehtod.freeShipping = shippingMehtod.freeShipping ? 1 : 0;

                return shippingMehtod;
            }
        },
        watch: {
            shippingMehtod: {
                handler: function (shippingMehtod, oldVal) {
                    var self = this;

                    if (shippingMehtod.shippingType == 'cvs') {
                        shippingMehtod.shippingTemperature = 'room';
                    }
                    console.log(shippingMehtod);
                },
                deep: true
            }
        },
        methods: {
            addShippingMethod: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/shipping/addShippingMethod',
                    type: 'POST',
                    dataType: 'json',
                    data: self.methodTranslate,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '新增運送方式成功。');
                    self.getShippingMethod();
                    $('#addShipping').modal('hide');
                    console.log("success");
                })
                .fail(function() {
                    self.showMessage('error', '新增運送方式失敗。');
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                    $('.loading-bar').fadeOut('100');
                });

            },
            getShippingMethod: function () {
                var self = this;

                $.ajax({
                    url: '/admin/shipping/getShippingMethods',
                    type: 'GET',
                    dataType: 'json'
                })
                .done(function(response) {
                    self.shippingMehtods = [];
                    self.shippingMehtods = response.data;
                    console.log("success");
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            editShipping: function (item) {
                $('#editShipping').modal('show');
                this.editShippingMethod = item;
            },
            deleteShipping: function (item) {
                var self = this;
                var token = this.token;
                var check = confirm('請問是否要刪除此筆運送方式？');

                if (!check) {
                    return;
                }

                $('.loading-bar').fadeIn('100');


                $.ajax({
                    url: '/admin/shipping/deleteShippingMethod/' + item.id,
                    type: 'POST',
                    dataType: 'json',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '刪除運送方式成功。');
                    self.getShippingMethod();
                    console.log("success");
                })
                .fail(function() {
                    self.showMessage('error', '刪除運送方式失敗。');
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                    $('.loading-bar').fadeOut('100');
                });
            },
            editShippingMethodAction: function () {
                var self = this;
                var token = this.token;

                $('.loading-bar').fadeIn('100');

                $.ajax({
                    url: '/admin/shipping/editShippingMethod',
                    type: 'POST',
                    dataType: 'json',
                    data: self.editMethodTranslate,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    self.showMessage('success', '編輯運送方式成功。');
                    self.getShippingMethod();
                    $('#editShipping').modal('hide');
                    console.log("success");
                })
                .fail(function() {
                    self.showMessage('error', '編輯運送方式失敗。');
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                    $('.loading-bar').fadeOut('100');
                });
            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
