<template>
    <div class="row">
        <div class="col-md-12" id="admin-page-landing">
            <!-- <h2>Welcome to</h2>
            <h1>CyberHolic Management System</h1> -->
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
            window.location.href = '/cyberholic-system/page/managment';
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
