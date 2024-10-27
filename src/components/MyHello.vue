<template>
<h1>{{ count }}</h1>
    <button @click="increment()">+</button>
</template>

<script >
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count += 1

        }
    }
}
</script>

<style scoped>

</style>
