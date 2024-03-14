<script setup>
import SkeletonHolder from './SkeletonHolder.vue'
</script>

<template>
  <div class="border w-72 p-8 rounded-3xl flex my-4 flex-col justify-around gap-8">
    <SkeletonHolder height="220px" width="230px" border-radius="20px" />
    <div class="flex flex-col gap-4">
      <SkeletonHolder height="30px" width="220px" />
      <SkeletonHolder height="10px" width="100px" />
    </div>
  </div>
</template>
