<script setup>
import { inject,ref} from "vue";
import { useCounterStore } from "@/stores/counter.js";
const store = useCounterStore()
//用户名
const username = ref()
username.value = store.username
//作品时间
const year = ref()
year.value = inject('year')
const month = ref()
month.value = inject('month')
const day = ref()
day.value = inject('day')
//稿件图片
const url = ref()
url.value = inject('img-url')
const img_info = ref('')
img_info.value = inject('imgInfo')
const title = ref('')
title.value = inject('title')
//稿件数据
const like = ref()
like.value = inject('like')
const view = ref()
view.value = inject('view')
const collect = ref()
collect.value = inject('col')
</script>

<template>
  <div class="work">
    <div class="work-img">
      <img :src="url.value" :alt="img_info">
    </div>
    <div class="work-message">
      <p style="font-weight: bold;font-size: 20px">{{title}}</p>
      <p style="font-size: 15px;font-weight: normal">{{username}}</p>
      <p style="font-size: 15px;font-weight: normal">{{year.value + '年' + month.value + '月' + day.value + '日'}}</p>
      <p style="position: absolute;bottom: 0;font-size: 10px">
        {{'浏览量:' + view.value}}
        <el-divider direction="vertical"/>
        {{'点赞:' + like.value}}
        <el-divider direction="vertical"/>
        {{'收藏:' + collect.value}}
      </p>
    </div>
    <div class="work-button">
      <el-button-group style="width: 100%">
        <el-button type="primary" size="small">修改</el-button>
        <el-button type="info" size="small">删除</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<style scoped>
@import "work.css";
</style>