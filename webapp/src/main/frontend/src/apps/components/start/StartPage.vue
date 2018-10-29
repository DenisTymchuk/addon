
<template>
	<div>
		<h2>Hello</h2>
		<h6>Welcome to Hello portlet!</h6>
		<div>Powered by eXo Platform.</div>
	</div>
</template>
<script>

    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    Vue.use(BootstrapVue);

    export default {}
</script>

<style scoped>
    .alert-success {
        color: #315b73;
        background-color: #d4edda;
        border-color: #c3e6cb;
        margin: 0 auto;
        top: 10px;
    }
</style>