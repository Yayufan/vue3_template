<!--  -->
<template>
    <div class="loveTalkBox">
        <button @click="getLoveTalk">獲取一句土味情話</button>
        <ul>
            <li v-for="item in loveTalkStore.talkList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue"
import axios from "axios"
import  {nanoid} from "nanoid"
import {useLoveTalkStore} from "@/stores/loveTalk"

const loveTalkStore = useLoveTalkStore()

console.log(loveTalkStore)

async function getLoveTalk(){
    let result = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json")
    console.log(result.data.content)

    let obj = {
        id: nanoid(),
        title: result.data.content
    }

    loveTalkStore.talkList.unshift(obj)
}

</script>

<style scoped>


.loveTalkBox {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>
