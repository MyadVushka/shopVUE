import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useArrayStore = defineStore('arrayStore', () => {
  const refreshedArray = ref(0)

  const getArray = computed(() => refreshedArray.value)

  const setBeginArray = (beginArr) => {
    refreshedArray.value = beginArr
  }
  const setAddToggle = (id) => {
    refreshedArray.value[id - 1].isAdded = !refreshedArray.value[id - 1].isAdded
  }
  const getAddState = (id) => {
    return refreshedArray.value[id - 1].isAdded
  }
  return { refreshedArray, getArray, setBeginArray, setAddToggle, getAddState }
})
