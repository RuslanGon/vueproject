<template>
    <h1>{{ count }}</h1>
    <button @click="increment">+</button>
<br>
    <input @input="upDataCount" type="text">
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count += 1

        },
        upDataCount(event) {
            this.count = event.target.value
        }
    }
}
</script>

<style scoped></style>
