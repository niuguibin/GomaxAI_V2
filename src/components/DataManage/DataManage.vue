<script setup>
import * as echarts from 'echarts';
import { ref } from "vue";
import { onMounted } from "vue";
import { useCounterStore} from "@/stores/counter.js";
import {CaretBottom, CaretTop, DCaret} from "@element-plus/icons-vue";
const store = useCounterStore()
const value = ref('')
const option = ref([
  {
    value: '近7天',
    label: '近7天'
  },
  {
    value: '近14天',
    label: '近14天'
  },
  {
    value: '近30天',
    label: '近30天'
  },
  {
    value: '有史以来',
    label: '有史以来'
  }
])
//数据展示模块
const data_list = ref([
  {
    name: '浏览量',
    value: '122',
    change: '-10'
  },
  {
    name: '粉丝',
    value: '233',
    change: '+1'
  },
  {
    name: '点赞',
    value: '14',
    change: '-5'
  },
  {
    name: '收藏',
    value: '56',
    change: '-5'
  },
  {
    name: '硬币',
    value: `${store.coin}`,
    change: '0'
  },
])
//根据change的符号切换icon
const onOrDown = (num) => {
  let key = Number(num)
  if (key > 0){
    return CaretTop;
  }
  if (key < 0){
    return CaretBottom
  }
  if (key === 0){
    return DCaret
  }
}
//echarts图表
onMounted(() => {
  const infoChart = echarts.init(document.getElementById('chart'))
  const chartOption = {
    xAxis: {
      data: ['2023年9月', '2023年10月', '2023年11月', '2023年12月', '2024年1月']
    },
    yAxis: {},
    color: '#ff4684',
    series: [
      {
        data: [150, 22, 28, 103, 96],
        type: 'line',
        smooth: true
      }
    ]
  };
  infoChart.setOption(chartOption)
})
</script>

<template>
  <div class="data">
    <div class="content">
      <div class="data-title">
        <div class="title-1">
          <el-divider content-position="left">
            核心数据概况
          </el-divider>
        </div>
        <div class="title-2">
          时间选择
          <el-divider direction="vertical"/>
          <el-select v-model="value" style="width: 100px;height: 40px;" placeholder="近7天">
            <el-option
                v-for="item in option"
                :key="item"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="data-stage">
        <div class="data-block">
          <div class="data-card" v-for="item in data_list" :key="item">
            <div class="data-card-item" style="display: flex;justify-content: space-between;margin-bottom: 8px">
              <div style="color: #000;display: block">{{item.name}}</div>
              <div style="color: #ff4684">
                <el-button style="width: 30px;height: 30px;outline: none;border: none;color: #ff4684" :icon="onOrDown(item.change)"/>{{item.change}}
              </div>
            </div>
            <div class="data-card-item" style="display: block;color: #000;font-size: 20px;text-align: left">
              {{item.value}}
            </div>
          </div>
        </div>
        <div class="data-chart" id="chart">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "data.css";
</style>