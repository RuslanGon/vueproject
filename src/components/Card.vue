<template>
    <div
        class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <img @click="onClickFavorite" class="absolute top-8 left-8" :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="like">
        <img :src="imageUrl" alt="sneakers">
        <p class="mt-2">{{ title }}</p>
        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <span class="text-slate-400">Цена</span>
            <b>{{ price }} грн</b>
          </div>
          <img @click="onClickAdded" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus">
        </div>
      </div>
</template>

<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdded: Function,
  onClickFavorite: Function

})

</script>