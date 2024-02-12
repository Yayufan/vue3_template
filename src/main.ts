

//引入創建App的function(花盆)
import { createApp } from 'vue'
import { createPinia } from 'pinia'

//引入App組件(花根)
import App from './App.vue'
import router from './router'

const dev = import.meta.env

console.log(dev)

//將App最為一個根組件(根目錄,起始的地方),創建應用(App)
const app = createApp(App)

app.use(createPinia())
app.use(router)

// 從index.html 這個入口文件,找到id為app的節點,將Vue組件給掛載上去
app.mount('#app')
