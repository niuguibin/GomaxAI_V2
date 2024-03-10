<template>
  <div class="background" style="margin-top: 47px">
    <el-row>
      <el-container style="background-color:#2F3233;height: 300px">
        <el-aside  style="width:60%;">
          <el-carousel
              class="swiper"
              height="100%"
              autoplay
              pause-on-hover
          >
          <el-carousel-item v-for="item in img_url" :key="item">
            <img :src="item.src" alt="" loading="lazy" class="carousel-img">
          </el-carousel-item>
          </el-carousel>
        </el-aside>
        <el-main style="width: 40%;">
         <el-row v-for="item in 3" :key="item" style="display: flex;align-items: start">
           <span class="info-text">GoMax第二届AI创作大赛时间确认</span>
         </el-row>
        </el-main>
      </el-container>
    </el-row>
    <el-row style="background-color:#2F3233;height: 700px;margin-top: 14px;border-radius: 15px;display: flex;justify-content: center">

          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" >
            <el-tab-pane>
              <template #label >
                <div style="margin-top: 50px;">
                  <svg style="width: 50px; height: 50px;">
                    <use href="#icon-ChatGPT"></use>
                  </svg>
                  <span>ChatGPT</span>
                </div>
              </template>
              <el-main style="background-color: #2F3233;width: 100%">
                Main
              </el-main>
            </el-tab-pane>

            <el-tab-pane >
              <template #label>
                <div style="margin-top: 100px">
                  <svg style="width: 50px; height: 50px;">
                    <use href="#icon-ChatGPT"></use>
                  </svg>
                  <span>MidJourney</span>
                </div>
              </template>
              Config
            </el-tab-pane>

            <el-tab-pane>
              <template #label>
                <div style="margin-top: 100px">
                  <svg style="width: 50px; height: 50px;">
                    <use href="#icon-ChatGPT"></use>
                  </svg>
                  <span>StableDiffusion</span>
                </div>
              </template>
              Role
            </el-tab-pane>
          </el-tabs>



    </el-row>

    <FooterPage/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const img_url = ref([
  {id:1,src: '/src/assets/img/swiper_1.jpg'},
  {id:2,src: '/src/assets/img/swiper_2.jpg'},
  {id:3,src: '/src/assets/img/swiper_3.jpg'}
])

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
import FooterPage from "@/components/BottomFooter/FooterPage.vue";
</script>

<style scoped>
@import "Creative.css";
</style>