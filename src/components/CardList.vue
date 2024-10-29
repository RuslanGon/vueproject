<template>
  <div class="grid grid-cols-4 gap-5">
    <Card tittle="Мужские Кроссовки Nike Blazer Mid Suede" 
    imageUrl="/sneakers/sneakers-1.jpg" 
    :price="5000"
    :onClickAdded="onClickAdded"
     />
  </div>
</template>

<script setup>
import Card from './Card.vue';

const onClickAdded = () => {
alert('add')
}
</script>