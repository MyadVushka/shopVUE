<script setup>
import CartItem from './CartItem.vue'
import { ref, watch } from 'vue'
import { useArrayStore } from '@/stores/ArrayStore'

const props = defineProps({
  sum: Number
})

const emits = defineEmits(['turnOffCartState'])

const arrayStore = useArrayStore()

const filteredArray = ref(arrayStore.getAddedArray)

watch(
  () => arrayStore.getAddedArray,
  () => {
    filteredArray.value = arrayStore.getAddedArray
  }
)

const onDeleteHandler = (id) => {
  arrayStore.setAddToggle(id - 1)
}
</script>

<template>
  <section class="fixed w-full bg-black opacity-50 h-svh top-0 z-20"></section>
  <div class="fixed w-3/12 h-svh top-0 right-0 z-30 bg-white p-6 flex flex-col">
    <div class="flex items-center justify-between">
      <img
        @click="emits('turnOffCartState', false)"
        class="rotate-180 cursor-pointer"
        src="/public/arrow-next.svg"
        alt=""
      />
      <h2 class="font-bold text-2xl">Корзина</h2>
    </div>
    <div v-if="props.sum === 0" class="mt-72">
      <img class="mx-auto" src="/public/package-icon.png" alt="" />
      <div class="mt-4">
        <h2 class="font-bold text-center text-2xl">Корзина пустая</h2>
        <p class="text-slate-400 text-center text-lg">
          Добавьте хотя бы одну пару <br />
          кроссовок, чтобы сделать заказ
        </p>
      </div>
    </div>
    <div v-else class="">
      <div class="">
        <CartItem
          v-for="item in filteredArray"
          :key="item.id"
          :cost="item.price"
          :img-url="item.imageUrl"
          :name="item.title"
          :id="item.id"
          @on-delete="(id) => onDeleteHandler(id)"
        />
      </div>
      <div class="fixed bottom-10 flex flex-col gap-2">
        <div class="flex items-baseline justify-between gap-4">
          <p>Итого:</p>
          <div class="border-b border-slate-400 border-dashed w-48"></div>
          <div class="font-bold">{{ props.sum.toFixed(2) }} руб.</div>
        </div>
        <div class="flex items-baseline justify-between gap-4">
          <p class="whitespace-nowrap">Налог 5%:</p>
          <div class="border-b border-slate-400 border-dashed w-48"></div>
          <div class="font-bold">{{ (props.sum * 0.05).toFixed(2) }} руб.</div>
        </div>
        <div class="relative">
          <button
            class="bg-lime-400 text-white rounded-2xl text-center py-4 w-full transition hover:bg-lime-500"
          >
            Оформить заказ
          </button>
          <img
            class="absolute top-1/2 -translate-y-1/2 right-9"
            src="/public/arrow-next-cart.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
