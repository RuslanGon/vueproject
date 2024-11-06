<template>
  <Drawer v-if="draverOpen" :totalPrice="totalPrice" :vatPrice="vatPrice" :order="order" @order="createOrder"/>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header :totalPrice="totalPrice" @openDrawer="openDrawer"/>
    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>
        <div class="flex gap-4">
          <select v-model="sortBy" class="py-2 px-3 border rounded-md outline-none">
            <option value="">По названию</option>
            <option value="priceAsc">По цене (дешевая)</option>
            <option value="priceDesc">По цене (дорогая)</option>
          </select>
          <div class="relative">
            <img class="absolute left-4 top-3" src="/search.svg" alt="">
            <input v-model="searchQuery" class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400" placeholder="Поиск...">
          </div>
        </div>
      </div>
      <div class="mt-10">
        <CardList :items="filteredItems" @addToFavorite="addToFavorite" @toAddCart="onClickAddPlus"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Drawer from './components/Drawer.vue';
import Header from './components/Header.vue';
import CardList from './components/CardList.vue';
import { computed, onMounted, provide, ref } from 'vue';

const items = ref([
  {
    "id": 1,
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "imageUrl": "/sneakers/sneakers-1.jpg"
  },
  {
    "id": 2,
    "title": "Мужские Кроссовки Nike Air Max 270",
    "price": 15600,
    "imageUrl": "/sneakers/sneakers-2.jpg"
  },
  {
    "id": 3,
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "imageUrl": "/sneakers/sneakers-3.jpg"
  },
  {
    "id": 4,
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 7800,
    "imageUrl": "/sneakers/sneakers-4.jpg"
  },
  {
    "id": 5,
    "title": "Кроссовки Future Rider",
    "price": 9550,
    "imageUrl": "/sneakers/sneakers-5.jpg"
  },
  {
    "id": 6,
    "title": "Кроссовки Black Edition",
    "price": 16999,
    "imageUrl": "/sneakers/sneakers-6.jpg"
  },
  {
    "id": 7,
    "title": "Кроссовки Orange Boomb Edition",
    "price": 7499,
    "imageUrl": "/sneakers/sneakers-7.jpg"
  },
  {
    "id": 8,
    "title": "Кроссовки Nike Air Max 270",
    "price": 15600,
    "imageUrl": "/sneakers/sneakers-8.jpg"
  },
  {
    "id": 9,
    "title": "Кроссовки Nike Air Force 1",
    "price": 5900,
    "imageUrl": "/sneakers/sneakers-9.jpg"
  },
  {
    "id": 10,
    "title": "Кроссовки Adidas Ultraboost",
    "price": 11500,
    "imageUrl": "/sneakers/sneakers-10.jpg"
  },
  {
    "id": 11,
    "title": "Кроссовки Puma Clyde All-Pro",
    "price": 7600,
    "imageUrl": "/sneakers/sneakers-11.jpg"
  },
  {
    "id": 12,
    "title": "Кроссовки Converse Chuck Taylor All-Star",
    "price": 13000,
    "imageUrl": "/sneakers/sneakers-12.jpg"
  }
]);

const draverOpen = ref(false)
const searchQuery = ref('');
const sortBy = ref('');
const favorites = ref([]);
const cart = ref([])
const order = ref(null); 

const toAddCart = (item) => {
  cart.value.push(item);       
    item.isAdded = true;  
}

const removeFromCard = (item) => {
  const index = cart.value.indexOf(item);  
    if (index > -1) {
      cart.value.splice(index, 1); 
      item.isAdded = false;        
    }
}

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    toAddCart(item) 
  } else {
    removeFromCard(item)
  }
  console.log(cart);
};

// Открываем и закрывем карзину
const closeDrawer = () => {
  draverOpen.value = false
}

const openDrawer = () => {
  draverOpen.value = true
}

// Загружаем избранные элементы из localStorage при загрузке
const loadFavoritesFromStorage = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.value = storedFavorites;

  // Применяем состояние избранного к items
  items.value = items.value.map(item => ({
    ...item,
    isFavorite: !!favorites.value.find(fav => fav.id === item.id),
  }));
};

// Сохранение избранных элементов в localStorage
const saveFavoritesToStorage = () => {
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

const filteredItems = computed(() => {
  let filtered = items.value.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  // Сортировка
  if (sortBy.value === 'priceAsc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === 'priceDesc') {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    // Сортировка по названию (по умолчанию)
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
});

const addToFavorite = (item) => {
  item.isFavorite = !item.isFavorite;
  if (item.isFavorite) {
    favorites.value.push({ id: item.id });
  } else {
    favorites.value = favorites.value.filter(fav => fav.id !== item.id);
  }
  saveFavoritesToStorage();
  console.log(item);
};

// Загружаем избранные элементы при загрузке компонента
onMounted(() => {
  loadFavoritesFromStorage();
});

// Общая цена
const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0 ))

// Налог 5 %
const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

// provide('addToFavorite', addToFavorite)
provide('cart', {cart, closeDrawer, openDrawer, toAddCart, removeFromCard })

// Оформление заказа

const createOrder = () => {
  try {
    const orderItems = cart.value.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
    }));
    
    const order = {
      items: orderItems,
      totalPrice: totalPrice.value,
    };

    console.log('Создан заказ:', order);
    

    
    // Очистка корзины реактивным способом
    cart.value.splice(0, cart.value.length);
    
    return order;
  } catch (error) {
    console.log('Ошибка при создании заказа:', error);
  }
};

</script>

<style scoped>

</style>
