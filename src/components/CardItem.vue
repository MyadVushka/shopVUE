<script setup>
const props = defineProps({
  id: Number,
  name: String,
  cost: Number,
  imgUrl: String,
  isFavourite: Boolean,
  isAdded: Boolean
})

const emits = defineEmits(['onAdd', 'onFavourite'])

const onAdd = () => {
  emits('onAdd', props.id)
}

const onFavourite = () => {
  emits('onFavourite', props.id)
}
</script>

<template>
  <div
    class="relative border w-72 px-8 rounded-3xl cursor-pointer transition duration-300 hover:-translate-y-5 hover:shadow-xl my-4 flex flex-col justify-around"
  >
    <img :src="props.imgUrl" alt="" />
    <div class="flex flex-col gap-2">
      <h2>{{ props.name }}</h2>
      <div class="flex items-center justify-between">
        <div class="">
          <p class="text-slate-400">Цена:</p>
          <p class="font-bold">{{ props.cost }} руб.</p>
        </div>
        <img
          @click="onAdd"
          class="absolute right-5 bottom-4 w-8 cursor-pointer"
          :src="props.isAdded ? '/public/checked.svg' : '/public/plus.svg'"
          alt=""
        />
        <img
          @click="onFavourite"
          class="absolute top-5 w-8"
          :src="props.isFavourite ? '/public/like-2.svg' : '/public/like-1.svg'"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
