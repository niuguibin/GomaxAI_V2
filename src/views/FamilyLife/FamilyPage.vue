<template>
  <div class="background">
    <div class="inner-box">
      <div class="left-box">
        <div v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <div class="ai-people" v-for="(item,index) in ai_info" :key="index" @click="select_ai(index)" >
          <img src="../../assets/user.png" alt="" loading="lazy">
          <div class="ai-info">
            <p>{{ item.id }}</p>
          </div>
        </div>
        </div>
      </div>
      <div class="right-box">
        <div class="message">

          <div class="message-top">
          <el-row >
          <div class="container">
            <div class="p-talking" v-show="isShow">
              <div class="ai-dot">
                <img src="../../assets/user.png" alt="" loading="lazy">
              </div>
              <div class="mes">
                <div class="bubble_1" style="border-radius: 10px;background-color: white;">
                  {{ info }}
                </div>
              </div>
            </div>
          </div>
          </el-row>
          <el-row style="float: right">
          <div class="container">
            <div class="p-talking_2" v-show="show" v-for="item in list" :key="item">
              <div class="mes" style="justify-content: flex-end">
                <div class="bubble_1"
                     style="border-radius: 10px;margin-right: 20px;background-color: #4a6de0;">
                  {{ item }}
                </div>
              </div>
              <div class="ai-dot">
                <img src="../../assets/user.png" alt="" loading="lazy">
              </div>
            </div>
          </div>
          </el-row>
          </div>
          <div class="input">
            <div class="input-icon">
              <button><el-icon size="20px"><Star /></el-icon></button>
              <button><el-icon size="20px"><Folder /></el-icon></button>
              <button><el-icon size="20px"><ChatDotSquare /></el-icon></button>
            </div>

            <el-input v-model="message" :rows="3" :autofocus="true"  type="textarea" resize="none"
                      :autosize="{ minRows: 3, maxRows: 4 }" placeholder="Please input"/>

            <div class="input-submit">
              <el-button
                  style="background-color: #4361FCE5;float: right;height: 30px;width: 50px;margin-right: 20px"
                  @click="commit" >
                <el-icon style="color: white">
                  <Position/>
                </el-icon>
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import {h, ref} from "vue";

import {ElMessage, ElNotification} from "element-plus";
// import FooterPage from "@/components/BottomFooter/FooterPage.vue";
const ai_info = ref([
  {id: '祖父',info:'我是你的祖父哦，哈喽'},
  {id: '祖母',info:'我是你的祖母哦，哈喽'},
  {id: '爸爸',info:'我是你的爸爸哦，哈喽'},
  {id: '妈妈',info:'我是你的妈妈哦，哈喽'},
  {id: '叔叔',info:'我是你的叔叔哦，哈喽'},
  {id: '舅舅',info:'我是你的舅舅哦，哈喽'},
  {id: '舅妈',info:'我是你的舅妈哦，哈喽'},
  {id: '哥哥',info:'我是你的哥哥哦，哈喽'},
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
const commit = () => {
  //如果用户选择了角色，isShow为true
  if (isShow.value) {
    if (message.value !== '') {
      list.value.push(message.value)
      show.value = true
      message.value = ''
    } else {
      ElMessage({
        message: '请输入您的问题!',
        type: "warning"
      })
    }
  } else {
    ElNotification({
      title: '警告',
      message: h('i', {style: 'color: teal'}, '请先选择对话角色!'),
    })
  }
}
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<style scoped>
@import "Family.css";
</style>