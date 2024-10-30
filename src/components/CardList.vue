<template>
  <div class="grid grid-cols-4 gap-5">
    <Card 
    v-for="item in items" :key="item.id"
    :title="item.title" 
    :imageUrl="item.imageUrl" 
    :price="item.price"
    :onClickAdded="onClickAdded"
    :isFavorite="false"
     />
  </div>
</template>

<script setup>
import Card from './Card.vue';

const onClickAdded = () => {
alert('add')
}

defineProps({
  items: Array
})
</script>