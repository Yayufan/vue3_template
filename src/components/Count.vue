<!--  -->
<template>
    <div class="count">
        <h2>當前求和為: {{count}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">減</button>
    </div>
</template>


<script setup lang='ts'>
import {ref,reactive} from "vue"
import {useCounterStore} from "@/stores/counter"
import { storeToRefs } from 'pinia'

let {count,doubleCount} = storeToRefs(useCounterStore());

let n = ref<number>(1) //用戶選擇數字

function add(){
    //countStore.count += 1

    count.value += n.value
    // increment(n.value)

}

function sub(){
    count.value -= n.value
}


</script>

<style scoped>

.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,button{
    margin: 0 5px;
    height: 25px;
}


</style>
