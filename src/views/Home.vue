<template>
   我是Home登入<br>
   <label>請輸入Email</label>
   <input v-model="user.email">
   <label>請輸入密碼</label>
   <input v-model="user.password">
   <button @click="submitLogin">送出</button>


   <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
   </el-row>
   <br>
   <button @click="isLogin">是否登入</button>
</template>

<script setup lang="ts">

import { toRaw, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/utils/request'

localStorage.setItem("myKey", "abc")

const router = useRouter()

let user = reactive({
   email: "",
   password: ""

})

let normalUser = toRaw(user)

console.log()

async function submitLogin() {
   console.log(normalUser)
   let result = await request.post(
      //"http://localhost:5173/dev-api/user/doLogin",
      "/user/doLogin",
      toRaw(user)

   )


   console.log(result.data)
}

async function isLogin() {

   let result = await request.get(
      "/user/isLogin"


   )


   console.log(result.data)
}
</script>



<style scoped></style>