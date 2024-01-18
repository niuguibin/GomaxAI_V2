import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter',{
  state(){
    return {
      count: 1,
      follows: 233,
      coin: 1993,
      collection: 175,
      like: 12321
    }
  },
  persist: {
    enable: true,
    strategies: [
      {storage: sessionStorage,paths: ['count','follows','coin','collection','like']}
    ]
  }
})
