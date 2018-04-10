<template>
    <div class="row">
        <div class="col-md-6">
            <div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						網站流量統計
					</h3>
				</div>
				<div class="panel-body">
                    <div class="alert alert-info">
                        <strong>目前資料庫並無數據可統計，</strong>數據將於流量產生後即可顯示
                    </div>
				</div>
			</div>
        </div>
        <div class="col-md-6">
            <div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">
						訂單狀態
					</h3>
				</div>
				<div class="panel-body">
                    <div class="alert alert-warning">
                        <strong>目前沒有新訂單。</strong>
                    </div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created: function () {
            $('.loading-bar').fadeOut('100');
        },
        methods: {
            testAC: function () {
                $.ajax({
                    url: '/apitest',
                    type: 'GET'
                })
                .done(function(result) {
                    console.log(result);
                })
                .fail(function() {
                    console.log("error");
                })
                .always(function() {
                    console.log("complete");
                });

            }
        }
    }
</script>
