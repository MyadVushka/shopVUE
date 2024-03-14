<script setup>
import { ref, watch } from 'vue'
import { useArrayStore } from '@/stores/ArrayStore'
import debounce from 'lodash.debounce'
import CardItem from './CardItem.vue'
import SkeletonCard from './SkeletonCard.vue'

const arrayStore = useArrayStore()
const addFilteredArray = ref(null)
const sum = ref(0)
const currentReq = ref('')

// for current sum
const emits = defineEmits(['currentSum'])

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

// for current sum end

const onAddHandler = (id) => {
  arrayStore.setAddToggle(id)
}

const onFavouriteHandler = (id) => {
  arrayStore.setFavouriteToggle(id)
}

// for skeleton

const skeletonArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// for skeleton end

// Search Request Block

const requestedArr = ref([])

watch(currentReq, () => {
  if (currentReq.value.length <= 1) {
    arrayStore.setFilteredBySearchArrayClear()
  } else {
    debounceHandler()
  }
})

let debounceHandler = debounce(function () {
  arrayStore.setFilteredBySearchArray(currentReq.value)
  requestedArr.value = arrayStore.getFilteredBySearchArray
  console.log(arrayStore.getFilteredBySearchArray)
}, 300)

// Search Request Block end
</script>

<template>
  <section>
    <div class="flex items-center justify-between mb-14">
      <h2 class="font-bold text-3xl">Все кроссовки</h2>
      <div class="relative">
        <input
          v-model="currentReq"
          class="border border-splate-600 p-2 pl-10 pr-4 rounded-md"
          type="text"
          placeholder="Поиск"
        />
        <img class="absolute top-3 left-3" src="/public/search.svg" alt="" />
      </div>
    </div>
    <div
      v-auto-animate
      v-if="currentReq.length > 1"
      class="cards-shower-requested grid grid-rows-3 grid-cols-4"
    >
      <CardItem
        v-for="item in requestedArr"
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
    <div
      v-auto-animate
      v-else-if="arrayStore.getStateLoad"
      class="cards-shower grid grid-rows-3 grid-cols-4"
    >
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
    <div v-else class="skeleton-shower grid grid-rows-3 grid-cols-4">
      <SkeletonCard v-for="count in skeletonArr" :key="count" />
    </div>
  </section>
</template>
