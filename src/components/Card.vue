<template>
    <div
        class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <img class="absolute top-8 left-8" src="/like-1.svg" alt="like">
        <img :src="imageUrl" alt="sneakers">
        <p class="mt-2">{{ tittle }}</p>
        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <span class="text-slate-400">Цена</span>
            <b>{{ price }}</b>
          </div>
          <img src="/plus.svg" alt="plus">
        </div>
      </div>
</template>

<script setup>
defineProps({
  imageUrl: String,
  tittle: String,
  price: Number
})
</script>