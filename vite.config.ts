import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import vue from '@vitejs/plugin-vue'

const env = process.cwd()
console.log("配置文件中的環境變量", env)

// https://vitejs.dev/config/
// 這邊配置的跟Vite 一開始配置的不一樣要注意!! 因為我們要在vite,config.ts中獲取環境配置文件
//所以需要mode和loadEnv來協助加載, rocess.cwd()為當前目錄, mode為當前目錄的mode
export default defineConfig(({ command, mode }) => {
  console.log("這是command", command)
  //mode為當前運行環境
  console.log("這是mode", mode)
  // 根據當前工作目錄中的 `mode` 加載 .env 文件
  const env = loadEnv(mode, process.cwd());
  console.log(env); //輸出VITE_BASE的環境變數

  //這邊原本是默認暴露defineConfig()函數內所有的對象,但因為我們在裡面多加了一層箭頭函數
  //所以這邊要進行return , 讓他為defineConfig()的返回值, 其實返回值也是原本的對象
  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
    // 例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。

    // base:env.VITE_APP_CONTEXT_PATH,
    plugins: [
      vue(),
      VueSetupExtend(),

    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      //任何人都能訪問,只要取於同一個ip底下
      host: '0.0.0.0',
      //port: Number(env.VITE_APP_PORT),  此為更改開發server的port,沒事的話用預設的就好
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:8080',
          changeOrigin: true,  //跨域處理
          ws: true,  //是否可啟用Websocket,true為可以
          //將/dev-api重寫為''空字串,這樣後端就不用添加dev-api開頭了
          rewrite: (path) => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    }
  }
})
