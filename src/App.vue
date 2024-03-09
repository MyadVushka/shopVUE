<script setup>
import HeaderMain from './components/HeaderMain.vue'
import CardList from './components/CardList.vue'
import CartState from './components/CartState.vue'

import { ref } from 'vue'
import { useArrayStore } from '@/stores/ArrayStore'

const arrayStore = useArrayStore()

const generalAmount = ref(0)
const cartStateVisibility = ref(false)

const generalArray = ref([])


</script>

<template>
  <div class="wrapper w-4/5 mx-auto bg-white rounded-lg shadow-xl mt-20">
    <HeaderMain
      :general-amount-props="generalAmount"
      @cart-state="(state) => (cartStateVisibility = state)"
    />
    <CardList
      :array-of-items="dataInfo"
      @general-number="(data) => (generalAmount = data)"
      @general-array="(array) => (generalArray = array)"
    />
  </div>
  <CartState
    v-if="cartStateVisibility"
    :cost="generalAmount"
    :general-array="generalArray"
    @cart-state="(state) => (cartStateVisibility = state)"
  />
</template>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
