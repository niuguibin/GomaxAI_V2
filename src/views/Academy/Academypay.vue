<template>
<div style="margin-top: 47px;padding: 15px 150px 0 150px">
  <el-scrollbar height="auto">


      <div class="common-layout" style="width: 100%" >
        <el-container style="background-color: #2F3233;height: 180px;margin-bottom: 10px">
          <el-aside style="width: 60%;display: flex;flex-direction: column;justify-content:center;">
            <el-container style="display: flex;flex-direction: column;justify-content:center;">
            <el-row>
              <span  style="color: #e1e5ec;margin-left: 50px;margin-bottom: 10px;font-size: 25px;font-weight: bold">订单信息</span>
            </el-row>
            <el-row>
              <span  style="color: #e1e5ec;margin-left: 50px;margin-bottom: 10px;font-size: 20px">精选文学作品赏析</span>
            </el-row>
            <el-row>
              <span  style="color: #999aaa;margin-left: 50px;display: flex;align-items: center"><el-icon style="margin-right: 5px"><Clock /></el-icon>2023.05.22 - 2023.09.28</span>
            </el-row>
            </el-container>

        </el-aside>

        <el-main>
          <el-row style="margin: 35px 0 0 90px;display: block;vertical-align: bottom">
          <span style="color: #999aaa">课程价格：</span>
            <span style="font-weight: bold;color: #F5DB9D;font-size: 30px;margin-right: 5px;">$</span>
            <span style="font-weight: bold;color: #F5DB9D;font-size: 45px;">100</span>
          </el-row>
        </el-main>
        </el-container>
      </div>

        <el-container style="background-color: #2F3233;height: auto">
          <el-row style="display: flex;align-items: center;justify-content: space-between;width: 100%">
            <div><span style="color: #e1e5ec;margin-left: 50px;font-size: 18px;font-weight: bold">优惠券</span></div>
            <div class="demo-collapse">
              <el-collapse v-model="activeNames" @change="handleChange" style="width: auto;margin-right: 30px">
                <el-collapse-item title="可用优惠券" name="2">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="Date" width="180" />
                  </el-table>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-row>

        </el-container>

    <div style="background-color: #2F3233;height: 300px;margin-top: 10px">
      <el-row>
        <span style="color:#e1e5ec;margin-left: 50px;margin-top:15px;font-size: 18px;font-weight: bold">支付方式</span>
      </el-row>
      <el-row style="width: 100%">
        <div class="mb-2 flex items-center text-sm" style="width: 100%;margin-left: 50px;margin-right:50px;">
          <el-radio-group v-model="radio1" class="ml-4" style="width: 100%">
            <el-row style="width: 100%;" >
            <el-radio label="1" size="large"  style="height: 60px;width: 100%;   margin-top: 20px">

              <div style="display: flex;justify-content: center;align-items: center;">
                <svg style="width: 30px; height: 30px;margin:2px 8px 0 8px">
                  <use href="#icon-weixinzhifu"></use>
                </svg>
                <span style="font-size: 16px;color: #e1e5ec">微信</span>
              </div>
            </el-radio>
            </el-row>
            <hr class="hr_gradient">
            <el-row style="width: 100%">
            <el-radio label="2" size="large"    style="height: 60px;width:100%;   margin-bottom: 20px">
              <div style="display: flex;justify-content: center;align-items: center;">
                <svg style="width: 25px; height: 25px;margin:0 10px 0 10px">
                  <use href="#icon-zhifubaozhifu"></use>
                </svg>
                <span style="font-size: 16px;color: #e1e5ec">
                支付宝</span>
              </div>
            </el-radio>
            </el-row>
          </el-radio-group>
          <el-row style="float: right">
            <el-button class="right-button" type="primary" @click="jump">确认购买</el-button>
          </el-row>
        </div>
      </el-row>

    </div>
  </el-scrollbar>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {useRouter} from "vue-router";

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const tableData = [
  {
    date: '双十一满300减50券',
  },
]
const jump = () => {
  router.push('/Academypay2')
}
const router = useRouter()

</script>

<style scoped>
@import "Academypay.css";
</style>