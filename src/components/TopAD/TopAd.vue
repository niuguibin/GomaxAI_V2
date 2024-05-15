<template>
  <div class="background">
    <div class="ad-item">
      <el-carousel
          class="swiper"
          width="100%"
          autoplay
          arrow="always"
      >
        <el-carousel-item v-for="item in img_url" :key="item" style="height: 550px">
          <img :src="item.src" alt="" loading="lazy" class="carousel-img">
        </el-carousel-item>
      </el-carousel>
    </div>
<!--    <div class="ad-item_2">-->
<!--      <div class="advertise">-->
<!--        <div class="item_1" style="margin-bottom: 20px">-->
<!--          <img src="@/assets/img/schooltest.jpg" alt="" loading="lazy">-->
<!--        </div>-->
<!--        <div class="item_1">-->
<!--          <img src="@/assets/img/schooltest.jpg" alt="" loading="lazy">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="advertise">-->
<!--        <div class="login-entry">-->
<!--          <div class="user_top">-->
<!--            <div class="user_avater" @click="user">-->
<!--              <img :src="userImg" alt="" loading="lazy">-->
<!--              <span>{{userName}}</span>-->
<!--            </div>-->
<!--            <div class="user_logo"></div>-->
<!--          </div>-->
<!--          <div class="user_center">-->
<!--            <div class="user_info">-->
<!--              <div class="user_info_top">{{store.coin}}</div>-->
<!--              <div class="user_info_bot">我的鸮币</div>-->
<!--            </div>-->
<!--            <div class="user_info">-->
<!--              <div class="user_info_top">{{store.follows}}</div>-->
<!--              <div class="user_info_bot">我的关注</div>-->
<!--            </div>-->
<!--            <div class="user_info">-->
<!--              <div class="user_info_top">{{store.collection}}</div>-->
<!--              <div class="user_info_bot">我的收藏</div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="user_btns">-->
<!--            <el-button class="btn user_btn_1" @click="today_coin">鸮币签到</el-button>-->
<!--            <el-button class="btn user_btn_2" @click="pay">立即充值</el-button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <!-- 充值入口弹窗 -->
<!--    <el-dialog-->
<!--        v-model="dialogVisible"-->
<!--        title="快充值中心"-->
<!--        width="30%"-->
<!--        class="dialog"-->
<!--    >-->
<!--      <span>扫描二维码</span>-->
<!--      <div class="QR-code">-->
<!--        <qrcode-vue :value="value" :size="size"></qrcode-vue>-->
<!--      </div>-->
<!--      <template #footer>-->
<!--      <span class="dialog-footer">-->
<!--        <el-button @click="dialogVisible = false">取消</el-button>-->
<!--        <el-button type="primary" @click="dialogVisible = false">-->
<!--          确定-->
<!--        </el-button>-->
<!--      </span>-->
<!--      </template>-->
<!--    </el-dialog>-->
  </div>
</template>

<script setup>
import { ref,h } from "vue";
// import {useCounterStore} from "@/stores/counter.js";
// import {ElNotification} from "element-plus";
// import {useRouter} from "vue-router";
// import QrcodeVue from "qrcode.vue";
// import { onMounted } from "vue";
// import { watchEffect } from "vue";
// import axios from "axios";
// const router = useRouter()
// const store = useCounterStore()
// //先校验是否登录，如归登录则跳转个人页，否则跳转登录页
// const user = () => {
//   if (ifIsLogin()){
//     router.push('/user')
//   }else {
//     router.push('/login')
//   }
// }
// //校验token
//
// const dialogVisible = ref(false)
const img_url = ref([
  {id:1,src: '/src/assets/img/swiper_1.jpg'},
  {id:2,src: '/src/assets/img/swiper_2.jpg'},
  {id:3,src: '/src/assets/img/swiper_3.jpg'}
])
// //签到判断
// //该方法用于实现在没有对接接口的情况下，模拟实现签到行为，
// //当首次签到后，在本地存储一个签到的日期文件，下次调用时先 提取文件判断是否为同一天
// //如果是则弹出已经签过的提示，如果否则反之
// const today_coin = () => {
//   const aDate = new Date().toLocaleDateString();
//   const todayDate = new Date().toLocaleDateString();
//   if (!localStorage.getItem('mark') || localStorage.getItem('mark') !== todayDate) {
//     localStorage.setItem('mark',aDate)
//     ElNotification({
//       title: '签到提醒',
//       message: h('i', { style: 'color: teal' }, '你已完成今日签到，鸮币 +1!'),
//     })
//     store.coin += 1
//   }else{
//     ElNotification({
//       title: '签到提醒',
//       message: h('i', { style: 'color: teal' }, '你今天已经签过了!'),
//     })
//   }
// }
// //使用Qrcode-vue实现充值二维码弹出
// const Key = ref('')
// const qrUrl = ref('')
// const value = ref()
// const size = 200
// const getQR = () => {
//   axios.get('http://8.130.35.251:3000/login/qr/key').then((res) => {
//     Key.value = res.data.data.unikey
//     axios.get(`http://8.130.35.251:3000/login/qr/create?key=${Key.value}`).then((res) => {
//       qrUrl.value = res.data.data.qrurl
//     })
//   })
// }
// watchEffect(() => {
//   value.value = qrUrl.value
// })
// const pay = () => {
//   dialogVisible.value = !dialogVisible.value
//   getQR()
// }
// //这个函数用于改变登陆后的头像和用户名
// //这个函数用于校验是否取得token
// const getToken = () => {
//   if (store.token !== 'empty'){
//     return true
//   }else {
//     return  false
//   }
// }
// let userName = ref('')
// let userImg = ref('')
// const ifIsLogin = () => {
//   if (getToken()){
//     userName.value = store.username
//     userImg.value = 'src/assets/user.png'
//
//   }else {
//     userName.value = '登录/注册'
//     userImg.value = 'src/assets/img/placeholder.png'
//   }
// }
// onMounted(() => {
//   ifIsLogin()
// })
</script>

<style scoped>
@import "Top.css";
</style>