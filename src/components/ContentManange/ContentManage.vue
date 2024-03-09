<script setup>
import { ref } from "vue";
import  { provide } from "vue";
import { useCounterStore } from "@/stores/counter.js";
import MyWork from "@/components/MyWork/MyWork.vue";
const store = useCounterStore()
//暂时接受搜索参数
const search_data = ref()
//作品数量&状态
//过审
const pass = ref()
pass.value = store.workPass
//全部作品
const whole = ref()
whole.value = store.MyWork
//未过审
const noPass = ref()
noPass.value = store.workNoPass
//审核中
const waiting = ref()
waiting.value = store.wait2Pass
//分类选择器
const value = ref('')
const select_list = ref([
  {
    value: '按时间分类',
    label: '按时间分类'
  },
  {
    value: '按分区分类',
    label: '按分区分类'
  },
  {
    value: '按点击量分类',
    label: '按点击量分类'
  },
  {
    value: '审核中',
    label: '审核中'
  },
  {
    value: '未通过',
    label: '未通过'
  },
])
//投稿传值
//稿件标题
const myWorkTitle = ref('宁静校园')
provide('title',myWorkTitle)
//稿件图片
const placeholder = ref("src/assets/img/placeholder.png")
provide('img-url',placeholder)
//稿件图片说明
const imgInfo = ref('宁静校园')
provide('img-info',imgInfo)
//稿件时间
const year = ref(2024)
provide('year',year)
const month = ref(1)
provide('month',month)
const day = ref(23)
provide('day',day)
//稿件数据
const like = ref(54)
provide('like',like)
const view = ref(122)
provide('view',view)
const collect = ref(21)
provide('col',collect)
</script>

<template>
  <div class="content">
    <div class="content-box">
      <div class="content-title">
        <span>内容管理</span>
        <div class="content-search">
          <el-input v-model="search_data" placeholder="搜索稿件" clearable prefix-icon="search" style="width: 350px;height: 30px"/>
        </div>
      </div>
      <div class="content-info">
        <div class="content-info-item" style="display: block">
          <p style="height: 15px;line-height: 15px;font-size: 10px;font-weight: bold;width: 50px;text-align: left">草稿</p>
          <p style="height: 15px;line-height: 15px;font-size: 10px;text-align: left">
            全部作品: {{whole}}
            <el-divider direction="vertical" />
            已通过: {{pass}}
            <el-divider direction="vertical" />
            未通过: {{noPass}}
            <el-divider direction="vertical" />
            审核中: {{waiting}}
          </p>
        </div>
        <div class="content-info-item" style="display: flex;justify-content: flex-end">
          <el-select style="width: 300px;height: 30px" v-model="value" placeholder="分类方式">
            <el-option
                v-for="item in select_list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="content-container">
        <MyWork v-for="item in 6" :key="item" />
      </div>
      <div class="content-page">
        <el-pagination layout="prev, pager, next" :total="50" style="background-color: whitesmoke" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "content.css";
</style>