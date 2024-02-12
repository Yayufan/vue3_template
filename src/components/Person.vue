<template>
    <div class="person">
        <h2>當前求和為 :{{ sum }}</h2>
        <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt="">
        <button @click="addDog">再來一隻狗</button>
        <button @click="increment">增加數字</button>
    </div>
</template>
  
<script lang="ts" setup name="Person">

import { type Person, type Persons } from "@/types/Person"
import useSum from "@/hooks/person/useSum"
import useDog from "@/hooks/person/useDog"

const {sum,increment,decrement} = useSum()
const {dogList,addDog} = useDog()





</script>
  
<style scoped>
img {
    width: 150px;
    margin-left: 10px;
}
</style>@/hooks/Person/useDog@/hooks/Person/useSum