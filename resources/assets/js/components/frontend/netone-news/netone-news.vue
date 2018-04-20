<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table-field">
                <tr v-for="item in posts">
                    <td>
                        <h4><a @click="goPostPage(item.guid)">{{item.title}}</a></h4>
                    </td>
                    <td align="right">
                        {{item.created_at}}
                    </td>
                </tr>
            </table>
            <!-- <div class="row news-info" v-for="item in posts">
                <div class="col-md-12 news-created-time">
                    {{item.created_at}}
                    <hr>
                </div>
                <div class="col-md-5 news-feature-img">
                    <img width="250" v-if="item.featureImage" v-bind:src="item.featureImage">
                    <img width="250" v-else src="https://dummyimage.com/800x400/FFFFFF/4865a3.gif&text=Dummy+Image">
                </div>
                <div class="col-md-12 news-content">

                    <h4><a @click="goPostPage(item.guid)">{{item.title}}</a></h4>
                    <hr>
                    <div class="hidden-content">
                        {{item.content}}<a @click="goPostPage(item.guid)">Read more.</a>
                    </div>
                </div>
            </div> -->
            <ul class="pagination">
                <li v-if="prev_page_url">
                    <a @click="prevPage()">上一頁</a>
                </li>
                <li v-for="item in eachPage">
                    <a v-if="item.isBrowsing" style="background: #eee;" @click="gotoPage(item)">{{item.pageNumber}}</a>
                    <a v-else @click="gotoPage(item)">{{item.pageNumber}}</a>
                </li>
                <li v-if="next_page_url">
                    <a @click="nextPage()">下一頁</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');

    export default {
        data() {
            return {
                posts: [],
                next_page_url: null,
                prev_page_url: null,
                total: null,
                current_page: null,
                eachPage: [],
            }
        },
        created: function () {
            this.getPosts('/posts');
        },
        methods: {
            prevPage: function () {
                this.getPosts(this.prev_page_url);
            },
            nextPage: function () {
                this.getPosts(this.next_page_url);
            },
            gotoPage: function (item) {
                this.getPosts('/posts?page=' + item.pageNumber);
            },
            goPostPage: function (guid) {
                window.open('/news/' + guid);
            },
            getPosts: function (url) {
                var self = this;

                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json'
                })
                .done(function(result) {
                    var regExHtml = /<[^>]*>/g;
                    var regExA = /<a[^>]*>[^>]*<[^>]a>/g;
                    var regExAH = /(<a[^>]*>)|(<[^>]a>)/g;
                    var maxThumbNail = (result.data.last_page >= 5) ? 5 : result.data.last_page;
                    self.posts = [];
                    self.eachPage = [];

                    self.current_page = result.data.current_page;
                    self.next_page_url = result.data.next_page_url;
                    self.prev_page_url = result.data.prev_page_url;

                    result.data.data.forEach(function (item) {
                        self.posts.push({
                            guid: item.guid,
                            content: item.content.replace(regExHtml, "").replace(regExA, "").replace(regExAH, "").replace(/&nbsp;/g, " ").substr(0, 100) + '.....',
                            featureImage: item.featureImage,
                            created_at: item.created_at.split(' ')[0],
                            title: item.title
                        });
                    });

                    if ((self.current_page >= 4) && (result.data.last_page > 5)) {
                        if ((self.current_page + 2) >= result.data.last_page) {
                            for (var i = 0; i < maxThumbNail; i++) {
                                self.eachPage.push({
                                    pageNumber: (result.data.last_page - 4) + i,
                                    isBrowsing: ((result.data.last_page - 4) + i === self.current_page) ? true : false
                                });
                            }
                        } else {
                            for (var i = 0; i < maxThumbNail; i++) {
                                self.eachPage.push({
                                    pageNumber: (self.current_page - 2) + i,
                                    isBrowsing: ((self.current_page - 2) + i === self.current_page) ? true : false
                                });
                            }
                        }
                    } else {
                        for (var i = 0; i < maxThumbNail; i++) {
                            self.eachPage.push({
                                pageNumber: i + 1,
                                isBrowsing: ((i + 1) === self.current_page) ? true : false
                            });
                        }
                    }
                })
                .always(function() {
                });
            }
        }
    }
</script>
