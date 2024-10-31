<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">
    <div class="flex items-center gap-4">
      <img class="w-10" src="/logo.png" alt="logo">
      <div>
        <h2 class="text-xl font-bold uppercase hover:text-gold cursor-pointer">VUE SNEAKERS</h2>
        <p class="text-slate-500">Магазин лучших кроссовок</p>
      </div>
    </div>

    <ul class="flex items-center gap-10 text-slate-500">
      <li
        class="flex items-center gap-3 hover:text-black cursor-pointer transform hover:scale-105 transition duration-200">
        <img src="/cart.svg" alt="cart"><span>1205 грн</span>
      </li>
      <li
        class="flex items-center gap-3 hover:text-black cursor-pointer transform hover:scale-105 transition duration-200">
        <img src="/heart.svg" alt="heart"><span>Закладки</span>
      </li>
      <li
        class="flex items-center gap-3 hover:text-black cursor-pointer transform hover:scale-105 transition duration-200">
        <img src="/profile.svg" alt="cart"><span>Профиль</span>
      </li>
    </ul>
    
  </header>
</template>