<script setup>
import { ref, watch } from 'vue'
import CardList from '@/components/CardList.vue'

const currentSum = ref(0)

const emits = defineEmits(['currentSum'])

watch(currentSum, () => {
  console.log(currentSum.value)
  emits('currentSum', currentSum.value)
})
</script>

<template>
  <CardList @current-sum="(sum) => (currentSum = sum)" />
</template>
