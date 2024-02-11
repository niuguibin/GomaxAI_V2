<template>
  <div style="margin-top: 50px;padding: 0px 150px 0 150px">
    <el-container>

      <el-tabs tab-position="left" style="height: 800px;width: 100%" class="demo-tabs">


        <el-tab-pane >
          <template #label >
            <div style="display: flex;flex-direction: column;align-items: center">
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

        <el-tab-pane style="margin-bottom: 50px">
          <template #label>
            <div style="display: flex;flex-direction: column;align-items: center">
            <svg style="width: 50px; height: 50px;">
              <use href="#icon-Midjourney"></use>
            </svg>
              <span>MidJourney</span>
            </div>
          </template>
          Config
        </el-tab-pane>

        <el-tab-pane>
          <template #label>
            <div style="display: flex;flex-direction: column;align-items: center">
            <svg style="width: 70px; height: 70px;">
              <use href="#icon-a-stablediffusion4848"></use>
            </svg>
              <span>StableDiffusion</span>
            </div>
          </template>
          Role
        </el-tab-pane>


      </el-tabs>



    </el-container>
  </div>
</template>


<script lang="ts"  setup>
import { reactive, toRefs } from 'vue'

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
import { ref } from 'vue'

const tabPosition = ref('left')

</script>


<style scoped>
@import "Office.css";
</style>