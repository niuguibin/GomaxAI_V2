import { defineStore } from 'pinia'
import { ref } from "vue";

export const useCounterStore = defineStore('counter',() => {
   const count = ref(1)
   const follows = ref(233)
   const coin = ref(1994)
   const collection = ref(175)
   const like = ref(12321)
   const MyWork = ref(130)
   const token = ref('empty')
   const dialogVisiable = ref(false)
   const username = ref('手机尾号8888的用户')
   const userID = ref('xxxxx-11322-pp')
   const workPass = ref(119)
   const wait2Pass = ref(6)
   const requestion = ref()
   const drawer = ref(false)
   const workNoPass = ref(MyWork.value - workPass.value - wait2Pass.value)
  return { count,follows,coin,collection,like,dialogVisiable,requestion,drawer,MyWork,username,userID,token,workPass,workNoPass,wait2Pass }
})
