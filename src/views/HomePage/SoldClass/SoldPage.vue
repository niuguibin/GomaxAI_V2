<script setup>
import { ref } from "vue";
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)
</script>

<template>
  <div class="background">
    <div class="SoldClass">
      <h1 class="enlightenment_top">
        <span class="enlightenment_span">启蒙院</span>
      </h1>
      <div class="enlightenment_left">
        <p class="enlightenment_p">
          <span>90%</span>
          就业率
        </p>
        <p class="enlightenment_p">
          <span>11000+</span>
          平均工资
        </p>
        <p class="enlightenment_p">
          <span>100000+</span>
          精品课程
        </p>
        <p class="enlightenment_p">
          <span>100+</span>
          优秀名师
        </p>
      </div>
      <div class="enlightenment_right">
        <div class="left-AD">
          <div class="ClassAD" @click="show2 = !show2">
            <div class="inner">
              <img src="https://www.itheima.com/2020gw/images/indeximg/mapjavaee4.png" alt="" loading="lazy">
            </div>
            <transition name="el-zoom-in-center">
              <div class="title" v-show="show2">
                <p>JAVA培训班 2023-07-10</p>
                <p style="color: red">已开班</p>
              </div>
            </transition>
          </div>
          <div class="ClassAD" @click="show3 = !show3">
            <div class="inner">
              <img src="https://www.itheima.com/2020gw/images/indeximg/mapai4.png" alt="" loading="lazy">
            </div>
            <transition name="el-zoom-in-center">
              <div class="title" v-show="show3">
                <p>人工智能培训班 2023-08-10</p>
                <p style="color: red">已开班</p>
              </div>
            </transition>
          </div>
          <div class="ClassAD" @click="show4 = !show4">
            <div class="inner">
              <img src="https://www.itheima.com/2020gw/images/indeximg/mapai4.png" alt="" loading="lazy">
            </div>
            <transition name="el-zoom-in-center">
              <div class="title" v-show="show4">
                <p>人工智能培训班 2023-08-10</p>
                <p style="color: red">已开班</p>
              </div>
            </transition>
          </div>
          <div class="ClassAD" @click="show1 = !show1">
            <div class="inner">
              <img src="https://www.itheima.com/2020gw/images/indeximg/mapai4.png" alt="" loading="lazy">
            </div>
            <transition name="el-zoom-in-center">
              <div class="title" v-show="show1">
                <p>人工智能培训班 2023-08-10</p>
                <p style="color: red">已开班</p>
              </div>
            </transition>
          </div>
          <div class="ClassAD" @click="show5 = !show5">
            <div class="inner">
              <img src="https://www.itheima.com/2020gw/images/indeximg/mapai4.png" alt="" loading="lazy">
            </div>
            <transition name="el-zoom-in-center">
              <div class="title" v-show="show5">
                <p>人工智能培训班 2023-08-10</p>
                <p style="color: red">已开班</p>
              </div>
            </transition>
          </div>
          <div class="ClassAD" @click="show6 = !show6">
            <div class="inner">
              <img src="https://www.itheima.com/2020gw/images/indeximg/mapai4.png" alt="" loading="lazy">
            </div>
            <transition name="el-zoom-in-center">
              <div class="title" v-show="show6">
                <p>人工智能培训班 2023-08-10</p>
                <p style="color: red">已开班</p>
              </div>
            </transition>
          </div>
        </div>
        <div class="right-AD">
        <span class="right-top">
          正在直播
          <div class="red-point"></div>
        </span>
          <p>课程: CHATGPT 快速入门</p>
          <button class="watch">点击观看</button>
          <p style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Sold.css";
</style>