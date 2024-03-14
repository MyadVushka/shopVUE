import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useArrayStore = defineStore('array', () => {
  const isLoaded = ref(false)
  const arr = ref(null)
  const arrBought = ref([])

  const setBeginArr = async () => {
    try {
      const data = await fetch('https://604781a0efa572c1.mokky.dev/items')
      const info = await data.json()
      let tempData = []
      for (let i = 0; i < 12; i++) {
        tempData.push(info[16][i])
      }
      arr.value = tempData
      isLoaded.value = true
    } catch (error) {
      console.log(error)
    }
  }

  setBeginArr()

  const getArr = computed(() => arr.value)

  const getStateLoad = computed(() => isLoaded.value)

  const getAddedArray = computed({
    get() {
      return arr.value ? arr.value.filter((el) => el.isAdded) : 0
    },
    set(value) {
      arr.value.isAdded = value
    }
  })

  const getFavouriteArray = computed(() => {
    return arr.value ? arr.value.filter((el) => el.isFavourite) : 0
  })
  const getBoughtListArray = computed(() => {
    return arrBought.value
  })

  const setArr = (value) => {
    arr.value = value
  }
  const setAddToggle = (id) => {
    arr.value[id].isAdded = !arr.value[id].isAdded
  }
  const setFavouriteToggle = (id) => {
    arr.value[id].isFavourite = !arr.value[id].isFavourite
  }
  const setBoughtListArray = () => {
    let temp = arr.value.filter((el) => el.isAdded)
    for (const item in temp) {
      arrBought.value.push(temp[item])
    }
    arr.value = arr.value.map((el) => el && { ...el, isAdded: false }) // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
  }

  return {
    arr,
    getArr,
    setArr,
    getStateLoad,
    getAddedArray,
    setAddToggle,
    setFavouriteToggle,
    getFavouriteArray,
    setBoughtListArray,
    getBoughtListArray
  }
})
