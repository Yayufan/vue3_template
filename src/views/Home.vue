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
import axios from 'axios'
import { ElMessage } from "element-plus";

localStorage.setItem("myKey", "abc")


let Authorization = localStorage.getItem("Authorization")
console.log("這是token",Authorization)

if (typeof (Authorization) != 'string') {
   //這邊不用管飄紅,因為已經有引入自動載入插件了
   ElMessage({
      message: '沒有token',
      type: 'error',
   })
} else {
   ElMessage({
      //這邊不用管飄紅,因為已經有引入自動載入插件了
      message: '有token',
      type: 'success',
   })
}


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
      //"http://localhost:5173/dev-api/demo/user/doLogin",
      "/dev-api/user/doLogin",
      toRaw(user)

   )


   console.log(result.data)
}

async function isLogin() {

   let result = await axios.get(
      "http://localhost:5173/dev-api/user/isLogin"


   )


   console.log(result.data)
}
</script>



<style scoped></style>