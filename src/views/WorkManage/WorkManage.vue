<script setup>

import FooterPage from "@/LayOut/BottomFooter/FooterPage.vue";
import {Bell, Plus, Setting} from "@element-plus/icons-vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="background_4">
    <div style="width: 100%;height: 635px;display: flex">
        <div class="left-menu">
          <el-menu
              default-active="2"
              background-color="#fff"
              router
              text-color="#000000"
              active-text-color="#409EFF"
              class="el-menu-vertical-demo"
              style="width: 240px;min-height: 545px;margin-top: 85px;border: none"
          >
            <el-menu-item index="/workManage">
              <el-icon><plus /></el-icon>
              <span>一键投稿</span>
            </el-menu-item>
            <el-menu-item index="/content">
              <el-icon><setting /></el-icon>
              <span>内容管理</span>
            </el-menu-item>
            <el-menu-item index="/data">
              <el-icon><bell /></el-icon>
              <span>数据管理</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="right-box">
          <RouterView />
        </div>
    </div>
    <FooterPage />
  </div>
</template>

<style scoped>
@import "work.css";
</style>