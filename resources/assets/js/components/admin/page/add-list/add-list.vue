<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table field-table">
                <thead>
                    <tr>
                        <th>頁面名稱</th>
                        <th>語系</th>
                        <!-- <th>GUID</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in pageContent">
                        <td><a v-bind:href="editLink(item)">{{item.title}}</a></td>
                        <td>
                            <span v-if="item.locale == 'en'"><strong>英文</strong></span>
                            <span v-if="item.locale == 'zh-TW'"><strong>繁體中文</strong></span>
                        </td>
                        <!-- <td>{{item.guid}}</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');
    export default {
        data() {
            return {
                pageContent: []
            }
        },
        created: function () {
            this.getPages();
        },
        methods: {
            getPages: function () {
                var self = this;

                $.ajax({
                    url: '/admin/page/get',
                    type: 'GET',
                    dataType: 'json'
                })
                .done(function(response) {
                    response.data.forEach(function (item) {
                        self.pageContent.push({
                            title: item.title,
                            guid: item.guid,
                            locale: JSON.parse(item.content).locale
                        });
                    });
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            },
            editLink: function (item) {
                return "/cyberholic-system/page/edit/" + item.guid;
            }
        }
    }
</script>
