
<template>
  <div class="background">

    <el-row>
      <el-col>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#2B2B2B"
            text-color="#ffffff"
            active-text-color="#F5DB9D"
            @select="handleSelect"
            style="height: 50px;padding-left: 130px"
        >
          <el-sub-menu index="2">
            <template #title>小学</template>
            <el-menu-item index="2-1">数学</el-menu-item>
            <el-menu-item index="2-2">语文</el-menu-item>
            <el-menu-item index="2-3">英语</el-menu-item>
            <el-menu-item index="2-4">科学</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>初中</template>
            <el-menu-item index="3-1">item one</el-menu-item>
            <el-menu-item index="3-2">item two</el-menu-item>
            <el-menu-item index="3-3">item three</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>高中</template>
            <el-menu-item index="4-1">item one</el-menu-item>
            <el-menu-item index="4-2">item two</el-menu-item>
            <el-menu-item index="4-3">item three</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="5">
            <template #title>大学</template>
            <el-menu-item index="5-1">item one</el-menu-item>
            <el-menu-item index="5-2">item two</el-menu-item>
            <el-menu-item index="5-3">item three</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>研究生</template>
            <el-menu-item index="6-1">item one</el-menu-item>
            <el-menu-item index="6-2">item two</el-menu-item>
            <el-menu-item index="6-3">item three</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="7">
            <template #title>职业考试</template>
            <el-menu-item index="7-1">item one</el-menu-item>
            <el-menu-item index="7-2">item two</el-menu-item>
            <el-menu-item index="7-3">item three</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="8">
            <template #title>兴趣</template>
            <el-menu-item index="8-1">item one</el-menu-item>
            <el-menu-item index="8-2">item two</el-menu-item>
            <el-menu-item index="8-3">item three</el-menu-item>
          </el-sub-menu>
          <el-input
              v-model="input2"
              class="w-50 m-2"
              placeholder="输入课程或老师名称"
              :suffix-icon="Search"
              style="margin: 10px 150px 10px 230px;"
          />
        </el-menu>
      </el-col>
    </el-row>


    <div style="margin-bottom: 500px">
      <el-scrollbar height="500px">
        <el-row>
          <div style="padding-left: 150px;padding-right: 150px">
            <el-row>
              <div
                  class="address"
                  @click="dialogTableVisible = true"
              >
                <el-icon color="#409EFC" class="no-inherit">
                  <Location style="font-size: 20px" />
                </el-icon>
                <span style="margin-left: 5px;display: block;font-size: 16px;cursor: pointer">
                   辽宁
                </span>
              </div>
            </el-row>
            <hr class="hr_gradient">
            <el-row>
              <div style="height: 20px;line-height: 20px;float: left;margin: 20px 0 5px 0">
                <h1 class="big-text">发现好课</h1>
              </div>
            </el-row>
            <el-row>
              <div>
                <el-row  :gutter="1" style=" display: flex; justify-content: center;"  >
                  <el-col :span="8"  v-for="item in 12" :key="item" >
                    <el-card class="box-card"  @click="jump">
                      <div class="card-header">
                        <span class="card-text">精选文学作品赏析</span>
                      </div>
                      <div  class="text item" >
                        <p class="card-time">2023.05.22 - 2023.09.28
                          12课时
                        </p>
                        <div style="float: left;">
                          <el-space >
                            <el-tag size="small" >文学</el-tag>
                            <el-tag size="small" type="success">高中</el-tag>
                            <el-tag size="small" type="warning">兴趣</el-tag>
                            <el-tag size="small" type="danger">精选</el-tag>
                          </el-space>

                        </div>

                        <div style="display: flex;justify-content: flex-start;margin-top:80px;">
                          <div style="width:40px;height:60px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 10px">
                            <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            <p style="margin-top: 4px; width: 40px;text-align:center">牛老师</p>
                          </div>
                          <div style="width:40px;height:60px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 10px">
                            <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            <p style="margin-top: 4px; width: 40px;text-align:center">牛老师</p>
                          </div>
                          <div style="width:40px;height:60px;display: flex;flex-direction: column;justify-content: center;align-items: center;margin-right: 10px">
                            <el-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                            <p style="margin-top: 4px; width: 40px;text-align:center">牛老师</p>
                          </div>
                        </div>
                        <div class="card-footer" style="float: right;margin-top: 5px" >
                          <span class="price-text">$100</span>
                        </div>
                      </div>



                    </el-card>
                  </el-col>
                </el-row>
              </div>
            </el-row>
          </div>
        </el-row>
      </el-scrollbar>
    </div>
    <FooterPage/>
  </div>


  <!--弹框-->
  <el-dialog v-model="dialogTableVisible" style="width: 600px;height: 500px">
    <el-container>
      <el-header style="margin-top: -40px;display: flex;align-items: flex-start;flex-direction: column">
        <el-row>
          <el-icon color="#409EFC" class="no-inherit">
            <Location style="font-size: 30px;margin-right: 5px" />
          </el-icon>
          <span class="add-title">辽宁</span>
        </el-row >
        <el-row style="margin-top: 5px">
          <span style="font-size: 13px;">选择省份，筛选对应地区课程</span>
        </el-row>

      </el-header>

      <el-main>
        <el-scrollbar height="300px">
          <el-row>
            <el-col :span="6" v-for="item in 31" :key="item"><div/>
              <el-button class="add-button" plain>辽宁</el-button>
            </el-col>
          </el-row>
        </el-scrollbar>

      </el-main>
      <el-footer style="text-align: center">
        <el-button class="right-button" @click="dialogTableVisible = false" type="primary">确 认</el-button>
      </el-footer>
    </el-container>

  </el-dialog>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import FooterPage from "../../components/BottomFooter/FooterPage.vue";
//const input1 = ref('')
import { ref,reactive, toRefs } from 'vue'
const router = useRouter()
import {useRouter} from 'vue-router'

const input1 = ref('')
const activeIndex = ref('1')
const input2 = ref('')
//const input3 = ref('')
const dialogTableVisible = ref(false)
//const formLabelWidth = '1200px'
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const jump = () => {
  router.push('/AcademyChild')
}
const state = reactive({

  circleUrl:
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
      'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['small', '', 'large'] as const,
})

</script>



<style scoped>
@import "Academy.css";


</style>