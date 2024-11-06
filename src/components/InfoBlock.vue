<template>
    <img height="70" width="70" :src="imageUrl" alt="title">
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="">{{ desc }}</p>
</template>

<script setup>
defineProps({
    imageUrl: String,
    title: String,
    desc: String,
})
</script>