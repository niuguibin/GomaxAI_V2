<template>
  <div class="body-box" style="margin-top: 60px;padding: 0 150px 0 150px">
    <div class="main">
      <div class="main-inner body-width">
        <div class="head-title">
          <span class="head-text">东方之美</span>
          <span class="head-page">共 5 页</span>
        </div>
        <div class="banner">

            <div class="slider-wrapper" id="car">
              <el-carousel arrow="always" :autoplay="false" class="carousel">
                <el-carousel-item v-for="item in img_url" :key="item" class="carousel-item">
                  <img :src="item.src"  alt="" class="carousel-img ">
                </el-carousel-item>
              </el-carousel>
            </div>

          <div class="banner-info">
            <div class="news">
              <el-row style="display: flex;align-items: center">
                <el-col style="display: flex;align-items: center;margin-top: 20px">
                  <div>
                    <span style="margin: 5px 30px">
                      <el-avatar style=" border: 2px solid black; border-radius:50%; " :size="80"
                                 src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    </span>
                  </div>
                  <div>
                    <div class="user-name">牛老师</div>
                    <div class="user-name-two">
                      <span style="color: #bec0c5"> 粉丝：</span>
                      <span> 1000万 </span>
                      <span style="margin-left: 8px;color: #bec0c5"> 关注：</span>
                      <span>10000</span>
                    </div>
                  </div>
                </el-col>
                <el-col style="margin: 10px 30px">
                  <div class="user-name-two">
                    <span style="color: #bec0c5">简介：</span>
                    <span>一个爱摄影爱编程的男大学生</span>
                  </div>
                </el-col>
                <el-col style="position: absolute;right:30px; top:250px">
                  <div>
                    <el-button class="button" round>关注</el-button>
                    <el-button class="button" round>私信</el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>

        <div class="main-cont main-album">
          <div class="main-cont__title">
            <h3>更多</h3>
          </div>

          <div class="main-cont__list clearfix">

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img6.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img7.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img8.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img9.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img10.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img11.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>

            <div class="item">
              <a href="#" class="pic"><img src="@/assets/img/img12.jpg" alt="#"></a>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <p>68张图片 · 2255人收藏</p>
                <p>by <a href="#" class="author">Moollly</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import {ref} from "vue";

const img_url = ref([
  {id: 1, src: '/src/assets/img/img1.jpg'},
  {id: 2, src: '/src/assets/img/img2.jpg'},
  {id: 3, src: '/src/assets/img/img3.jpg'},
  {id: 4, src: '/src/assets/img/img4.jpg'},
  {id: 5, src: '/src/assets/img/img5.jpg'},
])





</script>


<style scoped>
@import "CreateTwo.css";
</style>