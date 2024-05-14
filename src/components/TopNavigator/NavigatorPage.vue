<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {useRouter} from "vue-router";
const store = useCounterStore()
const router = useRouter()

const goHome = () => {
  router.push('/')
}
//会员升级
const update = () => {
  store.dialogVisiable = !store.dialogVisiable
}
const openDrawer = () => {
  store.drawer = !store.drawer
}
//创作管理
const workManage = () => {
  router.push('/workManage')
}
</script>

<template>
  <div class="background_2">
    <div class="background-item">
      <div class="item">
        <el-tooltip
            class="box-item"
            effect="dark"
            content="返回首页"
            placement="bottom"
        >
          <div class="left-logo" @click="goHome"></div>
        </el-tooltip>
        <div class="menu-part">
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
              text-color="#E3E3E3"
              active-text-color="#F5DB9D"
              background-color="transparent"
              style="border-bottom: none"
              router
          >
            <el-menu-item index="/university">启蒙学院</el-menu-item>
            <el-menu-item index="/family">家族人生</el-menu-item>
            <el-menu-item index="/office">AI办公</el-menu-item>
            <el-menu-item index="/academy">宇宙家庭</el-menu-item>
            <el-menu-item index="/creative">创作广场</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="item">
        <el-tooltip
            class="box-item"
            effect="dark"
            content="我的鸮币"
            placement="bottom"
        >
          <div class="money">
            <div class="money_img"></div>
            <span>{{store.coin}}</span>
          </div>
        </el-tooltip>
        <el-tooltip
            class="box-item"
            effect="dark"
            content="AI状态"
            placement="bottom"
        >
          <div class="web_info">
            <span>GPT4：0</span>
            <span>MJ：0</span>
            <span>SD：0</span>
          </div>
        </el-tooltip>
          <div class="document_manage" @click="workManage">
            <img src="../../assets/doc.png" alt="">
            <span>创作管理</span>
          </div>
          <div class="account" @click="update">
            <span>升级会员</span>
          </div>
          <div class="note" @click="openDrawer">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="消息通知"
                placement="bottom"
            >
              <img src="../../assets/lin.png" alt="">
            </el-tooltip>
          </div>

        </div>
      </div>
    </div>
</template>

<style scoped>
@import "Navigator.css";
</style>