<script setup>
import { watch, ref } from 'vue'
import CardItem from '@/components/CardItem.vue'
import { useArrayStore } from '@/stores/ArrayStore'

const arrayStore = useArrayStore()

const filteredFavouriteArray = ref(arrayStore.getFavouriteArray)

watch(
  () => arrayStore.getFavouriteArray,
  () => (filteredFavouriteArray.value = arrayStore.getFavouriteArray)
)

const onAddHandler = (id) => {
  arrayStore.setAddToggle(id - 1)
}

const onFavouriteHandler = (id) => {
  arrayStore.setFavouriteToggle(id - 1)
}
</script>

<template>
  <section class="p-10 h-svh overflow-y-hidden">
    <div class="flex gap-4 items-center">
      <router-link to="/">
        <img src="/public/arrow-back.svg" alt="" />
      </router-link>
      <p class="font-bold text-3xl">Мои закладки</p>
    </div>
    <div>
      <div v-if="filteredFavouriteArray.length" class="mt-10 grid grid-cols-4 grid-rows-4">
        <CardItem
          v-for="item in filteredFavouriteArray"
          :key="item.id"
          :id="item.id"
          :name="item.title"
          :img-url="item.imageUrl"
          :cost="item.price"
          :is-added="item.isAdded"
          :is-favourite="item.isFavourite"
          @on-add="(id) => onAddHandler(id)"
          @on-favourite="(id) => onFavouriteHandler(id)"
        ></CardItem>
      </div>
      <div v-else class="flex flex-col items-center mt-40">
        <img class="w-32" src="/public/emoji-1.png" alt="" />
        <div class="flex flex-col gap-2">
          <h2 class="font-bold text-xl text-center">Закладок нет :(</h2>
          <p class="text-slate-400 text-center">Вы ничего не добавляли в закладки</p>
        </div>
      </div>
    </div>
  </section>
</template>
