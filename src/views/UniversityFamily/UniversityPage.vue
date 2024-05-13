
<template>
  <div class="body-box" style="margin-top: 60px;padding: 0 150px 0 150px">
    <div class="main">
      <div class="main-inner body-width">
        <div class="main-cont main-album">
          <div class="flex justify-center">
            <div class="w-full filters-group-wrap mb-3">
              <div class="flex justify-center mb-5">
                <div class="filter-options flex gap-4 ">
                  <button @click="clearFilter" :class="{ active: activeFilter === null }"><a href="javascript:void(0)">ALL</a></button>

                  <button v-for="group in groups" :key="group" @click="handleFilter(group)" :class="{ active: activeFilter === group }">
                    <a href="javascript:void(0)">{{ group }}</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="main-cont__list clearfix">

            <div class="item"  v-for="image in filteredImages" :key="image.id" :data-groups="image.groups">
              <a href="#" class="pic"><img :src="image.src" alt="Image"></a>
              <p class="video-data">
                <el-icon style="margin: 0 3px 0 7px"><View /></el-icon>
                68
                <el-icon style="margin: 0 3px 0 7px"><ChatLineSquare /></el-icon>
                2255
              </p>
              <div class="info">
                <a href="#" class="title">你的书写工具需要一个庇护所</a>
                <a href="#" class="author" :key="image.groups">{{ image.groups }}</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script lang="ts" setup>

//import FooterPage from "@/components/BottomFooter/FooterPage.vue";
import {computed, ref} from "vue";


const images = ref([
  { id: 1, src: '/src/assets/img/img1.jpg', groups: 'ChatGPT'},
  { id: 2, src: '/src/assets/img/img1.jpg', groups: 'Midjourney' },
  { id: 3, src: '/src/assets/img/img1.jpg', groups: 'StableDiffusion' },
  { id: 4, src: '/src/assets/img/img1.jpg', groups: 'ChatGPT' },
  { id: 5, src: '/src/assets/img/img1.jpg', groups: 'Midjourney' },
  { id: 6, src: '/src/assets/img/img1.jpg', groups: 'StableDiffusion' },
  { id: 7, src: '/src/assets/img/img1.jpg', groups: 'Midjourney' },

  // 更多图片对象...
]);


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
@import "University.css";
</style>