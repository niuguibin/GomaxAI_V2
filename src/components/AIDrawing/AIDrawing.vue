<script setup>
import { ref } from "vue";
//https://picsum.photos是一个免费图床
const waterFall = ref([
  {
    id: '1',
    title: '静谧',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?1'
  },
  {
    id: '2',
    title: '雨夜校园',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?2'
  },
  {
    id: '3',
    title: '静静的夜',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?3'
  },
  {
    id: '4',
    title: '黄灯',
    description: 'poweredBy: midJourney 2.0',
    src: 'https://picsum.photos/200/300?4'
  },
  {
    id: '5',
    title: '梦幻',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?5'
  },
  {
    id: '6',
    title: '静悄悄',
    description: 'poweredBy: stable diffusion 3.5',
    src: 'https://picsum.photos/200/300?6'
  },
  {
    id: '7',
    title: '秋雨',
    description: 'poweredBy: midJourney 2.0',
    src: 'https://picsum.photos/200/300?7'
  },
  {
    id: '8',
    title: '大雨将至',
    description: 'poweredBy: midJourney 2.0',
    src: 'https://picsum.photos/200/300?8'
  },
  {
    id: '9',
    title: '昨天',
    description: 'poweredBy: midJourney 2.0',
    src: 'https://picsum.photos/200/300?9'
  },
  {
    id: '10',
    title: '亦真亦幻',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?10'
  },
  {
    id: '11',
    title: '一场大雨',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?11'
  },
  {
    id: '12',
    title: '冷冽',
    description: 'poweredBy: stable diffusion 4.0',
    src: 'https://picsum.photos/200/300?12'
  },
])
</script>

<template>
  <div class="background">
    <div class="painting" v-for="item in waterFall" :key="item">
      <div class="picture">
        <img :src="item.src" alt="" loading="lazy">
      </div>
      <el-divider style="margin-bottom: 5px;margin-top: 10px" />
      <div class="title" style="color: #000;font-size: 15px;font-weight: bold">
        {{item.title}}
      </div>
      <div class="title" style="font-size: 10px;color: #2c2c31">
        {{item.description}}
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Drawing.css";
</style>