<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {Edit} from "@element-plus/icons-vue";
import { ref } from "vue";
import {watchEffect} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";
//用户个人信息
const store = useCounterStore()
const coin = store.coin
const follow = store.follows
const collection = store.collection
const MyWork = store.MyWork
const like = store.like
const userID = store.userID
const username = ref()
//编辑弹窗
const isShow = ref(false)
watchEffect(() => {
  username.value = store.username
})
const open = () => {
  isShow.value = !isShow.value
  ElMessageBox.prompt('请输入新的用户名', '修改用户名', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
        /^[a-zA-Z]{4}[0-9a-zA-Z]{4}$/,
    inputErrorMessage: '无效用户名',
  })
      .then(({ value }) => {
        if (value){
          store.username = value
          ElMessage({
            type: 'success',
            message: `新的用户名是:${value}`,
          })
        }else{
          console.log('error!')
        }
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '输入取消',
        })
      })
}
</script>

<template>
  <div class="background">
    <div class="left-info">
      <div class="left-img"><img src="../../assets/user.png" alt=""></div>
      <el-card style="width: 250px;height: 70%;margin: 130px auto;">
        <div class="left-word" style=";height: 50px!important;">
          <el-button style="width: 50px;height: 50px;float: right;border: none;font-size: 20px" :icon="Edit" @click="open" />
        </div>
        <div class="left-word" style="margin-top: 40px">
          用户名: <span class="important">{{username}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          用户ID: <span class="important">{{userID}}</span>
        </div>
        <el-divider />
        <div class="left-word" style="margin-top: 20px">
          我的鸮币: <span class="important">{{coin}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的关注: <span class="important">{{follow}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的收藏: <span class="important">{{collection}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的作品: <span class="important">{{MyWork}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的点赞: <span class="important">{{like}}</span>
        </div>
      </el-card>
    </div>
    <div class="right-info">
      <el-card style="width: 90%;height: 350px;margin: 130px auto">

      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "user.css";
</style>