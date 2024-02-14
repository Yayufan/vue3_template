<template>
   我是Home登入<br>
   <label>請輸入Email</label>
   <input v-model="user.email">
   <label>請輸入密碼</label>
   <input v-model="user.password">
   <button @click="submitLogin">送出</button>

   
   <br>
   <button @click="isLogin">是否登入</button>
</template>

<script setup lang="ts">

import { toRaw, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

let user = reactive({
   email: "",
   password: ""

})

let normalUser = toRaw(user)


console.log()

async function submitLogin() {
   console.log(normalUser)
   let result = await axios.post(
      "http://localhost:5173/dev-api/demo/user/doLogin",
      toRaw(user)
   
   )


   console.log(result.data)
}

async function isLogin() {
   
   let result = await axios.get(
      "http://localhost:5173/dev-api/demo/user/isLogin"

   
   )


   console.log(result.data)
}
</script>



<style scoped></style>