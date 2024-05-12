<template>
  <div style="margin-top: 60px;padding: 0px 150px 0 150px" class="body-box">
        <el-row :gutter="50" justify="space-between" style="margin-bottom: 20px">
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
          <el-col :span="9">
            <div>
              <el-row v-for="item in 3" :key="item" class="info-text">
                <span>GoMax第二届AI创作大赛时间确认</span>
              </el-row>
            </div>
          </el-col>
        </el-row >

    <section class="section">
      <div class="container">
        <div class="flex justify-center">
          <div class="w-full filters-group-wrap mb-3">
            <div class="flex justify-center mb-5">
              <ul class="filter-options flex flex-wrap gap-4 justify-center">
                <li class="active" data-group="all"><a href="javascript:void(0)">All</a></li>
                <li data-group="android"><a href="javascript:void(0)">Android</a></li>
                <li data-group="mockup"><a href="javascript:void(0)">Mockup</a></li>
                <li data-group="personal"><a href="javascript:void(0)">Web</a></li>
                <li data-group="design"><a href="javascript:void(0)">Design</a></li>
              </ul>
            </div>
          </div>
          <!--end /div-->
        </div>
        <!--end /div-->
        <div  class="md:grid justify-center" id="grid">

          <div class="md:w-1/3 p-3 picture-item " data-groups='["mockup"]' @click="jump">
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img1.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Media, Icons</p>

                  <h6 class="text-base text-black font-medium">Open Imagination</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item " data-groups='["android"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img2.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Illustrations</p>
                  <h6 class="text-base text-black font-medium">Locked Steel Gate</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item " data-groups='["mockup"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img3.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Graphics, UI Elements</p>
                  <h6 class="text-base text-black font-medium">Mac Sunglasses</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img4.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Icons, Illustrations</p>
                  <h6 class="text-base text-black font-medium">Morning Dew</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img5.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">UI Elements, Media</p>
                  <h6 class="text-base text-black font-medium">Console Activity</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["personal"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img6.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Graphics</p>
                  <h6 class="text-base text-black font-medium">Sunset Bulb Glow</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["design"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img7.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">UI Elements, Media</p>
                  <h6 class="text-base text-black font-medium">Console Activity</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img8.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Illustrations, Graphics</p>
                  <h6 class="text-base text-black font-medium">Shake It!</h6>
                </div>
              </a>
            </div>
          </div>


          <div class="md:w-1/3 p-3 picture-item" data-groups='["personal"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img9.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Graphics</p>
                  <h6 class="text-base text-black font-medium">Sunset Bulb Glow</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["personal"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img10.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Graphics</p>
                  <h6 class="text-base text-black font-medium">Sunset Bulb Glow</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img11.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">UI Elements, Media</p>
                  <h6 class="text-base text-black font-medium">Console Activity</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img12.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Illustrations, Graphics</p>
                  <h6 class="text-base text-black font-medium">Shake It!</h6>
                </div>
              </a>
            </div>
          </div>

          <div class="md:w-1/3 p-3 picture-item" data-groups='["design"]'>
            <div class="relative block overflow-hidden rounded group transition-all duration-500">
              <img src="@/assets/img/img13.jpg" class="rounded transition-all duration-500 group-hover:scale-105"
                   alt="work-image">
              <a href="javascript:void(0)"
                 class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p class="text-sm text-gray-400">Illustrations, Graphics</p>
                  <h6 class="text-base text-black font-medium">Shake It!</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
        <!--end /div-->
      </div>
    </section>
  </div>


</template>


<script lang="ts" setup>
import {useRouter} from "vue-router";

const img_url = ref([
  {id:1,src: '/src/assets/img/swiper_1.jpg'},
  {id:2,src: '/src/assets/img/swiper_2.jpg'},
  {id:3,src: '/src/assets/img/swiper_3.jpg'}
])
const router = useRouter()
const jump = () => {
  router.push('/CreativeTwo')
}

import { ref } from 'vue'


/**
 * Theme: Zova - Portfolio Template
 * Author: MyraStudio
 * Gallery Js
 */


// var Shuffle = window.Shuffle;
//
// class Demo {
//   constructor(element) {
//     this.element = element;
//     this.shuffle = new Shuffle(element, {
//       itemSelector: '.picture-item'
//     });
//
//     // Log events.
//
//     this.addFilterButtons();
//   }
//
//   /**
//    * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
//    * for them like you normally would (with jQuery for example).
//    */
//
//
//   addFilterButtons() {
//     const options = document.querySelector('.filter-options');
//     if (!options) {
//       return;
//     }
//
//     const filterButtons = Array.from(options.children);
//     const onClick = this._handleFilterClick.bind(this);
//     filterButtons.forEach((button) => {
//       button.addEventListener('click', onClick, false);
//     });
//   }
//
//   _handleFilterClick(evt) {
//     const btn = evt.currentTarget;
//     const isActive = btn.classList.contains('active');
//     const btnGroup = btn.getAttribute('data-group');
//
//     this._removeActiveClassFromChildren(btn.parentNode);
//
//     let filterGroup;
//     if (isActive) {
//       btn.classList.remove('active');
//       filterGroup = Shuffle.ALL_ITEMS;
//     } else {
//       btn.classList.add('active');
//       filterGroup = btnGroup;
//     }
//
//     this.shuffle.filter(filterGroup);
//   }
//
//   _removeActiveClassFromChildren(parent) {
//     const { children } = parent;
//     for (let i = children.length - 1; i >= 0; i--) {
//       children[i].classList.remove('active');
//     }
//   }
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   window.demo = new Demo(document.getElementById('grid'));
// });




</script>


<style scoped>
@import "Creative.css";
</style>