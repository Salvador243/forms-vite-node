<template>
    <div>
        <vue-recaptcha :options="{ siteKey: '6LeKpiUmAAAAANz9w_6P8ZRRUVQru6gCVxSnD2nC' }" @verify="onVerify"
            @expired="onExpired" @fail="onFail" />
    </div>
</template>
  
<script setup>
import VueRecaptcha from "vue3-recaptcha-v2";

const { onVerify, onExpired, onFail } = useRecaptcha();
</script>
  