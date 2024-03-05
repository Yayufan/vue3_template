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

   <br>

   <button @click="increment(5)">點我+數量及跳轉 </button>

   <!--靜態資源訪問-->
   <!-- <img src="@/assets/image/agneda.png" style="width:300px;height:200px"> -->

   <img src="http://localhost:5173/minio/joey-test/agneda.png" style="width:300px;height:200px">

</template>

<script setup lang="ts">

import { toRaw, reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/utils/request'
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'

// const imageSrc = ref('');


// onMounted(() => {
//    axios.get('/minio/joey-test/agneda.png',{responseType: 'arraybuffer'})
//       .then(response => {
//          // 处理图片数据
//          console.log(response.data);

//          // 将图片数据转换为 Blob 对象
//         const blob = new Blob([response.data], { type: 'image/jpeg' });
        
//         // 创建一个 URL 对象
//         imageSrc.value = URL.createObjectURL(blob);
//       })
//       .catch(error => {
//          // 处理错误
//          console.error('Error fetching image:', error);
//       });
// })


//localStorage.setItem("myKey", "abc")
//localStorage.removeItem('myKey')

let { increment } = useCounterStore()

//  increment(5)

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
   localStorage.setItem(result.data.tokenName, 'Bearer' + ' ' + result.data.tokenValue)


}

async function isLogin() {

   let result = await request.get(
      "/user/isLogin"
   )

   console.log(result)
}
</script>



<style scoped></style>