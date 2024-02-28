<script lang="ts" setup>
import {useCounterStore} from "../../stores/counter.js";
import {Edit} from "@element-plus/icons-vue";
import {useRouter} from "vue-router";
import { ref } from "vue";
import {watchEffect} from "vue";
import {ElMessage, ElMessageBox,ElIcon } from "element-plus";
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
      .then(({ value }) => {
        if (value){
          store.username = value
          ElMessage({
            type: 'success',
            message: `新的用户名是:${value}`,
          })
        }else{
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
//头像上传
import type { UploadProps } from 'element-plus'

const imageUrl = ref('../../assets/user.png')

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
//会员元素列表
const vip_element = ref([
  {id: 1,msg: '积分',num: 21},
  {id: 2,msg: '续期',num: 1},
  {id: 3,msg: '开通',num: 12},
  {id: 4,msg: '鸮币',num:` ${coin}`}
])
//续费模块
const renewal_flag = ref(false)
const renewal = () => {
  renewal_flag.value = !renewal_flag.value
}
const renewal_list = ref([
  {id: 1,msg: '包年￥105'},
  {id: 2,msg: '包季￥45'},
  {id: 3,msg: '包月￥15'}
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
const select = (index) => {
  choice.value = renewal_list.value[index].msg
}
const Pay = () => {
  if (choice.value !== null && radio_1.value == true && tag.value){
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
  }else {
    ElMessage({
      type: 'warning',
      message: '充值失败',
    })
  }
}
//我的发布
const collection_list = ref([
  {id: 1,title: '校园秋景',date: '2023年5月8日'},
  {id: 2,title: '校园秋景',date: '2023年5月9日'},
  {id: 3,title: '校园秋景',date: '2023年5月10日'},
  {id: 4,title: '校园秋景',date: '2023年5月11日'},
])
//跳转作品管理页面
const jumpToWork = () => {
  router.replace('/workManage')
}
</script>

<template>
  <div class="background">
    <div class="left-info">
      <div class="left-img">
        <el-upload
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            style="width: 80px;height: 80px;z-index: 999"
        >
          <img :src="imageUrl" alt="">
          <el-icon class="avatar-uploader-icon"><User /></el-icon>
        </el-upload>
      </div>
      <el-card style="width: 250px;height: 70%;margin: 130px auto;">
        <div class="left-word" style=";height: 50px!important;">
          <el-tooltip
              class="box-item"
              effect="dark"
              content="修改用户名"
              placement="bottom"
          >
            <el-button style="width: 50px;height: 50px;float: right;border: none;font-size: 20px" :icon="Edit" @click="open" />
          </el-tooltip>
        </div>
        <div class="left-word" style="margin-top: 40px">
          用户名: <span class="important">{{username}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          用户ID: <span class="important">{{userID}}</span>
        </div>
        <el-divider />
        <div class="left-word" style="margin-top: 20px">
          我的鸮币: <span class="important">{{coin}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的关注: <span class="important">{{follow}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的收藏: <span class="important">{{collection}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的作品: <span class="important">{{MyWork}}</span>
        </div>
        <div class="left-word" style="margin-top: 20px">
          我的点赞: <span class="important">{{like}}</span>
        </div>
      </el-card>
    </div>
    <div class="right-info">
      <el-card style="width: 90%;height: auto;margin: 130px auto">
        <el-tabs>
          <el-tab-pane label="我的钱包">
            <div class="user_card">
              <div class="card">
                <img src="https://s1.hdslb.com/bfs/static/jinkela/big/assets/vip_card_bg_3.png" alt="" class="img_1">
                <div class="user-layer" style="padding-left: 10px">
                  <div class="user-layer_top">
                    <div class="user-avatar"><img src="../../assets/user.png" alt=""></div>
                    <div class="user-name">
                      <p>{{username}}</p>
                      <el-tag
                          type="info"
                          effect="dark"
                          round
                          size="small"
                          style="background-color: rgb(251, 114, 153)"
                      >
                        会员
                      </el-tag>
                    </div>
                  </div>
                  <div class="user-layer_top">
                    <div class="user-name">
                      <p style="color: #808080">会员有效期至2024年7月19日</p>
                    </div>
                  </div>
                </div>
              </div>
              <el-divider style="background-color: transparent!important;font-size: 10px">我的会员</el-divider>
              <div class="user-vip">
                <div v-for="item in vip_element" :key="item" class="vip_element">
                  <div class="vip-item">{{item.msg}}</div>
                  <div class="vip-item" style="font-size: 12px">{{item.num}}</div>
                </div>
              </div>
              <div class="vip-pay">
                <el-button round style="background-color: rgb(251, 114, 153);color: #ffffff" @click="openPay">单笔充值</el-button>
                <el-button round plain @click="renewal">续费</el-button>
              </div>
            </div>
            <div class="renewal" v-show="renewal_flag">
              <div class="renewal-box">
                  <div class="renewal-item" v-for="(item,index) in renewal_list" :key="index" @click="select(index)">
                    <div class="renewal-top">{{item.msg}}</div>
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
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的发布">
            <div class="collect">
              <div class="collect-card">
                <div class="collect-title">
                  <h2>我的发布</h2>
                </div>
                <div class="collect-body">
                  <div class="collections" v-for="item in collection_list" :key="item">
                    <img src="../../assets/img/schooltest.jpg" :alt="item.title" loading="lazy">
                    <h5 style="text-align: left">{{item.title}}</h5>
                    <h5 style="text-align: right">{{item.date}}</h5>
                  </div>
                </div>
                <div class="collect-title" style="justify-content: space-around">
                  <el-pagination layout="prev, pager, next" :total="1000" />
                </div>
              </div>
              <div class="collect-info">
                <el-card class="quick-submit">
                  <el-button-group style="display: block;width: 100%">
                    <el-button size="small" @click="jumpToWork">一键投稿</el-button>
                    <el-button size="small">内容管理</el-button>
                  </el-button-group>
                </el-card>
                <el-card class="coll-info">
                  <img src="../../assets/img/swiper_3.jpg" alt="">
                </el-card>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的收藏">
            <div class="favourites">
              <div class="collect-title">
                <h2>我的收藏</h2>
              </div>
              <div class="favourites-box">
                <div class="collections" v-for="item in collection_list" :key="item" style="float: left;margin-right: 10px">
                  <img src="../../assets/img/schooltest.jpg" :alt="item.title" loading="lazy">
                  <h5 style="text-align: left">{{item.title}}</h5>
                  <h5 style="text-align: right">{{item.date}}</h5>
                </div>
              </div>
              <div class="collect-title" style="justify-content: space-around">
                <el-pagination layout="prev, pager, next" :total="1000" />
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
@import "user.css";
</style>
<style>
.left-img .el-upload {
  display: block!important;
}
.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.el-divider__text {
  background-color: transparent;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  display: block;
  height: 80px;
  position: absolute;
  text-align: center;
  padding: 26px;
  margin-top: -80px;
}
</style>