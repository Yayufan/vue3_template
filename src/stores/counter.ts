import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {useRouter} from 'vue-router'

export const useCounterStore = defineStore('counter', () => {

  const router = useRouter()

  const count = ref(5)
  const doubleCount = computed(() => {
    let newCount = count.value + 1
    
    return newCount * 2
  })


  function increment(value: number) {
    count.value += value

    ElMessage({
      message:'token失效,請重新登入',
      type:'error'
    })
    router.push("/about")

  }

  return { count, doubleCount, increment }
})
