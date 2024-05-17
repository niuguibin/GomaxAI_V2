<template>
  <div style="margin-top: 56px;padding: 0px 170px 0 170px">
    <el-container class="big-box">

      <el-tabs tab-position="left" class="demo-tabs" style=";width: 100%">

        <el-tab-pane label="个人信息">
            <el-row class="row1-1">
              <el-upload
                  :show-file-list="false"
                  action="http://localhost:9090/files/upload"
                  :on-success="handleImgUploadSuccess"
                  class="user_avatar"
              >
                <img :src="data.user.avatar || 'src/assets/em-user.png'" >

              </el-upload>

              <div style="display: flex;flex-direction: column">
                <span class="user-name">
<!--                  手机尾号后四位,暂时定!!!!!!!!!!!!!!!!!-->
                  {{ data.user.name }}
                  <el-button :icon="Edit" @click="open" class="button1"/>
                </span>
                <span class="user-name">
                用户ID: {{data.user.id}}
              </span>
                <el-tag type="warning" class="tag1" style="font-size: 10px">大会员</el-tag>
              </div>

            </el-row>
            <el-row style="margin: 0 0 40px 50px">
              <span style="color: white;margin-right: 20px">我的签名</span>
              <el-input
                  v-model="textarea"
                  style="width: 300px"
                  :rows="2"
                  type="textarea"
                  resize="none"
                  placeholder="请输入"
              />
            </el-row>
            <hr class="hr_gradient">
            <el-row class="row1-2">
              <div class="user_info">
                <div class="user_info_top">{{  data.user.coin || '无'    }}</div>
                <div class="user_info_bot">我的鸮币</div>
              </div>
              <div class="user_info">
                <div class="user_info_top">{{ data.user.attention  || '无'  }}</div>
                <div class="user_info_bot">我的关注</div>
              </div>
              <div class="user_info">
                <div class="user_info_top">{{ data.user.collect || '无' }}</div>
                <div class="user_info_bot">我的收藏</div>
              </div>
              <div class="user_info">
                <div class="user_info_top">GPT4：0 | MJ：0 | SD：0</div>
                <div class="user_info_bot">AI状态</div>
              </div>
            </el-row>
            <hr class="hr_gradient">
            <el-row class="row1-3"><span>签到日历</span></el-row>
            <el-row class="row1-4">
              <div style="width: 400px;height: 400px">
                <el-calendar v-model="value">
                  <template #dateCell="{ date, data }">
                    <div>
                      <div v-for="(item, key) in activeday" :key="key" style="position: relative">
                        <el-badge v-if="data.day === item.dat" is-dot class="item"></el-badge>
                      </div>
                      <div>{{ data.day.split('-').slice(2).join('-') }}</div>
                    </div>
                  </template>
                </el-calendar>
              </div>
            </el-row>
        </el-tab-pane>

        <el-tab-pane label="我的收藏">
          <el-row class="row2-1">
            <span>我收藏的课程</span>
            <div class="main">
              <div class="main-inner body-width">
                <div class="main-cont main-album">

                  <div class="main-cont__list clearfix">
                    <div class="item" v-for="image in filteredImages" :key="image.id" :data-groups="image.groups">
                      <a href="#" class="pic">
                        <img :src="image.src" alt="Image">
                        <p class="video-data">
                          <el-icon style="margin: 0 3px 0 7px">
                            <View/>
                          </el-icon>
                          68
                          <el-icon style="margin: 0 3px 0 7px">
                            <ChatLineSquare/>
                          </el-icon>
                          2255
                        </p>
                      </a>
                      <div class="info">
                        <a href="#" class="title">你的书写工具需要一个庇护所</a>
                        <a href="#" class="author" :key="image.groups">{{ image.groups }}</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </el-row>
          <hr class="hr_gradient">
          <el-row class="row2-1">
            <span>我收藏的创作</span>
            <div class="main">
              <div class="main-inner body-width">
                <div class="main-cont main-album">
                  <div class="main-cont__list clearfix">
                    <div class="item" v-for="image in filteredImages" :key="image.id" :data-groups="image.groups">
                      <a href="#" class="pic">
                        <img :src="image.src" alt="Image">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-row>

        </el-tab-pane>

        <el-tab-pane label="我的课程">
          <el-row class="row2-1">
            <span style="width: 100%">未完成</span>
            <el-row :gutter="10" style=" display: flex; ">
              <el-col :span="8" v-for="item in 4" :key="item">
                <el-card class="box-card" @click="jump" style="background-color: #282828;">
                  <div>
                    <span>精选文学作品赏析</span>
                  </div>
                  <div>
                    <p style="color: white">2023.05.22 - 2023.09.28
                      12课时
                    </p>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-row>
          <hr class="hr_gradient">
          <el-row class="row2-1">
            <span style="width: 100%">已完成</span>
            <el-row :gutter="10" style=" display: flex; ">
              <el-col :span="8" v-for="item in 4" :key="item">
                <el-card class="box-card" @click="jump" style="background-color: #282828;">
                  <div>
                    <span>精选文学作品赏析</span>
                  </div>
                  <div>
                    <p style="color: white">2023.05.22 - 2023.09.28
                      12课时
                    </p>
                  </div>
                  <el-tag size="small" style="color: #027508;margin-top: 5px;font-size: 10px">已评价</el-tag>
                </el-card>
              </el-col>
            </el-row>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="我的创作">
          <el-row class="row2-1">
            <el-button size="small" @click="jumpToWork">一键投稿</el-button>-->
            <el-button size="small" @click="jumpToContent">内容管理</el-button>
          </el-row>
          <hr class="hr_gradient">
          <el-row class="row2-1">
            <span>我的创作</span>
            <div class="main">
              <div class="main-inner body-width">
                <div class="main-cont main-album">

                  <div class="main-cont__list clearfix">
                    <div class="item" v-for="image in filteredImages" :key="image.id" :data-groups="image.groups">
                      <a href="#" class="pic">
                        <img :src="image.src" alt="">
                        <p class="video-data">
                          <el-icon style="margin: 0 3px 0 7px">
                            <View/>
                          </el-icon>
                          68
                          <el-icon style="margin: 0 3px 0 7px">
                            <Star/>
                          </el-icon>
                          2255
                        </p>
                      </a>
                      <div class="info">
                        <a href="#" class="title">你的书写工具需要一个庇护所</a>
                        <a href="#" class="author" :key="image.groups">{{ image.time }}</a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="我的购买">
          <el-row class="row5-1">
            <span style="width: 100%;font-size: 16px">我的会员</span>
            <div style="display: flex;align-items: center">
              <span style="margin-right: 100px">会员有效期至2024年7月19日</span>
              <el-button round style="background-color: #4062D1;color: #ffffff" @click="openPay">
                充值
              </el-button>
              <el-button round plain @click="dialogVisible = true">
                续费
              </el-button>
            </div>
          </el-row>
          <hr class="hr_gradient">
          <el-row class="row5-1">
            <span style="width: 100%;font-size: 16px">大会员权益</span>
            <el-card class="vip-card" style="background-color: #6a8be7;">
              <span>三大内容特权(图片）</span>
            </el-card>
            <el-card class="vip-card" style="background-color: #9878e7;">
              <span>六大身份特权(图片）</span>
            </el-card>
            <el-card class="vip-card" style="background-color: #6a8be7;">
              <span>四大优先特权(图片）</span>
            </el-card>
          </el-row>
          <hr class="hr_gradient">
          <el-row class="row5-1">
            <span style="width: 100%;font-size: 16px">大会员福利活动</span>
            <el-card class="vip-card" style="background-color: #6a8be7;">
              <span>活动1(图片）</span>
            </el-card>
            <el-card class="vip-card" style="background-color: #9878e7;">
              <span>活动2(图片）</span>
            </el-card>
            <el-card class="vip-card" style="background-color: #6a8be7;">
              <span>活动3(图片）</span>
            </el-card>
          </el-row>


          <el-dialog class="renewal" v-model="dialogVisible">
            <div class="renewal-box">
              <div class="renewal-item" v-for="(item,index) in renewal_list" :key="index" @click="select(index)"
                   :style="{ backgroundColor: selected === index ? '#00000019' : 'transparent' }">
                <div class="renewal-top">{{ item.msg }}</div>
                <div class="renewal-bottom">
                </div>
              </div>
            </div>
            <div class="renewal-box-2">
              <div class="renewal_item-1">
                <el-checkbox size="large" v-model="radio_1">点击同意《会员自动续费条例》</el-checkbox>
              </div>
              <div class="renewal_item-1" style="margin-top: 10px">
                <el-button round plain @click="Pay">支付</el-button>
              </div>
            </div>
          </el-dialog>
        </el-tab-pane>
      </el-tabs>


    </el-container>


  </div>
</template>

<script lang="ts" setup>
import {useCounterStore} from "../../stores/counter.js";
import {useRouter} from "vue-router";
import {computed, reactive, ref, watchEffect} from "vue";
import request from "../../utils/request"

//头像上传
import {ElMessage, ElMessageBox, UploadProps} from 'element-plus'
import {Edit} from "@element-plus/icons-vue";
//用户个人信息
const store = useCounterStore()
const coin = store.coin
const follow = store.follows
const collection = store.collection
const MyWork = store.MyWork
const like = store.like
const userID = store.userID
const username = ref()
const router = useRouter()
const value = ref(new Date())

// -----------------个人信息start-------------------------

//接收后端数据
const data = reactive({
  user: JSON.parse(localStorage.getItem('xm-user') || '{}'),
})
const handleImgUploadSuccess = (res) => {
  data.user.avatar = res.data
}

const update = () => {
  request.put('/student/update', data.user).then(res => {
    if (res.code === '200') {
      ElMessage.success("操作成功")
      router.push('/login')
    } else {
      ElMessage.error(res.msg)
    }
  })
}






















const activeday = ref([
  {dat: '2024-05-01'},
  {dat: '2024-05-03'},
  {dat: '2024-05-15'}
]);
const textarea = ref('')

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('图片只支持JPG格式！')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片最大2M!')
    return false
  }
  return true
}
//编辑弹窗
const isShow = ref(false)
watchEffect(() => {
  username.value = store.username
})
const open = () => {
  isShow.value = !isShow.value
  ElMessageBox.prompt('请输入新的用户名', '修改用户名', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern:
        /^[a-zA-Z]{4}[0-9a-zA-Z]{4}$/,
    inputErrorMessage: '无效用户名',
  })
      .then(({value}) => {
        if (value) {
          store.username = value
          ElMessage({
            type: 'success',
            message: `新的用户名是:${value}`,
          })
        } else {
          console.log('error!')
        }
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '输入取消',
        })
      })
}
// -----------------个人信息end-------------------------

// ---------------我的收藏start---------------------
const images = ref([
  {id: 1, src: '/src/assets/img/img1.jpg', groups: 'ChatGPT', time: '2024/04/01'},
  {id: 2, src: '/src/assets/img/img1.jpg', groups: 'Midjourney', time: '2024/04/01'},
  {id: 3, src: '/src/assets/img/img1.jpg', groups: 'StableDiffusion', time: '2024/04/01'},
  {id: 4, src: '/src/assets/img/img1.jpg', groups: 'ChatGPT', time: '2024/04/01'},
  {id: 5, src: '/src/assets/img/img1.jpg', groups: 'Midjourney', time: '2024/04/01'},
  {id: 6, src: '/src/assets/img/img1.jpg', groups: 'StableDiffusion', time: '2024/04/01'},

  // 更多图片对象...
]);


const activeFilter = ref(null);

const filteredImages = computed(() => {
  // 如果没有选定过滤器，则显示所有图片
  if (!activeFilter.value) {
    return images.value;
  }

  // 否则，只显示与选定过滤器匹配的图片
  return images.value.filter(image => image.groups.indexOf(activeFilter.value) !== -1);

});

//------------我的收藏end-------------------

//--------------我的课程atart=-----------------
const jump = () => {
  router.push('/Academytable')
}
// ----------------我的课程end-----------------

// -------------------我的创作start------------------
//跳转作品管理页面
const jumpToWork = () => {
  router.replace('/workManage')
}
//跳转内容管理页面
const jumpToContent = () => {
  router.replace('/content')
}
// -----------------我的创作end-------------------

//-----------------我的购买start-----------------
const dialogVisible = ref(false)

//续费模块
const renewal_flag = ref(false)

// const renewal = () => {
//   renewal_flag.value = !renewal_flag.value
// }
const renewal_list = ref([
  {id: 1, msg: '包年￥105'},
  {id: 2, msg: '包季￥45'},
  {id: 3, msg: '包月￥15'}
])
//const radio = ref('1')
//单笔充值

const openPay = () => {
  ElMessageBox.alert('单笔充值栏', '单笔充值', {
    confirmButtonText: '确认',
    callback: () => {
      ElMessage({
        type: 'success',
        message: '充值确认',
      })
    },
  })
}
//充值卡片选择
const radio_1 = ref(false)
const choice = ref()
const tag = ref(true)
const selected = ref(null);
const select = (index) => {
  choice.value = renewal_list.value[index].msg
  selected.value = index;
}

const Pay = () => {
  if (choice.value !== null && radio_1.value == true && tag.value) {
    tag.value = false;
    ElMessageBox.alert(`充值金额:${choice.value}`, '充值', {
      confirmButtonText: '确认',
      callback: () => {
        ElMessage({
          type: 'success',
          message: '充值确认',
        })
      },
    })
  } else {
    ElMessage({
      type: 'warning',
      message: '充值失败',
    })
  }
}

</script>

<style scoped>
@import "user.css";
</style>
