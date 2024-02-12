import axios from "axios"
import { ref, reactive } from 'vue'

// 可返回一張狗的圖片 https://dog.ceo/api/breed/pembroke/images/random

export default function(){

    //數據
    let dogList = reactive([
        "https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_1354.jpg"
    ])
    
    //方法
    async function addDog() {
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            console.log(result.data)
            dogList.push(result.data.message)
        } catch (e) {
            alert(e);
        }
    }

    //向外部提供東西
    return{dogList,addDog}

}

