<script setup>
import { ref, watch } from 'vue'
import { useArrayStore } from '@/stores/ArrayStore'
import CardItem from '@/components/CardItem.vue'

const arrayStore = useArrayStore()

const boughtListArray = ref(arrayStore.getBoughtListArray)

watch(
  () => arrayStore.getBoughtListArray,
  () => {
    boughtListArray.value = arrayStore.getBoughtListArray
  }
)
</script>

<template>
  <section class="p-10 h-svh overflow-y-hidden">
    <div class="flex gap-4 items-center">
      <router-link to="/">
        <img src="/public/arrow-back.svg" alt="" />
      </router-link>
      <p class="font-bold text-3xl">Мои покупки</p>
    </div>
    <div v-if="boughtListArray !== null" class="">
      <div v-auto-animate class="mt-10 grid grid-cols-4 grid-rows-4">
        <CardItem
          v-for="item in boughtListArray"
          :key="item.id"
          :name="item.title"
          :img-url="item.imageUrl"
          :cost="item.price"
        />
      </div>
    </div>
    <div v-else class="flex flex-col items-center mt-40">
      <img class="w-32" src="/public/emoji-2.png" alt="" />
      <div class="flex flex-col gap-2">
        <h2 class="font-bold text-xl text-center">У вас нет заказов</h2>
        <p class="text-slate-400 text-center">
          Вы нищеброд? <br />
          Оформите хотя бы один заказ.
        </p>
      </div>
    </div>
  </section>
</template>

