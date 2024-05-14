<template>
<div style="margin-top: 47px;padding: 15px 150px 0 150px">
  <div style="background-color: #282828;height: 150px;margin-bottom: 10px;display: flex;flex-direction: column;justify-content:center;">
    <el-row>
      <span  style="color: #e1e5ec;margin-left: 50px;margin-bottom: 10px;font-size: 25px;font-weight: bold">
      已支付
    </span>
    </el-row>
    <el-row>
      <span style="color: #999aaa;margin-left: 50px;">
        下单时间:&nbsp;&nbsp;2024.01.30 01:10&nbsp;&nbsp;&nbsp;&nbsp;订单号:&nbsp;&nbsp;931708024694370304
      </span>

    </el-row>
  </div>
  <div style="background-color: #282828;height: 400px;margin-bottom: 10px;">
    <el-row>
      <span  style="color: #e1e5ec;margin:30px 0 10px 50px;font-size: 20px">精选文学作品赏析</span>
    </el-row>
    <el-row>
      <span>
        <span  style="color: #999aaa;margin-left: 50px;display: flex;align-items: center">2023.05.22 - 2023.09.28</span>
      </span>
    </el-row>
    <el-row style="display: flex;align-items: center;width: 100%;justify-content: space-between">
      <div style="display: flex;justify-content: flex-start; line-height: 10px; height: 40px;  margin:30px 0 30px 50px">
        <div style="width:40px;height:60px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 15px">
          <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <p style="margin-top: 4px; width: 40px;text-align:center;color: #c9cdd4;line-height: 14px;font-size: 13px">牛老师</p>
        </div>
        <div style="width:40px;height:60px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 15px">
          <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <p style="margin-top: 4px; width: 40px;text-align:center;color: #c9cdd4;line-height: 14px;font-size: 13px" >牛老师</p>
        </div>
        <div style="width:40px;height:60px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 15px">
          <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
          <p style="margin-top: 4px; width: 40px;text-align:center;color: #c9cdd4;line-height: 14px;font-size: 13px">牛老师</p>
        </div>
      </div>
      <div style="margin-right: 50px">
        <div class="flex justify-space-between mb-4 flex-wrap gap-4">
          <el-button
              v-for="button in buttons"
              :key="button.text"
              :type="button.type"
              text
              bg
              @click="jump"
          >{{ button.text }}</el-button
          >
        </div>
      </div>
    </el-row>
    <hr class="hr_gradient">
    <div style="margin: 20px 50px 30px 50px">
    <el-row style="width: 100%;">
      <span style="color:#e1e5ec;font-size: 16px">
        订单信息
      </span>
    </el-row>
      <el-row style="display: flex;justify-content: space-between;margin-top: 15px">
        <span style="color:#999aaa;font-size: 14px">
          课程价格
        </span>
        <span style="color:#999aaa;font-size: 15px">
          $100
        </span>
      </el-row>
      <el-row style="display: flex;justify-content: space-between;margin-top: 8px">
        <span style="color:#999aaa;font-size: 14px">
          优惠活动
        </span>
        <span style="color:#999aaa;font-size: 15px">
          -$0
        </span>
      </el-row>
      <el-row style="display: flex;justify-content: space-between;margin-top: 8px">
        <span style="color:#e1e5ec;font-size: 15px">
          实际支付
        </span>
        <span style="color:#F5DB9D;font-size: 18px;font-weight: bold">
          $100
        </span>
      </el-row>
    </div>


  </div>

</div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const buttons = [

  { type: 'primary', text: '查看详情' },

] as const
const jump = () => {
  router.push('/Academytable')
}
const router = useRouter()

</script>

<style scoped>
.hr_gradient{
  border: 0;
  height: 1px;
  background-color: #5a5a5e;
  width: auto;
  margin: 15px 40px 0 40px;
}
</style>