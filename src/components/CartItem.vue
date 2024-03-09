<script setup>
const props = defineProps({
  name: String,
  cost: Number,
  imgUrl: String,
  id: Number,
})

const emits = defineEmits(['onDelete'])

</script>

<template>
  <div class="relative p-3 border rounded-lg mt-8 flex items-center gap-4">
    <img class="w-20" :src="props.imgUrl" alt="" />
    <div class="">
      <p>{{ props.name }}</p>
      <p class="font-bold">{{ props.cost }} руб.</p>
    </div>
    <img @click="emits('onDelete', props.id)" class="cursor-pointer absolute bottom-3 right-3" src="/public/close.svg" alt="" />
  </div>
</template>
