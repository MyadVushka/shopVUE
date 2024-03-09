<script setup >
import { ref } from 'vue'
import { useArrayStore } from '@/stores/ArrayStore'

const arrayStore = useArrayStore()

const props = defineProps({
  price: Number,
  title: String,
  img: String,
  id: Number
})

const emits = defineEmits(['itemPrice'])

const isFavourite = ref(false)

const onClicAddHandler = () => {
  arrayStore.setAddToggle(props.id)
  emits('itemPrice', [
    props.price,
    props.id - 1,
    arrayStore.getAddState(props.id),
    props.title,
    props.img
  ])
}
</script>

<template>
  <div
    class="m-10 cursor-pointer border-2 rounded-3xl p-4 relative transition duration-300 hover:-translate-y-6 w-10/12 flex flex-col justify-center"
  >
    <img
      class="cursor-pointer absolute left-8 top-8"
      @click="isFavourite = !isFavourite"
      :src="isFavourite ? '/public/like-2.svg' : '/public/like-1.svg'"
      alt=""
    />
    <img class="m-8" :src="props.img" alt="" />
    <div class="text-block">
      <p>{{ props.title }}</p>
      <div class="flex items-center justify-between mt-4">
        <div class="">
          <p class="text-slate-500 font-medium">Цена:</p>
          <p class="font-bold">{{ props.price }} руб.</p>
        </div>
        <img
          class="cursor-pointer"
          @click="onClicAddHandler"
          :src="arrayStore.getAddState(props.id) ? '/public/checked.svg' : '/public/plus.svg'"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
