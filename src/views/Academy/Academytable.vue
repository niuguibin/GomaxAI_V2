<template>
<div style="margin-top: 47px;padding: 15px 150px 0 150px">
  <div style="background-color: #2F3233;height:auto;margin-bottom: 10px;">
    <el-row>
      <span style="color: #e1e5ec;margin:20px 0 0px 50px;font-size: 20px;font-weight: bold">
        课程信息
      </span>
    </el-row>
    <el-row style="display: flex;justify-content: space-between">
      <span style="color: #999aaa;margin:10px 0 10px 50px;font-size: 16px">
        精选文学作品赏析
      </span>
      <div style="margin-right: 50px">
        <el-input
            v-model="input1"
            class="w-50 m-2"
            placeholder="请输入课程名或老师名"
            :suffix-icon="Search"
        />
      </div>
    </el-row>
    <hr class="hr_gradient">
    <div style="margin: 20px 40px 50px 40px;padding-bottom: 30px">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="100" />
        <el-table-column prop="address" label="Address" width="180" />
        <el-table-column prop="bool" label="Bool">

        </el-table-column>
        <el-table-column>
          <el-button type="primary" round
                     @click="jump"
                     style="background-image: linear-gradient(to right, #445ED1, #A952D7);border: none;
                     ">
            观 看
          </el-button>
        </el-table-column>


      </el-table>
    </div>

  </div>

</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
const input1 = ref('')
const jump = () =>{
  router.push('/Academyvideo')
}
const router = useRouter()
const tableData = [
  {
    date: '2024.02.21 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语1',
    bool:'已观看',
  },
  {
    date: '2024.02.22 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语2',
    bool:'未观看',
  },
  {
    date: '2024.02.23 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语3',
    bool:'未观看',
  },
  {
    date: '2024.02.24 19:00 - 21:30',
    name: '郭熙',
    address: '方法精讲-言语4',
    bool:'未观看',
  },
]



</script>

<style scoped>
.hr_gradient{
  border: 0;
  height: 1px;
  background-color: #5a5a5e;
  width: auto;
  margin: 15px 40px 0 40px;
  background-image: linear-gradient(to right,#333, #8b8b8b, #333);
}

/*表格样式*/
>>> .el-table thead {
  display: none;
}
/deep/ .el-table{
  border: none;


}
/deep/ .el-table__row{
  background-color: #2F3233;
  color: #e1e5ec;
  height: 70px;
}
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background:#3C3F41 ;
}


/deep/ .el-table td{
  border-bottom: none;
}
/deep/ .el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: #4b4f52 !important;
}
</style>