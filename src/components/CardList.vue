<script setup>
import { onMounted, ref } from 'vue'
import CardItem from './CardItem.vue'
import { useArrayStore } from '@/stores/ArrayStore'

const arrayStore = useArrayStore()


const dataInfo = ref()

onMounted(async () => {
  try {
    const data = await fetch('https://604781a0efa572c1.mokky.dev/items')
    const info = await data.json()

    dataInfo.value = info[16]
    console.log(dataInfo.value)
    arrayStore.setBeginArray(dataInfo.value)
    console.log(arrayStore.getArray)
  } catch (error) {
    console.log(error)
  }
})



const emits = defineEmits(['generalNumber', 'generalArray'])

const arrayData = ref([])
const commonAmount = ref(0)

const generalAmountHandler = (data) => {
  if (data[2]) {
    arrayData.value.push(data)
  } else {
    arrayData.value = arrayData.value.filter((el) => el[1] !== data[1])
  }
  console.log(arrayData.value)
  commonAmount.value = arrayData.value.reduce(function (sum, el) {
    return sum + el[0]
  }, 0)

  emits('generalNumber', commonAmount.value)
  emits('generalArray', arrayData.value)
}
</script>

<template>
  <section class="p-10">
    <div class="side-menu flex items-center justify-between">
      <h1 class="font-bold text-3xl">Все кроссовки</h1>
      <div class="search relative">
        <img class="absolute top-2 left-3" src="/public/search.svg" alt="" />
        <input
          class="border-2 rounded-md p-1 pl-8 pr-2 border-slate-300"
          type="text"
          placeholder="Поиск"
        />
      </div>
    </div>
    <div class="mt-10 cards-shower grid grid-rows-3 grid-cols-4">
      <CardItem
        v-for="item in arrayStore.getArray"
        :key="item.id"
        :price="item.price"
        :img="item.imageUrl"
        :title="item.title"
        :id="Number(item.id)"
        @item-price="(data) => generalAmountHandler(data)"
      />
    </div>
  </section>
</template>

<style scoped></style>
