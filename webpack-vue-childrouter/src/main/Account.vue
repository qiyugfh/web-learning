<template>
    <div>
        <p>这是Account组件</p>

        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
body {
    div {
        font-style: italic;
    }
}
</style>
