<template>
  <!--  非tailwind写法，参考css文件（屎山，懒的改）-->
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


      <div class="container">
        <div class="flex justify-center">
          <div class="w-full filters-group-wrap mb-3">
            <div class="flex justify-center mb-5">
              <div class="filter-options flex flex-wrap gap-4 justify-center">
                <button @click="clearFilter" :class="{ active: activeFilter === null }"><a href="javascript:void(0)">ALL</a></button>
                <button v-for="group in groups" :key="group" @click="handleFilter(group)" :class="{ active: activeFilter === group }">
                  <a href="javascript:void(0)">{{ group }}</a>
                </button>
              </div>
            </div>
          </div>
          <!--end /div-->
        </div>
        <!--end /div-->
        <div  class="main-cont__list "  v-for="image in filteredImages" :key="image.id" :data-groups="image.groups">
          <div class="w-80 p-3 picture-item "  @click="jump">
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
        <!--end /div-->
      </div>

  </div>


</template>


<script lang="ts" setup>
import {useRouter} from "vue-router";
import { ref,computed } from 'vue'

const img_url = ref([
  {id:1,src: '/src/assets/img/swiper_1.jpg'},
  {id:2,src: '/src/assets/img/swiper_2.jpg'},
  {id:3,src: '/src/assets/img/swiper_3.jpg'}
])
const images = ref([
  { id: 1, src: '/src/assets/img/img1.jpg', groups: ['mockup'] },
  { id: 2, src: '/src/assets/img/img2.jpg', groups: ['prototype'] },
  { id: 3, src: '/src/assets/img/img3.jpg', groups: ['ios'] },
  { id: 4, src: '/src/assets/img/img4.jpg', groups: ['competition'] },
  { id: 5, src: '/src/assets/img/img5.jpg', groups: ['ios'] },
  { id: 6, src: '/src/assets/img/img6.jpg', groups: ['mockup'] },
  { id: 7, src: '/src/assets/img/img7.jpg', groups: ['prototype'] },
  { id: 8, src: '/src/assets/img/img8.jpg', groups: ['competition'] },
  { id: 9, src: '/src/assets/img/img9.jpg', groups: ['prototype'] },
  { id: 10, src: '/src/assets/img/img10.jpg', groups: ['mockup'] },
  { id: 11, src: '/src/assets/img/img11.jpg', groups: ['competition'] },
  { id: 12, src: '/src/assets/img/img12.jpg', groups: ['ios'] },
  // 更多图片对象...
]);

const router = useRouter()
const jump = () => {
  router.push('/CreativeTwo')
}

const groups = computed(() => {
  // 从所有图片中提取唯一的组名
  const allGroups = [].concat(...images.value.map(image => image.groups));
  return [...new Set(allGroups)];
});

const activeFilter = ref(null);

const handleFilter = (group) => {
  activeFilter.value = group;
};
const clearFilter = () => {
  activeFilter.value = null; // 将过滤器状态设置为 null，以显示所有元素
};

const filteredImages = computed(() => {
  // 如果没有选定过滤器，则显示所有图片
  if (!activeFilter.value) {
    return images.value;
  }

  // 否则，只显示与选定过滤器匹配的图片
  return images.value.filter(image => image.groups.indexOf(activeFilter.value) !== -1);

});


</script>


<style scoped>
@import "Creative.css";
</style>