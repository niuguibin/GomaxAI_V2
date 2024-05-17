<template>
  <div @click="qqq">测试数据-text</div>
  <div class="background_2">
    <div class="background-item">
      <div class="item1">
        <el-tooltip
            class="box-item"
            effect="dark"
            content="返回首页"
            placement="bottom"
        >
          <div class="left-logo" @click="goHome"></div>
        </el-tooltip>
        <div class="menu-part">
          <el-menu
              class="el-menu-demo"
              mode="horizontal"
              text-color="#E3E3E3"
              active-text-color="#F5DB9D"
              background-color="transparent"
              style="border-bottom: none"
              router
          >
            <el-menu-item index="/university">启蒙学院</el-menu-item>
            <el-menu-item index="/family">家族人生</el-menu-item>
            <el-menu-item index="/office">AI办公</el-menu-item>
            <el-menu-item index="/academy">宇宙家庭</el-menu-item>
            <el-menu-item index="/creative">创作广场</el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="item2">
        <!--        我的鸮币-->
        <el-tooltip
            class="box-item"
            effect="dark"
            content="我的鸮币"
            placement="bottom"
        >
          <div class="money">
            <div class="money_img"></div>
            <span>{{ store.coin }}</span>
          </div>
        </el-tooltip>

        <!--        创作管理-->
        <div class="document_manage" @click="workManage">
          <img src="../../assets/doc.png" alt="">
          <span>一键投稿</span>
        </div>

        <!--        消息通知-->
        <div class="note" @click="openDrawer">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="消息通知"
              placement="bottom"
          >
            <img src="../../assets/lin.png" alt="">
          </el-tooltip>
        </div>

        <!--        用户登录-->
        <el-popover
            popper-style=" padding: 30px;min-width:330px;z-index:0"
        >
          <template #reference>
            <div class="user_top">
              <div class="user_avater" @click="user">
                <img :src="data.user.avatar || 'http://localhost:9090/files/1715950224507-user.jpg'" >
              </div>
            </div>
          </template>
          <template #default>
            <el-row style="display: flex;justify-content:center;margin: 22px 0 20px 0">
              <span class="name">{{ data.user.name || '请登录'  }}</span>
            </el-row>
            <el-row style="display: flex;justify-content:space-between">
              <div class="user_info">
                <div class="user_info_bot">我的鸮币</div>
                <div class="user_info_top">{{  data.user.coin || '无'    }}</div>
              </div>
              <div class="user_info">
                <div class="user_info_bot">我的关注</div>
                <div class="user_info_top">{{ data.user.attention  || '无'  }}</div>
              </div>
              <div class="user_info">
                <div class="user_info_bot">我的收藏</div>
                <div class="user_info_top">{{ data.user.collect || '无' }}</div>
              </div>
            </el-row>

            <el-row style="display: flex;justify-content: space-around;align-items: center;margin: 15px 0">
              <span class="status" >AI状态:</span>
              <span>GPT4：0</span>
              <span>|</span>
              <span>MJ：0</span>
              <span>|</span>
              <span>SD：0</span>
            </el-row>

            <el-row @click="today_coin" class="btn-row">
              <div class="btn">鸮币签到</div>
              <el-icon style="float: right"><DArrowRight /></el-icon>
            </el-row>
            <el-row @click="pay" class="btn-row">
              <div class="btn">立即充值</div>
              <el-icon><DArrowRight /></el-icon>
            </el-row>
            <el-row @click="update" class="btn-row">
              <div class="btn">大会员</div>
              <el-icon><DArrowRight /></el-icon>
            </el-row>
          </template>
        </el-popover>
      </div>
    </div>
  </div>
  <el-dialog
      v-model="dialogVisible"
      title="快充值中心"
      width="30%"
      class="dialog"
  >
    <span>扫描二维码</span>
    <div class="QR-code">
      <qrcode-vue :value="value" :size="size"></qrcode-vue>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {useCounterStore} from "@/stores/counter.js";
import {reactive} from "vue"
import {useRouter} from "vue-router";
import {h, onMounted, ref, watchEffect} from "vue";
import {ElNotification} from "element-plus";
import QrcodeVue from "qrcode.vue";
import axios from "axios";
const router = useRouter()
const store = useCounterStore()

const goHome = () => {
  router.push('/')
}
const qqq= () =>{
  console.log(user,'测试')

}
const openDrawer = () => {
  store.drawer = !store.drawer
}
//接收后端数据
const data = reactive({
  user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
})
//创作管理
const workManage = () => {
  router.push('/workManage')
}
//先校验是否登录，如归登录则跳转个人页，否则跳转登录页
let userName = ref('')
let userImg = ref('')
const user = () => {
  if (ifIsLogin()) {
    router.push('/user')
  } else {
    router.push('/login')
  }
}
const ifIsLogin = () => {
  if (getToken()) {
    userName.value = store.username
    userImg.value = 'src/assets/user.png'

  } else {
    userName.value = '请登录'
    userImg.value = 'src/assets/img/placeholder.png'
  }
}
const getToken = () => {
  if (store.token !== 'empty') {
    return true
  } else {
    return false
  }
}
onMounted(() => {
  ifIsLogin()
})

//会员升级
const update = () => {
  store.dialogVisiable = !store.dialogVisiable
}
const Key = ref('')
const qrUrl = ref('')
const value = ref()
const dialogVisible = ref(false)
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
watchEffect(() => {
  value.value = qrUrl.value
})
const getQR = () => {
  axios.get('http://8.130.35.251:3000/login/qr/key').then((res) => {
    Key.value = res.data.data.unikey
    axios.get(`http://8.130.35.251:3000/login/qr/create?key=${Key.value}`).then((res) => {
      qrUrl.value = res.data.data.qrurl
    })
  })
}

const pay = () => {
  dialogVisible.value = !dialogVisible.value
  getQR()
}
</script>

<style scoped>
@import "Navigator.css";
</style>