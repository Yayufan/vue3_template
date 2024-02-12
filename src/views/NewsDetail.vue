<!--  -->
<template>
    <div class="newsDetailBox">
        <ul>
            <li>編號: {{ id }}</li>
            <li>標題: {{ title }}</li>
            <li>內容: {{ content }}</li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { useRoute } from "vue-router"

// const route = useRoute()

defineProps(['id','title','content'])


</script>

<style scope></style>
