<template>
    <div>
        <h1>这是一个vue组件 --- {{ msg }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        // 注意组件中的data必须是function
        return { msg: "123" };
    },
    methods: {
        show() {
            console.log("调用login.vue中的show方法");
        }
    }
};
</script>

<style>
h1 {
    color: red;
    background: yellowgreen;
}
</style>
