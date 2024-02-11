<template>
  <div style="margin-top: 47px;padding: 15px 150px 0 150px">
    <el-container>
    <el-aside style="width: 800px">
    <el-row style="height: 50px;display: flex;align-items: center">
      <span style="color: #e1e5ec;font-size: 20px;font-weight: bold">
        精选文学作品赏析
      </span>
    </el-row>
      <div class="mask">

       <vue3VideoPlay
        class="demo"
        width="800px"
        height="450px"
        title="钢铁侠"
        :src="options.src"
        :poster="options.poster"
        @play="onPlay"
        @pause="onPause"
        @timeupdate="onTimeupdate"
        @canplay="onCanplay" >

       </vue3VideoPlay>
        </div>


        <!--底部发言框-->
        <div class="bottom">
          <input class="content" placeholder="发个弹幕吧">
          <a href="#" rel="external nofollow" @click="sent" class="send">发 送</a>
        </div>


    </el-aside>

    <el-main style="background-color: #3e2fa7;width: auto">

    </el-main>
    </el-container>

     </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const options = reactive({
  src: "../../assets/img/qq.img", //视频源
  poster: '', //封面
})
const onPlay = (ev) => {
  console.log('播放')
}
const onPause = (ev) => {
  console.log(ev, '暂停')
}

const onTimeupdate = (ev) => {
  console.log(ev, '时间更新')
}
const onCanplay = (ev) => {
  console.log(ev, '可以播放')
}

// 弹幕相关
// const mask = ref(null);
// onMounted(() => {
//   mask.value = document.querySelector('.mask');
// });
//
// const sent = ()=>{
//   //创建一个div
//   const div - document.createElement('div')
//   //将div加入到mask中
//   mask.value.append(div)
// }


</script>



<style scoped>
@import "Academyvideo.css";
</style>