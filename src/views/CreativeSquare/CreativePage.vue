<template>
<!--  <div style="margin-top: 100px;padding: 0px 150px 0 150px">-->
<!--    <el-row :gutter="50" justify="space-between">-->
<!--      <el-col  :span="15" >-->
<!--        <div style="height: 300px;">-->
<!--          <el-carousel-->
<!--              class="swiper"-->
<!--              indicator-position="none"-->
<!--              autoplay-->
<!--              pause-on-hover-->
<!--              style="width: 100%;"-->
<!--          >-->
<!--            <el-carousel-item v-for="item in img_url" :key="item">-->
<!--              <img :src="item.src" alt="" loading="lazy" class="carousel-img">-->
<!--            </el-carousel-item>-->
<!--          </el-carousel>-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :span="9">-->
<!--        <div>-->
<!--          <el-row v-for="item in 3" :key="item" class="info-text">-->
<!--            <span>GoMax第二届AI创作大赛时间确认</span>-->
<!--          </el-row>-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row >-->
<!--    <el-container>-->
<!--      <el-tabs tab-position="top" style="height: 800px;width: 100%" class="demo-tabs">-->
<!--        <el-tab-pane >-->
<!--          <template #label >-->
<!--            <div style="display: flex;flex-direction: column;align-items: center">-->
<!--              <svg style="width: 50px; height: 50px;">-->
<!--                <use href="#icon-ChatGPT"></use>-->
<!--              </svg>-->
<!--              <span>ChatGPT</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          <el-main style="background-color: #2F3233;width: 100%">-->
<!--            Main-->
<!--          </el-main>-->
<!--        </el-tab-pane>-->

<!--        <el-tab-pane style="margin-bottom: 50px">-->
<!--          <template #label>-->
<!--            <div style="display: flex;flex-direction: column;align-items: center">-->
<!--              <svg style="width: 50px; height: 50px;">-->
<!--                <use href="#icon-Midjourney"></use>-->
<!--              </svg>-->
<!--              <span>MidJourney</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          Config-->
<!--        </el-tab-pane>-->

<!--        <el-tab-pane>-->
<!--          <template #label>-->
<!--            <div style="display: flex;flex-direction: column;align-items: center">-->
<!--              <svg style="width: 70px; height: 70px;">-->
<!--                <use href="#icon-a-stablediffusion4848"></use>-->
<!--              </svg>-->
<!--              <span>StableDiffusion</span>-->
<!--            </div>-->
<!--          </template>-->
<!--          Role-->
<!--        </el-tab-pane>-->


<!--      </el-tabs>-->
<!--    </el-container>-->
<!--  </div>-->
  <div id="grid" class="md:flex justify-center">
    <div class="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img1.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Media, Icons</p>

            <h6 class="text-base text-black font-medium">Open Imagination</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img2.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Illustrations</p>
            <h6 class="text-base text-black font-medium">Locked Steel Gate</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img3.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Graphics, UI Elements</p>
            <h6 class="text-base text-black font-medium">Mac Sunglasses</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img4.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Icons, Illustrations</p>
            <h6 class="text-base text-black font-medium">Morning Dew</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img5.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">UI Elements, Media</p>
            <h6 class="text-base text-black font-medium">Console Activity</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["personal"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img6.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Graphics</p>
            <h6 class="text-base text-black font-medium">Sunset Bulb Glow</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["design"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img7.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">UI Elements, Media</p>
            <h6 class="text-base text-black font-medium">Console Activity</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img8.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Illustrations, Graphics</p>
            <h6 class="text-base text-black font-medium">Shake It!</h6>
          </div>
        </a>
      </div>
    </div>


    <div class="md:w-1/3 p-3 picture-item" data-groups='["personal"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img9.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Graphics</p>
            <h6 class="text-base text-black font-medium">Sunset Bulb Glow</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["personal"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img10.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Graphics</p>
            <h6 class="text-base text-black font-medium">Sunset Bulb Glow</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["android"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img11.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">UI Elements, Media</p>
            <h6 class="text-base text-black font-medium">Console Activity</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["mockup"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img12.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Illustrations, Graphics</p>
            <h6 class="text-base text-black font-medium">Shake It!</h6>
          </div>
        </a>
      </div>
    </div>

    <div class="md:w-1/3 p-3 picture-item" data-groups='["design"]'>
      <div class="relative block overflow-hidden rounded group transition-all duration-500">
        <img src="@/assets/img/img13.jpg" class="rounded transition-all duration-500 group-hover:scale-105" alt="work-image">
        <a href="javascript:void(0)" class="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
          <div>
            <p class="text-sm text-gray-400">Illustrations, Graphics</p>
            <h6 class="text-base text-black font-medium">Shake It!</h6>
          </div>
        </a>
      </div>
    </div>
  </div>
  <!--end /div-->
  <div class="flex justify-center mt-8">
    <a class='py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white' href='work.html'>More Works <i class="mdi mdi-arrow-right ms-1"></i></a>
  </div>
</template>


<script lang="ts"  setup>
// import { reactive, toRefs } from 'vue'
//
// const state = reactive({
//   circleUrl:
//       'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
//   squareUrl:
//       'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
//   sizeList: ['small', '', 'large'] as const,
// })
//
// const img_url = ref([
//   {id:1,src: '/src/assets/img/swiper_1.jpg'},
//   {id:2,src: '/src/assets/img/swiper_2.jpg'},
//   {id:3,src: '/src/assets/img/swiper_3.jpg'}
// ])
//
// const { circleUrl, squareUrl, sizeList } = toRefs(state)
//
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// import { ref } from 'vue'
//
// const tabPosition = ref('left')

</script>


<style scoped>
@import "Creative.css";
</style>