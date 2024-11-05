<template>
    <div class="flex items-center border border-slate-300 p-4 rounded-xl gap-5">
        <img class="w-16 h-16" :src="imageUrl" :alt="title">
        <div class="flex  flex-col">
            <p>{{ title }}</p>
            <div class="flex justify-between mt-3 ">
                <b>{{ price }}</b>
                <img @click="emit('removeFromCard')" class="opacity-40  hover:opacity-100 cursor-pointer transition" src="/close.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: Number,
    imageUrl: String,
    title: String,
    price: Number,
})

const emit = defineEmits('removeFromCard')
</script>