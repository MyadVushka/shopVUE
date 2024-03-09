<script setup >

const props = defineProps({
  imgUrl: String,
  cost: Number,
  name: String
})

const onDeleteHandler = () => {

}

</script>

<template>
  <div class="relative border p-3 rounded-xl flex justify-between items-center gap-1 mt-8">
    <img class="w-28" :src="props.imgUrl" alt="" />
    <div>
      <p>{{ props.name }}</p>
      <p>{{ props.cost }} руб.</p>
    </div>
    <button @click="onDeleteHandler" class="absolute right-3 bottom-3"><img src="/public/close.svg" alt="" /></button>
  </div>
</template>

<style scoped>

</style>
