<template>
<div style="margin-top: 47px;padding: 15px 150px 0 150px">
  <el-scrollbar height="auto">
  <el-row >
        <div class="common-layout" style="width: 100%">
      <el-container style="background-color: #3C3F41">
        <el-aside style="width:60%;height: 300px">

          <el-container>
            <el-header class="ch-header-left">
              <el-row style="margin-bottom: 10px">
              <span style="color: #e1e5ec;font-size: 26px;font-weight: bold;display: flex;align-items: center">
                精选文学作品赏析<el-icon style="margin-left: 10px"><Star /></el-icon>
              </span>

              </el-row>
              <el-row >
              <span style="color: #e1e5ec;">
              2023.05.22 - 2023.09.28
              12课时
              </span>
              </el-row>
              <el-row style="margin-top: 10px">
                <div style="float: left;">
                  <el-space >
                    <el-tag size="small" >文学</el-tag>
                    <el-tag size="small" type="success">高中</el-tag>
                    <el-tag size="small" type="warning">兴趣</el-tag>
                    <el-tag size="small" type="danger">精选</el-tag>
                  </el-space>

                </div>
              </el-row>
            </el-header>
            <el-main >
              <div style="display: flex;justify-content: flex-start; line-height: 10px; height: 40px;  margin:80px 0 30px 20px">
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
            </el-main>
          </el-container>

        </el-aside>
        <el-main style="background-color: #2F3233">
          <el-row style="margin: 20px 0 0 90px;display: block;vertical-align: bottom">
            <span class="price-sign">$</span><span class="price-text">100</span>
          </el-row>
          <el-row>
            <span style="color: #e1e5ec;margin: 0 0 10px 90px">2月5日开售</span>
          </el-row>
          <el-row>
            <el-button round  class="buy-button" @click="jump">立即购买</el-button>
          </el-row>
        </el-main>
      </el-container>
    </div>

  </el-row>

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

      <el-tab-pane label="课程介绍" name="first">

        <el-image     src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
        />

      </el-tab-pane>

      <el-tab-pane label="课程安排" name="second">
        <div class="demo-collapse">
          <el-collapse v-model="activeNames" @change="handleChange" >


            <el-collapse-item title="方法精讲" name="2">

                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180" />
                  <el-table-column prop="name" label="Name" width="180" />
                  <el-table-column prop="address" label="Address" />
                </el-table>

            </el-collapse-item>

            <el-collapse-item title="强化提升" name="3">

                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180" />
                  <el-table-column prop="name" label="Name" width="180" />
                  <el-table-column prop="address" label="Address" />
                </el-table>

            </el-collapse-item>

            <el-collapse-item title="套题演练" name="4">

                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="date" label="Date" width="180" />
                  <el-table-column prop="name" label="Name" width="180" />
                  <el-table-column prop="address" label="Address" />
                </el-table>


            </el-collapse-item>
          </el-collapse>
        </div>
      </el-tab-pane>

      <el-tab-pane label="老师介绍" name="third" >
        <el-row :gutter="30" style="display: flex;justify-content: space-between">
          <el-col :span="12"  v-for="item in 3" :key="item" >
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                <span style="margin-left: 15px;font-size: 14px;font-weight: bold">牛老师</span>
              </div>
            </template>
            <div>
              <el-space style="margin-top: -5px"><el-tag size="small" >GOMAX优质语文讲师</el-tag></el-space>
              <el-row style="margin: 5px 3px 5px 3px">
                始终以生动有趣、激发学生思维为教学宗旨，课堂氛围轻松融洽,广受学员好评。授课重点突出，能够及时总结拓展，讲解语言通俗易懂。
                擅长引导学生自主思考，善于根据学生的不同情况和需求，制定合适的教学计划，进行个性化指导，助力学员上岸。
              </el-row>
            </div>
          </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="课程评价" name="fourth">
        <el-main style="height: 700px">
          <div v-for="item in 5" :key="item">
            <el-row :gutter="20" style="display: flex;align-items: center;width: 100%;margin-top: 15px">

                <el-col :span="2" style="text-align: center">
                  <el-avatar  :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </el-col>
                <el-col :span="2">
                  <span style="font-size: 15px;color: #e1e5ec">珈瑶</span>
                </el-col  >
              <el-col :span="20" style="text-align: right"><span style="color: #e1e5ec">2022-08-26 14:57</span></el-col>
            </el-row>
            <el-row  class="pl" style="margin-bottom: 15px">
              <el-col  :span="22" :offset="2"><span style="color: #e1e5ec;font-size: 12px">好看爱看</span></el-col>
            </el-row>

          <hr class="hr_gradient">
          </div>

          <div class="foot-page" >
            <el-pagination
                v-model:current-page="currentPage1"
                page-size="5"
                :page-sizes="[5]"
                :disabled="disabled"
                :background="background"
                layout=" prev, pager, next"
                :total="1000"
                pager-count="5"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
          </div>

        </el-main>
      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>

</div>


</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import {useRouter} from "vue-router";
import {Star} from "@element-plus/icons-vue";
const activeIndex = ref('1')
const currentPage1 = ref(5)
const activeIndex2 = ref('1')
const activeName = ref('first')
const background = ref(false)
const disabled = ref(false)
const pageNum = ref('10')
const handleSizeChange = (val: number) => {

  console.log(`${val} items per page`)
}



const handleCurrentChange = (val: number) => {
  this.pageNum = pageNum
  console.log(`current page: ${val}`)
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
const tableData = [
  {
    date: '2024.02.21 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语1',
  },
  {
    date: '2024.02.22 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语2',
  },
  {
    date: '2024.02.23 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语3',
  },
  {
    date: '2024.02.24 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语4',
  },
]
let selectedRating = 0;

function setRating(rating) {
  selectedRating = rating;
  updateStars();
}

function updateStars() {
  const stars = document.querySelectorAll('.star');
  stars.forEach((star, index) => {
    star.classList.toggle('active', index < selectedRating);
  });
}

function submitReview() {
  const reviewText = document.querySelector('textarea').value;
  if (selectedRating > 0 && reviewText.trim() !== '') {
    alert(`评价：${selectedRating} 星\n评论：${reviewText}`);
  } else {
    alert('请完成评价和评论');
  }
}
const jump = () => {
  router.push('/Academypay')
}
const router = useRouter()
</script>

<style scoped>

@import "AcademyChild.css";
</style>