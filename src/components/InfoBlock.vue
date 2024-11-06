<template>
    <div class="flex flex-col items-center text-center w-72 mx-auto mt-16">
    <img height="70" width="70" :src="imageUrl" alt="title">
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="text-gray-400 mt-2">{{ desc }}</p>
    </div>
</template>

<script setup>
defineProps({
    imageUrl: String,
    title: String,
    desc: String,
})
</script>