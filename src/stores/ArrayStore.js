import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useArrayStore = defineStore('array', () => {
  const arr = ref(null)
  const arrBought = ref(null)
  const setBeginArr = async () => {
    try {
      const data = await fetch('https://604781a0efa572c1.mokky.dev/items')
      const info = await data.json()
      let tempData = []
      for (let i = 0; i < 12; i++) {
        tempData.push(info[16][i])
      }
      console.log(tempData)
      arr.value = tempData
    } catch (error) {
      console.log(error)
    }
  }

  setBeginArr()

  const getArr = computed(() => arr.value)

  const getAddedArray = computed(() => {
    return arr.value ? arr.value.filter((el) => el.isAdded) : 0
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
    arrBought.value = arr.value.filter((el) => el.isAdded)
    
  }
  return {
    arr,
    getArr,
    setArr,
    getAddedArray,
    setAddToggle,
    setFavouriteToggle,
    getFavouriteArray,
    setBoughtListArray,
    getBoughtListArray
  }
})
