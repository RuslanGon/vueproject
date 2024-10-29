<template>
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl shadow-xl mt-14">
    <Header />
    <div>
      <div class="relative m-10 border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2">
        <img class="absolute top-8 left-8" src="/like-1.svg" alt="like">
        <img src="/sneakers/sneakers-1.jpg" alt="sneakers">
        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div class="flex justify-between ">
          <div class="flex flex-col">
            <span class="text-slate-400">Цена</span>
            <b>12 999 руб.</b>
          </div>
          <img src="/plus.svg" alt="plus">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';


</script>

<style scoped></style>
