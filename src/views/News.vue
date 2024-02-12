<template>
    <div class="newsBox">
        <div>
            <ul>
                <li v-for="item in newsList" :key="item.id">
                    <RouterLink :to="{name:'detail' ,params: item}">{{ item.title }}</RouterLink>

                </li>
            </ul>
        </div>
        <div>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { RouterLink,RouterView } from "vue-router";

const newsList = reactive([
    {
        id: "uuid01",
        title: "如何一夜暴富",
        content: "富豪教你"
    },
    {
        id: "uuid02",
        title: "龍年萬大錢",
        content: "財神到"
    },
    {
        id: "uuid03",
        title: "原子習慣",
        content: "你完成不了的事"
    },
    {
        id: "uuid04",
        title: "窮爸爸富爸爸",
        content: "騙人的"
    },
])

</script>

<style scoped>
.newsBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>