<template>
    <div>
        <h1>这是App组件</h1>
        <router-link to="/account">Account组件</router-link>
        <router-link to="/goodslist">GoodsList组件</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {};
</script>

<style></style>
