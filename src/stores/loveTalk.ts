import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoveTalkStore = defineStore('talk', () => {
  const talkList = reactive([
    { id: "uuid01", title: "今天你有點怪,哪裡怪? 怪好看的!" },
    { id: 'uuid02', title: '草莓、蓝莓、蔓越莓，你想我了没？' },
    { id: 'uuid03', title: '心里给你留了一块地，我的死心塌地' }])

  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  return { talkList }
})
