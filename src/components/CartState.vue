<script setup >
import CartItem from './CartItem.vue'
const emits = defineEmits(['cartState'])

const props = defineProps({
  cost: Number,
  generalArray: Array
})

console.log(props.generalArray)
</script>

<template>
  <section class="fixed top-0 w-full h-svh bg-black opacity-40"></section>
  <div class="fixed h-svh w-96 bg-white top-0 right-0 p-6 flex flex-col gap-20">
    <div class="flex justify-between items-center">
      <button @click="emits('cartState', false)">
        <img class="rotate-180" src="/public/arrow-next.svg" alt="" />
      </button>
      <h2 class="font-bold text-2xl">Корзина</h2>
    </div>
    <div v-if="props.cost > 0" class="flex flex-col flex-1 justify-between">
      <div class="transaction-items">
        <CartItem
          v-for="item in props.generalArray"
          :key="item[1]"
          :img-url="item[4]"
          :cost="item[0]"
          :name="item[3]"
        />
      </div>
      <div class="">
        <div class="transaction-info-text mb-4">
          <div class="upper-text flex items-baseline gap-2 mb-2">
            <p>Итого:</p>
            <div class="border-b flex-1 border-dashed"></div>
            <p class="font-bold">{{ props.cost }} руб.</p>
          </div>
          <div class="upper-text flex items-baseline gap-2 mb-2">
            <p>Налог 5%:</p>
            <div class="border-b flex-1 border-dashed"></div>
            <p class="font-bold">{{ (props.cost * 0.05).toFixed(2) }} руб.</p>
          </div>
        </div>
        <button
          class="bg-lime-400 text-white w-full flex justify-center items-center p-4 rounded-2xl gap-3"
        >
          <span>Оформить заказ</span>
          <img src="/public/arrow-next-cart.svg" alt="" />
        </button>
      </div>
    </div>
    <div v-else class="flex flex-col gap-3 items-center mt-64">
      <img class="w-48" src="/public/package-icon.png" alt="" />
      <div class="text-center">
        <h2 class="font-bold text-2xl">Корзина пустая</h2>
        <p class="text-slate-500">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
