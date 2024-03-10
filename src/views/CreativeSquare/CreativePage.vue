<template>
  <div class="background" style="margin-top: 47px">
<!--      走马灯-->
    <el-row :gutter="50" justify="space-between">
      <el-col  :span="15" >
        <div style="height: 300px;">
          <el-carousel
              class="swiper"
              indicator-position="none"
              autoplay
              pause-on-hover
              style="width: 100%"
          >
            <el-carousel-item v-for="item in img_url" :key="item">
              <img :src="item.src" alt="" loading="lazy" class="carousel-img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="9">
     <div>
     <el-row v-for="item in 3" :key="item" class="info-text">
      <span>GoMax第二届AI创作大赛时间确认</span>
     </el-row>
      </div>
      </el-col>
    </el-row>
  <el-row>
    <el-tabs v-model="activeName"  style="width: 780px;" stretch>
      <el-tab-pane name="1">
  <span slot="label">
    <span class="tabStyle">
      111111
                  <svg style="width: 50px; height: 50px;">

              <use href="#icon-ChatGPT"></use>
            </svg>
    </span>
    <span style="display: block">基础信息</span>
  </span>

        <div>

        </div>
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

import { reactive, toRefs } from 'vue'
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }

const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
import { ref } from 'vue'

const tabPosition = ref('left')
import FooterPage from "@/components/BottomFooter/FooterPage.vue";
</script>

<style scoped>
@import "Creative.css";

</style>