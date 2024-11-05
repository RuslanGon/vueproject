<template>
      <div class="flex flex-col flex-1 gap-4">
        <CartItem v-for="item in cart" :key="item.id" :title="item.title" :price="item.price" :imageUrl="item.imageUrl"  @click="() => removeFromCard(item)" />
  </div>
</template>

<script setup>
import { inject } from 'vue';
import CartItem from './CartItem.vue';

const { cart, removeFromCard } = inject('cart')


</script>