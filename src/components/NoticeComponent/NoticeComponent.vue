<script setup>
import { ref } from "vue";
import {onMounted} from "vue";
//根据得到的时间信息拼接为年月日的标准格式
const year = ref()
const month = ref()
const day = ref()
let msg = ref()
const timer = () => {
  year.value = new Date().getFullYear()
  month.value = new Date().getMonth() + 1
  day.value = new Date().getDate()
  msg.value =  `${year.value}` + '年' + `${month.value}` + '月' + `${day.value}` + '日'
}
onMounted(() => {
  timer()
})
</script>

<template>
  <div class="drawer">
    <div class="drawer-top">
      <span class="drawer-title">{{msg}}</span>
      <span class="drawer-close">
        <el-icon style="width: 30px;height: 30px"><Close /></el-icon>
      </span>
    </div>
    <div class="drawer-main">您有一条消息</div>
  </div>
</template>

<style scoped>
@import "notice.css";
</style>