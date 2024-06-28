<template>
<!--  非tailwind写法，参考css文件（屎山，懒的改）-->
  <div class="picture-view">

    <div class="main-cont__list" v-for="image in images" :key="image.id">
      <div class="w-80 p-3 picture-item ">
        <div class="relative block overflow-hidden rounded group transition-all duration-500">
          <img :src="image.src" alt="Image" class="w-full rounded transition-all duration-500 group-hover:scale-105">
          <a href="javascript:void(0)"
            class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
            <div>
              <p class="text-sm text-gray-400">牛老师</p>
              <h6 class="text-base text-black font-medium">东方之美</h6>
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";


//https://picsum.photos是一个免费图床

//是否加载
//如果所有图片加载完成，那么将loading置为false
//将从页面挂载完成开始计算

const images = ref([
  { id: 1, src: '/src/assets/img/img1.jpg' },
  { id: 2, src: '/src/assets/img/img2.jpg' },
  { id: 3, src: '/src/assets/img/img3.jpg' },
  { id: 4, src: '/src/assets/img/img4.jpg' },
  { id: 5, src: '/src/assets/img/img5.jpg' },
  { id: 6, src: '/src/assets/img/img6.jpg' },
  { id: 7, src: '/src/assets/img/img7.jpg' },
  { id: 8, src: '/src/assets/img/img8.jpg', },
  { id: 9, src: '/src/assets/img/img9.jpg', },
  { id: 10, src: '/src/assets/img/img10.jpg', },
  { id: 11, src: '/src/assets/img/img11.jpg', },
  { id: 12, src: '/src/assets/img/img12.jpg', },
  // 更多图片对象...
]);

</script>

<style scoped>
@import "Drawing.css";
</style>