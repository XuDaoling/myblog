import { defineStore } from "pinia";
import {ref,computed} from 'vue'

export const useUserStore = defineStore("big-user", ()=>{
  const Logined = ref(false)
  const changeLogin = () =>{
    Logined.value = !Logined.value
  }
  const token = ref('')
  const user = ref({
    nane:'',
    photoNum:'',
    nickname:'',
    avatarUrl:''
  })
  const setToken = (newToken) =>{
    token.value = newToken
  }
  const removeToken = () =>{
    token.value = ''
  }
  return {
    Logined,
    changeLogin,
    user,
    token,
    setToken,
    removeToken
  }
},{
  persist: true,
})
