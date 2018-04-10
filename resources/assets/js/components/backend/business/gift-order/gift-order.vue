<template>
    <div class="row">
        <div class="col-md-12">
            <form class="" v-on:submit.prevent="onSubmit">
                <input type="hidden" name="_token" v-model="token">
                <input type="checkbox" name="" v-model="boolean">
                <input type="email" name="email" value="" required>
                <input v-if="boolean" type="text" name="phone" value="" required>
                <input type="submit" name="" value="">
            </form>
        </div>
    </div>
</template>

<script>
    $('.loading-bar').fadeOut('100');
    export default {
        data() {
            return {
                token: window.Laravel.csrfToken,
                boolean: false,
            }
        },
        created: function () {
            console.log(window.Laravel.csrfToken);
        },
        methods: {
            onSubmit: function () {
                console.log('123');
            }
        }
    }
</script>
