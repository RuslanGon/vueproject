<script setup>
import Card from './Card.vue';
import { inject } from 'vue';

const props = defineProps({
  items: Array,
});

// Убедитесь, что элементы приходят правильно
console.log('Received items:', props.items);

// const onClickAdded = () => {
//   emit('addToFavorite', item)
// }

const emit = defineEmits(['addToFavorite', 'toAddCart'])


// const addToFavorite = inject('addToFavorite')

</script>

<template>
  <div class="grid grid-cols-4 gap-5" v-auto-animate>
    <Card 
      v-for="item in items.slice(0, 12)" 
      :key="item.id"
      :id="item.id"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdded="() => emit('toAddCart', item)"
      :title="item.title" 
      :imageUrl="item.imageUrl" 
      :price="item.price"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
    />
  </div>
</template>
