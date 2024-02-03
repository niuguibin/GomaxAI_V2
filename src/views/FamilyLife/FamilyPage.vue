<script setup>
import {h, ref} from "vue";

import {ElMessage, ElNotification} from "element-plus";
import FooterPage from "@/components/BottomFooter/FooterPage.vue";
const ai_info = ref([
  {
    id: '爷爷',
    info: '我是爷爷'
  },
  {
    id: '爸爸',
    info: '我是爸爸'
  },
  {
    id: '祖母',
    info: '我是祖母'
  },
  {
    id: '舅爷',
    info: '我是舅爷'
  }
])
const message = ref('')
//该函数用于选择AI角色
const isShow = ref(false)
const info = ref('')
const select_ai = (index) => {
  info.value = ai_info.value[index].info
  isShow.value = true
}
//该函数用于用户发送信息，发送信息前先判断是否选择角色，如果为否则通知用户先选角色
//每次发送信息，都将信息push到数组中，气泡通过v-for渲染出信息
const list = ref([])
const show = ref(false)
const commit =  () => {
  //如果用户选择了角色，isShow为true
  if (isShow.value){
    if (message.value !== ''){
      list.value.push(message.value)
      show.value = true
    }else{
      ElMessage({
        message: '请输入您的问题!',
        type: "warning"
      })
    }
  }else{
    ElNotification({
      title: '警告',
      message: h('i', { style: 'color: teal' }, '请先选择对话角色!'),
    })
  }
}
</script>

<template>
  <div class="background">
    <div class="inner-box">
      <div class="left-box">
        <div class="ai-people" v-for="(item,index) in ai_info" :key="index" @click="select_ai(index)">
          <img src="../../assets/user.png" alt="" loading="lazy">
          <div class="ai-info">
            <p>{{item.id}}</p>
            <p>{{item.info}}</p>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="message">
          <div class="container" style="float: left">
            <div class="p-talking" v-show="isShow">
              <div class="ai-dot">
                <img src="../../assets/user.png" alt="" loading="lazy">
              </div>
              <div class="mes">
                <div class="bubble_1" style="border-radius: 10px 10px 10px 0;background-color: #c0bfbf;">
                  {{info}}
                </div>
              </div>
            </div>
          </div>
          <div class="container" style="float: right">
            <div class="p-talking_2" v-show="show" v-for="item in list" :key="item">
              <div class="mes" style="justify-content: flex-end">
                <div class="bubble_1" style="border-radius: 10px 10px 0 10px;margin-right: 20px;background-color: #22af22;">
                  {{item}}
                 </div>
              </div>
              <div class="ai-dot">
                <img src="../../assets/user.png" alt="" loading="lazy">
              </div>
            </div>
          </div>
          <div class="input_2">
            <div class="input_4">
              <el-button round class="el-btn" style="width: 40px;height: 40px;background-color: #4361FCE5">
                <el-icon style="color: white"><PictureRounded /></el-icon>
              </el-button>
            </div>
            <div class="input_3">
              <el-input clearable placeholder="请输入您的问题" v-model="message"/>
            </div>
            <div class="input_4">
              <el-button round class="el-btn" style="width: 40px;height: 40px;background-color: #4361FCE5" @click="commit">
                <el-icon style="color: white"><Position /></el-icon>
              </el-button>
            </div>
          </div>
        </div>
        <div class="digital-human"></div>
      </div>
    </div>
    <FooterPage/>
  </div>
</template>

<style scoped>
@import "Family.css";
</style>