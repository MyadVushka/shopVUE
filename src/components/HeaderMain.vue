<script setup>
import { ref } from 'vue'

const props = defineProps({
  generalAmountProps: Number
})

const emits = defineEmits(['cartState'])

const cartStateHandler = () => {
  emits('cartState', true)
}
</script>

<template>
  <header class="flex justify-between items-center p-10">
    <div class="left-bar flex gap-2">
      <a class="flex items-center gap-4" href="#">
        <img class="w-14" src="/public/logo.png" alt="" />
        <div class="flex flex-col">
          <h1 class="font-bold text-xl">VUE SNEAKERS</h1>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </a>
    </div>
    <ul class="flex gap-10">
      <li @click="cartStateHandler" class="cursor-pointer flex gap-3 items-center">
        <img src="/public/cart.svg" alt="" />
        <p class="font-medium">{{ props.generalAmountProps }} руб.</p>
      </li>
      <li class="cursor-pointer flex gap-3 items-center">
        <img src="/public/heart.svg" alt="" />
        <p>Закладки</p>
      </li>
      <li class="cursor-pointer flex gap-3 items-center">
        <img src="/public/profile.svg" alt="" />
        <p>Профиль</p>
      </li>
    </ul>
  </header>
  <div class="w-full h-0.5 bg-slate-200"></div>
</template>

<style scoped></style>
