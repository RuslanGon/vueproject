<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col">
    <DrawerHead />
    <InfoBlock title="Корзина пустая" desc="Добавьте хоть одну пару крассовок, чтоб сделать заказ" imageUrl="/package-icon.png"/>
    <div class="cart-container flex-1 overflow-y-auto">
      <CartItemList />
    </div>
    <div class="flex flex-col gap-3 mt-7">
      <div class="flex gap-2">
        <span>Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalPrice }} грн.</b>
      </div>
      <div class="flex gap-2">
        <span>Налог 5%:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ vatPrice }} грн</b>
      </div>
      <button :disabled="totalPrice ? false : true" @click="emitOrder"
        class="mt-4 transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-400 hover:bg-lime-600 active:bg-lime-700 cursor-pointer">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script setup>
import DrawerHead from './DrawerHead.vue';
import InfoBlock from './InfoBlock.vue';
import CartItemList from './CartItemList.vue';

const emit = defineEmits(['order']);

defineProps({
  totalPrice: Number,
  vatPrice: Number,
  order: Object 
});

// Добавьте метод, который вызывает emit
const emitOrder = () => {
  emit('order');
};
</script>

<style scoped>
.cart-container {
  height: calc(100vh - 2rem - 2rem); 
  overflow-y: auto; 
}
</style>
