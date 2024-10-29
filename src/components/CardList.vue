<template>
  <div class="grid grid-cols-4 gap-5">
    <Card tittle="Мужские Кроссовки Nike Blazer Mid Suede" 
    imageUrl="/sneakers/sneakers-1.jpg" 
    :price="5000"
    :onClickAdded="onClickAdded"
     />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</template>

<script setup>
import Card from './Card.vue';

const onClickAdded = () => {
  alert('Add')
}
</script>