<script setup>
import { ref, watch } from 'vue'
import { useArrayStore } from '@/stores/ArrayStore'
import CardItem from './CardItem.vue'

const emits = defineEmits(['currentSum'])

const arrayStore = useArrayStore()
const addFilteredArray = ref(null)
const sum = ref(0)

watch(
  () => arrayStore.getAddedArray,
  () => {
    addFilteredArray.value = arrayStore.getAddedArray
    sum.value = addFilteredArray.value.reduce((sum, el) => {
      return sum + el.price
    }, 0)
    emits('currentSum', sum.value)
  }
)

const onAddHandler = (id) => {
  arrayStore.setAddToggle(id)
}

const onFavouriteHandler = (id) => {
  arrayStore.setFavouriteToggle(id)
}
</script>

<template>
  <section>
    <div class="flex items-center justify-between mb-14">
      <h2 class="font-bold text-3xl">Все кроссовки</h2>
      <div class="relative">
        <input
          class="border border-splate-600 p-2 pl-10 pr-4 rounded-md"
          type="text"
          placeholder="Поиск"
        />
        <img class="absolute top-3 left-3" src="/public/search.svg" alt="" />
      </div>
    </div>
    <div class="cards-shower grid grid-rows-3 grid-cols-4">
      <CardItem
        v-for="item in arrayStore.arr"
        :key="item.id"
        :id="item.id - 1"
        :img-url="item.imageUrl"
        :name="item.title"
        :cost="item.price"
        :is-added="item.isAdded"
        :is-favourite="item.isFavourite"
        @on-add="(id) => onAddHandler(id)"
        @on-favourite="(id) => onFavouriteHandler(id)"
      />
    </div>
  </section>
</template>
