<template>
  <header>
    <!-- <Person :list="personList" ></Person> -->
    <br>
    <!-- 導航區 -->
    <nav class="navbar">
      <RouterLink to="/" class="navItem" active-class="active">首頁</RouterLink>
      <RouterLink to="/news" class="navItem" active-class="active">新聞</RouterLink>
      <RouterLink replace :to="{ name: 'about' }" class="navItem" active-class="active">關於</RouterLink>
    </nav>
    <br>
    <!-- 展示區 -->
    <main>
      <RouterView />
    </main>
  </header>
</template>

<script setup lang="ts">
import Person from '@/components/Person.vue';
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, onBeforeUnmount, onMounted } from "vue"
import { type Persons } from "@/types/Person"

// onMounted(() => {
//   //設立瀏覽器監聽,如果離開當前頁面則刪除token
//   let beginTime = 0; //开始时间
//   let differTime = 0; //时间差
//   window.onunload = function () {
//     differTime = new Date().getTime() - beginTime;
//     if (differTime <= 5) {
//       console.log("這是關閉");
//       localStorage.removeItem('myKey')
//     } else {
//       console.log("这是刷新");
//     }
//   };

//   window.onbeforeunload = function () {
//     beginTime = new Date().getTime();
//   };

// })


let personList = reactive<Persons>([
  {
    id: "uuid01",
    name: "張三",
    age: 20
  }, {
    id: "uuid02",
    name: "李四",
    age: 40
  }, {
    id: "uuid03",
    name: "王武",
    age: 60
  }
])


</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navbar .navItem {
  padding: 5px 10px;
  background-color: rgb(192, 118, 118);
}

.navbar .active {

  color: rgb(222, 222, 29);
}

main {
  margin: 0 auto;
  width: 85%;
  height: 700px;
  background-color: rgb(95, 137, 123);
}
</style>
