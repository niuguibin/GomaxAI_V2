<template>
  <div class="common-layout" style="margin-top: 100px;padding: 0px 150px 0 150px">
    <el-container>

      <el-container>
        <el-header style="background-color: #1e2021;height: 250px;width: 100%">
          <img
            src="/src/assets/img/Userbg.jpg"
            style="width: 100%;height: 180px"
        />
          <el-row>
            <div style="margin-top: -30px;margin-left: 20px">
            <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            </div>
            <span class="user-name">牛老师</span>
          </el-row>
        </el-header>

        <el-main>Main</el-main>
      </el-container>

      <el-aside width="200px">Aside</el-aside>

    </el-container>
  </div>
</template>


<script lang="ts"  setup>


</script>


<style scoped>
@import "CreateTwo.css";
</style>