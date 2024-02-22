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
  return { count,follows,coin,collection,like,dialogVisiable,MyWork,username,userID,token }
})
