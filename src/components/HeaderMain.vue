<script setup>
const props = defineProps({
  currentSum: Number
})

const emits = defineEmits(['turnOnCart'])
</script>

<template>
  <header class="flex justify-between items-center p-12">
    <div class="cursor-pointer flex items-center gap-4">
      <img class="w-14" src="/public/logo.png" alt="" />
      <div class="">
        <h1 class="font-bold text-2xl">VUE SNEAKERS</h1>
        <p class="text-slate-400">Магазин лучших кроссовок</p>
      </div>
    </div>
    <ul class="flex gap-4">
      <li @click="emits('turnOnCart', true)" class="cursor-pointer flex gap-2">
        <img src="/public/cart.svg" alt="" />
        <p class="font-medium">{{ props.currentSum }} руб.</p>
      </li>
      <li class="cursor-pointer flex gap-2">
        <img src="/public/heart.svg" alt="" />
        <p>Закладки</p>
      </li>
      <li class="cursor-pointer flex gap-2">
        <img src="/public/profile.svg" alt="" />
        <p>Профиль</p>
      </li>
    </ul>
  </header>
  <div class="border"></div>
</template>
