<template>
    <div class="flex flex-col items-center text-center w-72 mx-auto mt-16">
    <img height="70" width="70" :src="imageUrl" alt="title">
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="text-gray-400 mt-2">{{ desc }}</p>
    <button @click="closeDrawer"
        class="mt-8 transition bg-gray-500 w-full rounded-xl py-3 text-white disabled:bg-slate-400 hover:bg-gray-600 active:bg-gray-700 cursor-pointer">
        Вернуться назад
      </button>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const { closeDrawer } = inject('cart');

defineProps({
    imageUrl: String,
    title: String,
    desc: String,
})
</script>