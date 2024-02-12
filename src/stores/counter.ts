import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const count = ref(5)
  const doubleCount = computed(() => {
    let newCount = count.value + 1
    
    return newCount * 2
  })


  function increment(value: number) {
    count.value += value
  }

  return { count, doubleCount, increment }
})
