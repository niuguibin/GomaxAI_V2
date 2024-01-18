<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {useRouter} from "vue-router";
const store = useCounterStore()
const router = useRouter()
const login = () => {
  router.push('/login')
}
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="background_2">
    <div class="background-item">
      <div class="item">
        <div class="left-logo" @click="goHome"></div>
        <div class="menu-part">
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
              active-text-color="#ffffff"
              background-color="transparent"
              style="border-bottom: none"
              router
          >
            <el-menu-item index="/university">宇宙家庭</el-menu-item>
            <el-menu-item index="/family">家族人生</el-menu-item>
            <el-menu-item index="/office">AI办公</el-menu-item>
            <el-menu-item index="/academy">启蒙学院</el-menu-item>
            <el-menu-item index="/creative">创作广场</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="item">
          <div class="money">
            <div class="money_img"></div>
            <span>{{store.coin}}</span>
          </div>
          <div class="web_info">
            <span>GPT4：0</span>
            <span>MJ：0</span>
            <span>SD：0</span>
          </div>
          <div class="document_manage">
            <img src="../../assets/doc.png" alt="">
            <span>创作管理</span>
          </div>
          <div class="account">
            <span>升级会员</span>
          </div>
          <div class="note">
            <img src="../../assets/lin.png" alt="">
          </div>
          <el-button class="login" @click="login">
            登录/注册
          </el-button>
        </div>
      </div>
    </div>
</template>

<style scoped>
@import "Navigator.css";
</style>