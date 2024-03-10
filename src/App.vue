<script setup>
import { ref } from 'vue'

import CartState from './components/CartState.vue'
import HeaderMain from './components/HeaderMain.vue'

const currentSum = ref(0)
const cartState = ref(false)
</script>

<template>
  <div class="mx-auto mt-24 w-9/12 rounded-md shadow-xl bg-white">
    <HeaderMain :current-sum="currentSum" @turn-on-cart="(state) => (cartState = state)" />
    <router-view class="m-10" @current-sum="(sum) => currentSum = sum"></router-view>
  </div>
  <CartState
    v-if="cartState"
    :sum="currentSum"
    @turn-off-cart-state="(state) => (cartState = state)"
  />
</template>
