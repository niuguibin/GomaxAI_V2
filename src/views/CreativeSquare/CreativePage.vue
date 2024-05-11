<template>
  <div style="margin-top: 100px;padding: 0px 150px 0 150px">
    <el-row >
      <el-col  :span="15" >
        <div style="height: 300px;">
          <el-carousel
              class="swiper"
              indicator-position="none"
              autoplay
              pause-on-hover
              style="width: 100%;"
          >
            <el-carousel-item v-for="item in img_url" :key="item">
              <img :src="item.src" alt="" loading="lazy" class="carousel-img">
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
      <el-col :span="9" style="background-color: #2F3233;padding-top: 10px;padding-left: 20px">
        <div>
          <el-row v-for="item in 3" :key="item" class="info-text" >
            <span>GoMax第二届AI创作大赛时间确认</span>
          </el-row>
        </div>
      </el-col>
    </el-row >

    <el-container class="header-main">
      <el-tabs tab-position="top"  class="demo-tabs"  style="width: 100%;flex: 1"    stretch>
        <el-tab-pane style="width: 100%">
                     <template #label >
              <div style="display: flex;flex-direction: column;align-items: center">
                <svg style="width: 50px; height: 50px;">
                  <use href="#icon-xingnengjisuan-copy"></use>
                </svg>
                <span>AI创作</span>
              </div>
            </template>

            <el-main style="width: 100%">
              <el-row  :gutter="15" style=" display: flex; justify-content: center;"  >
                <el-col :span="8"  v-for="item in 12" :key="item" >
                  <el-card class="pic-card"  @click="jump">
                    <img
                        src="/src/assets/img/AICard.jpg"
                        style="width: 100%;height: 100%"
                    />
                    <template #footer>
                      <div style="display: flex;align-items: center;justify-content: space-between">
                      <span>喜鼎-奇妙虾球</span>
                      <div style="display: flex;align-items: center">
                        <el-avatar :size="26" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <span style="margin-left: 5px">牛老师</span>
                      </div>
                      </div>
                    </template>
                  </el-card>
                </el-col>
              </el-row>
            </el-main>
        </el-tab-pane>


        <el-tab-pane style="margin-bottom: 50px">
          <template #label>
            <div style="display: flex;flex-direction: column;align-items: center">
              <svg style="width: 50px; height: 50px;">
                <use href="#icon-quanlingyuguimo-copy"></use>
              </svg>
              <span>手绘创作</span>
            </div>
          </template>

          <el-main style="width: 100%">
            <el-row  :gutter="15" style=" display: flex; justify-content: center;"  >
              <el-col :span="8"  v-for="item in 12" :key="item" >
                <el-card class="pic-card" @click="jump">
                  <img
                      src="/src/assets/img/AICard.jpg"
                      style="width: 100%;height: 100%"
                  />
                  <template #footer>
                    <div style="display: flex;align-items: center;justify-content: space-between">
                      <span>喜鼎-奇妙虾球</span>
                      <div style="display: flex;align-items: center">
                        <el-avatar :size="26" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <span style="margin-left: 5px">牛老师</span>
                      </div>
                    </div>
                  </template>
                </el-card>
              </el-col>
            </el-row>

          </el-main>
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <div style="display: flex;flex-direction: column;align-items: center">
              <svg style="width: 50px; height: 50px;">
                <use href="#icon-shangyehuaquanqiu-copy"></use>
              </svg>
              <span>大赛精选</span>
            </div>
          </template>

          <el-main style="width: 100%">
            <el-row  :gutter="15" style=" display: flex; justify-content: center;"  >
              <el-col :span="8"  v-for="item in 12" :key="item" >
                <el-card class="pic-card" @click="jump">
                  <img
                      src="/src/assets/img/AICard.jpg"
                      style="width: 100%;height: 100%"
                  />
                  <template #footer>
                    <div style="display: flex;align-items: center;justify-content: space-between">
                      <span>喜鼎-奇妙虾球</span>
                      <div style="display: flex;align-items: center">
                        <el-avatar :size="26" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <span style="margin-left: 5px">牛老师111</span>
                      </div>
                    </div>
                  </template>
                </el-card>
              </el-col>
            </el-row>

          </el-main>
        </el-tab-pane>


      </el-tabs>
    </el-container>
  </div>
</template>


<script lang="ts"  setup>
import { reactive, toRefs } from 'vue'
import {useRouter} from 'vue-router'
const state = reactive({
  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

const img_url = ref([
  {id:1,src: '/src/assets/img/swiper_1.jpg'},
  {id:2,src: '/src/assets/img/swiper_2.jpg'},
  {id:3,src: '/src/assets/img/swiper_3.jpg'}
])

const { circleUrl, squareUrl, sizeList } = toRefs(state)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
import { ref } from 'vue'
import * as https from "https";

const tabPosition = ref('left')
const router = useRouter()
const jump = () => {
  router.push('/CreativeTwo')
}

</script>


<style scoped>
@import "Creative.css";
</style>