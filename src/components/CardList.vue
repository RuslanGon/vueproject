<script setup>
import Card from './Card.vue';

const props = defineProps({
  items: Array
});

// Фильтрация массива, чтобы оставить только корректные объекты товаров
const filteredItems = props.items.flatMap(item => 
  typeof item === 'object' && 'id' in item && 'title' in item && 'price' in item && 'imageUrl' in item 
    ? item 
    : Object.values(item).filter(i => typeof i === 'object' && 'id' in i && 'title' in i && 'price' in i && 'imageUrl' in i)
);

const onClickAdded = () => {
  alert('add');
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card 
      v-for="item in filteredItems.slice(0, 12)" 
      :key="item.id"
      :title="item.title" 
      :imageUrl="item.imageUrl" 
      :price="item.price"
      :onClickAdded="onClickAdded"
      :isFavorite="false"
    />
  </div>
</template>
