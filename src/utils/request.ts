import axios, {type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
//這邊其實不用引入,因為有自動裝配插件,但是因為紅字很討厭,所以顯式引入他
// import {ElMessage} from "element-plus";

// 创建 axios 实例
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 50000
});


// 添加请求拦截器
service.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
    // 在发送请求之前做些什么
    //獲取Storage中的Token值
    let Authorization = localStorage.getItem("Authorization")
    console.log(Authorization)
    if(typeof(Authorization) != 'string'){

        console.log(config.headers)

        config.headers['Authorization'] = 'Bearer ' + '123456';

        console.log(config.headers)


    }else{



        // ElMessage({
        //     message: '有token',
        //     type: 'success',
        //   })
    }

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (res: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    ElMessage({
        message: '沒有token',
        type: 'error',
      })
    return res;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 导出 axios 实例
export default service;