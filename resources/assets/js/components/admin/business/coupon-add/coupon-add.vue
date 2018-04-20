<template>
    <div class="row coupon-add" v-if="isLoaded">
        <div class="col-md-9">
            <input type="text" class="form-control ch-product-title" name="title" value="" placeholder="優惠券序號" v-model="couponContent.serialNumber">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        優惠券資訊
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="tabbable ch-tab" id="tabs-865853">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#panel-119853" data-toggle="tab">一般設定</a>
                            </li>
                            <li>
                                <a href="#panel-971686" data-toggle="tab">使用限制</a>
                            </li>
                        </ul>
                        <div class="tab-content ch-tab-content">
                            <div class="tab-pane active" id="panel-119853">
                                <table class="table field-table">
                                    <tr>
                                        <td width="130"><label>折扣種類</label></td>
                                        <td>
                                            <select class="form-control" v-model="couponContent.discountType">
                                                <option value="percentage">百分比折扣</option>
                                                <option value="cartDiscount">固定的訂單折扣</option>
                                                <option value="productDiscount">固定的商品折扣</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label>優惠券金額</label></td>
                                        <td><input class="form-control" type="number" v-model="couponContent.couponAmount"></td>
                                    </tr>
                                    <tr>
                                        <td><label>允許免運費</label></td>
                                        <td><input type="checkbox" v-model="couponContent.freeShipping"></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="tab-pane" id="panel-971686">
                                <table class="table field-table">
                                    <tr>
                                        <td><label>最低消費</label></td>
                                        <td><input placeholder="無最低消費" class="form-control" type="number" v-model="couponContent.minimumAmount"></td>
                                    </tr>
                                    <tr>
                                        <td><label>最高消費</label></td>
                                        <td><input placeholder="無最高消費" class="form-control" type="number" v-model="couponContent.maximumAmount"></td>
                                    </tr>
                                    <tr>
                                        <td><label>限單獨使用</label></td>
                                        <td><input type="checkbox" v-model="couponContent.individualUse"></td>
                                    </tr>
                                    <tr>
                                        <td><label>每張優惠券的使用上限</label></td>
                                        <td><input placeholder="無使用限制" class="form-control" type="number" v-model="couponContent.usageLimit"></td>
                                    </tr>
                                    <tr>
                                        <td><label>每一使用者的使用上限</label></td>
                                        <td><input placeholder="無使用限制" class="form-control" type="number" v-model="couponContent.usageLimitPerUser"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        說明 (可選)
                    </h3>
                </div>
                <div class="panel-body">
                    <ckeditor
                        class="ch-product-description"
                        :config="ckConfig"
                        v-model="couponContent.content">
                    </ckeditor>
                </div>
            </div>
        </div>

        <div class="col-md-3">
            <div class="panel-group" id="panel-77874">
                <div class="panel panel-default">
    				<div class="panel-heading">
    					<h3 class="panel-title">
    						發表
    					</h3>
    				</div>
    				<div class="panel-body">
                        <div class="tabbable" id="tabs-464193">
            				<ul class="nav nav-tabs ch-tab">
            					<li class="active">
            						<a href="#panel-44467" data-toggle="tab">發布排程</a>
            					</li>
            				</ul>
            				<div class="tab-content ch-tab-content">
            					<div class="tab-pane active" id="panel-44467">
                                    <table width="100%">
                                        <tr>
                                            <td>
                                                <label for="isPublish">發佈狀態</label>
                                            </td>
                                            <td align="right">
                                                <toggle-button v-model="couponContent.isPublish"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label for="datetime">發布時間</label></td>
                                            <td width="30" align="right">
                                                <i  class="fa fa-times"
                                                    aria-hidden="true"
                                                    @click="couponContent.schedulePost = null"
                                                    v-if="couponContent.schedulePost != null"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <date-picker
                                                    v-model="couponContent.schedulePost"
                                                    placeholder="選擇優惠券啟用時間"
                                                    :config="config">
                                                </date-picker>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label for="schedule-down">下線時間</label></td>
                                            <td align="right">
                                                <i  class="fa fa-times"
                                                    aria-hidden="true"
                                                    @click="couponContent.scheduleDelete = null"
                                                    v-if="couponContent.scheduleDelete != null"></i>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <date-picker
                                                    v-model="couponContent.scheduleDelete"
                                                    placeholder="選擇優惠券到期時間"
                                                    :config="scheduleDeleteConfig">
                                                </date-picker>
                                            </td>
                                        </tr>
                                    </table>
            					</div>
            				</div>
            			</div>
    				</div>
    				<div class="panel-footer">
                        <button v-if="isDirty" type="button" class="btn btn-success btn-sm btn-block" name="button" @click="saveCoupon()">發布優惠券</button>
                        <button v-else type="button" class="btn btn-success btn-sm btn-block" name="button" disabled>發布優惠券</button>
    				</div>
    			</div>
            </div>

        </div>

    </div>
</template>

<script>
    import Ckeditor from 'vue-ckeditor2';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import ToggleButton from 'vue-js-toggle-button';

    Vue.use(ToggleButton);

    export default {
        components: {
            Ckeditor,
            datePicker
        },
        data() {
            return {
                isLoaded: true,
                isDirty: false,
                couponContent: {
                    serialNumber: null,
                    content: null,
                    isPublish: false,
                    schedulePost: null,
                    scheduleDelete: null,
                    discountType: 'percentage',
                    couponAmount: 0,
                    freeShipping: false,
                    minimumAmount: null,
                    maximumAmount: null,
                    individualUse: false,
                    usageLimit: null,
                    usageLimitPerUser: null
                },
                ckConfig: {
                    height: 200,
                    filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
                    filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
                    filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
                    filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token='
                },
                config: {
                    minDate: moment()
                },
                token: $('meta[name="csrf-token"]').attr('content'),
            }
        },
        watch: {
            couponContent: {
                handler: function (couponContent, oldVal) {
                    var self = this;

                    this.isDirty = true;
                },
                deep: true
            }
        },
        created: function () {
            $('.loading-bar').fadeOut('100');
        },
        computed: {
            schedulePostDate: function () {
                if (this.couponContent.schedulePost) {
                    return moment(this.couponContent.schedulePost).format();
                } else {
                    return null;
                }
            },
            scheduleDeleteDate: function () {
                if (this.couponContent.scheduleDelete) {
                    return moment(this.couponContent.scheduleDelete).format();
                } else {
                    return null;
                }
            },
            scheduleDeleteConfig: function functionName() {
                if (this.schedulePostDate) {
                    return {
                        minDate: moment(this.schedulePostDate)
                    }
                } else {
                    return {
                        minDate: moment()
                    }
                }
            },
        },
        methods: {
            saveCoupon: function () {
                var self = this;
                var token = this.token;

                $.ajax({
                    url: '/admin/business/coupon/add',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        serialNumber: self.couponContent.serialNumber,
                        content: self.couponContent.content,
                        isPublish: self.couponContent.isPublish ? 1 : 0,
                        schedulePost: self.schedulePostDate,
                        scheduleDelete: self.scheduleDeleteDate,
                        discountType: self.couponContent.discountType,
                        couponAmount: self.couponContent.couponAmount,
                        freeShipping: self.couponContent.freeShipping ? 1 : 0,
                        minimumAmount: self.couponContent.minimumAmount,
                        maximumAmount: self.couponContent.maximumAmount,
                        individualUse: self.couponContent.individualUse ? 1 : 0,
                        usageLimit: self.couponContent.usageLimit,
                        usageLimitPerUser: self.couponContent.usageLimitPerUser
                    },
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRF-TOKEN', token);
                    }
                })
                .done(function() {
                    window.location.href="/cyberholic-system/business/coupon";
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            showMessage: function (type, string) {
                toastr[type](string);
            }
        }
    }
</script>
