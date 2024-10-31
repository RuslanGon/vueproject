<script setup>
import Card from './Card.vue';

const props = defineProps({
  items: Array
});

// Убедитесь, что элементы приходят правильно
console.log('Received items:', props.items);

const onClickAdded = () => {
  alert('add');
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card 
      v-for="item in items.slice(0, 12)" 
      :key="item.id"
      :title="item.title" 
      :imageUrl="item.imageUrl" 
      :price="item.price"
      :onClickAdded="onClickAdded"
      :isFavorite="false"
    />
  </div>
</template>
