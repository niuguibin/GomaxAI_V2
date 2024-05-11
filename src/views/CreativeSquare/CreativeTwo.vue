<template>
  <div class="common-layout"      style="margin-top: 100px;padding: 0px 150px 0 150px">
    <el-container>
      <el-container>
        <el-header style="background-color: #1e2021;height: 340px;width:100%;">
          <img
              src="/src/assets/img/Userbg.jpg"
              style="width: 100%;height: 280px;flex: 1"
          />
          <el-row style="display: flex;align-items: center">
            <el-col :span="12" style="display: flex">
              <span style="margin-top: -40px;margin-left: 40px;display: inline-block;     ">
                <el-avatar   style=" border: 2px solid black; border-radius:50%; "  :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
              </span>
              <div>
                <div class="user-name">牛老师</div>
                <div class="user-name-two">
                  <span style="color: #bec0c5"> 粉丝：  </span>
                  <span> 1000万 </span>
                  <span style="margin-left: 8px;color: #bec0c5"> 关注：</span>
                  <span>10000</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="float: right;margin-right: 50px">
                <el-button class="button" round>关注</el-button>
                <el-button class="button" round>私信</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main style="background-color: #1e2021;height: 800px;margin-top: 20px">
          <div class="block text-center">
<!--            <el-carousel >-->
<!--              <el-carousel-item v-for="item in img_url" :key="item">-->
<!--                <img :src="item.src" :fit="fit" loading="lazy">-->
<!--              </el-carousel-item>-->
<!--            </el-carousel>-->

          </div>
        </el-main>
      </el-container>

      <el-aside style="width: 25%;background-color: #1e2021;height: 800px;margin-left: 20px">

      </el-aside>

    </el-container>
  </div>
</template>


<script lang="ts" setup>
import {ref} from "vue";
const fit = [ 'contain']
const img_url = ref([
  {id:1,src: '/src/assets/img/AICard.jpg'},
  {id:2,src: '/src/assets/img/AICard.jpg'},
  {id:3,src: '/src/assets/img/AICard.jpg'}
])


</script>


<style scoped>
@import "CreateTwo.css";
</style>