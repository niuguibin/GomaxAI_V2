<script setup>
import { ref,h } from "vue";
import {useCounterStore} from "@/stores/counter.js";
import {ElNotification} from "element-plus";
import {useRouter} from "vue-router";
const router = useRouter()
const login = () => {
  router.push('/login')
}
const store = useCounterStore()
const dialogVisible = ref(false)
const img_url = ref([
  {id:1,src: 'https://static.runoob.com/images/mix/img_fjords_wide.jpg'},
  {id:2,src: 'https://static.runoob.com/images/mix/img_nature_wide.jpg'},
  {id:3,src: 'https://static.runoob.com/images/mix/img_mountains_wide.jpg'}
])
//签到判断
//该方法用于实现在没有对接接口的情况下，模拟实现签到行为，
//当首次签到后，在本地存储一个签到的日期文件，下次调用时先 提取文件判断是否为同一天
//如果是则弹出已经签过的提示，如果否则反之
const today_coin = () => {
  const aDate = new Date().toLocaleDateString();
  const todayDate = new Date().toLocaleDateString();
  if (!localStorage.getItem('mark') || localStorage.getItem('mark') !== todayDate) {
    localStorage.setItem('mark',aDate)
    ElNotification({
      title: '签到提醒',
      message: h('i', { style: 'color: teal' }, '你已完成今日签到，鸮币 +1!'),
    })
    store.coin += 1
  }else{
    ElNotification({
      title: '签到提醒',
      message: h('i', { style: 'color: teal' }, '你今天已经签过了!'),
    })
  }
}
</script>

<template>
  <div class="background">
    <div class="ad-item">
      <el-carousel
          height="240px"
          autoplay
      >
        <el-carousel-item v-for="item in img_url" :key="item">
          <img :src="item.src" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="ad-item_2">
      <div class="advertise">
        <div class="item_1" style="margin-bottom: 20px">
          <img src="https://jchd-chat.oss-cn-hangzhou.aliyuncs.com/png/banner1-ad79d35a.png" alt="">
        </div>
        <div class="item_1">
          <img src="https://jchd-chat.oss-cn-hangzhou.aliyuncs.com/png/banner2-bbac4bf9.png" alt="">
        </div>
      </div>
      <div class="advertise">
        <div class="login-entry">
          <div class="user_top">
            <div class="user_avater" @click="login">
              <img src="../../assets/user.png" alt="">
              <span>登录/注册</span>
            </div>
            <div class="user_logo"></div>
          </div>
          <div class="user_center">
            <div class="user_info">
              <div class="user_info_top">{{store.coin}}</div>
              <div class="user_info_bot">我的鸮币</div>
            </div>
            <div class="user_info">
              <div class="user_info_top">{{store.follows}}</div>
              <div class="user_info_bot">我的关注</div>
            </div>
            <div class="user_info">
              <div class="user_info_top">{{store.collection}}</div>
              <div class="user_info_bot">我的收藏</div>
            </div>
          </div>
          <div class="user_btns">
            <el-button class="btn user_btn_1" @click="today_coin">鸮币签到</el-button>
            <el-button class="btn user_btn_2" @click="dialogVisible = true">立即充值</el-button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
        v-model="dialogVisible"
        title="快充值中心"
        width="30%"
        style="height: 385px"
    >
      <span>扫描二维码</span>
      <img src="@/assets/logo.svg" alt="" class="QR-code">
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
@import "Top.css";
</style>