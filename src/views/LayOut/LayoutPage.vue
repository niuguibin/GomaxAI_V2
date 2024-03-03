<script setup>
import { ref } from "vue";
import {RouterView} from "vue-router";
import {onMounted} from "vue";
import { useCounterStore } from "@/stores/counter.js";
const store = useCounterStore()
import NavigatorPage from "@/components/TopNavigator/NavigatorPage.vue";
import NoticeComponenet from "@/components/NoticeComponent/NoticeComponenet.vue";
import EmptyComponent from "@/components/Empty/EmptyComponent.vue";
//暂时 我的消息队列
const noticeList = ref()
//标志位
const noticeSign = ref(false)
const emptySign = ref(true)
//如果消息队列为空则显示EmptyComponent，否则渲染NoticeComponent
const EmptyOrNotice = () => {
  if (noticeList.value !== null){
    emptySign.value = false
    noticeSign.value = true
  }else {
    emptySign.value = true
    noticeSign.value = false
  }
}
onMounted(() => {
  EmptyOrNotice()
})
</script>

<template>
  <div class="background">
    <NavigatorPage/>
    <RouterView/>
    <!-- 升级会员页面 -->
    <el-dialog
        v-model="store.dialogVisiable"
        width="500px"
        title="会员升级"
    >

    </el-dialog>
    <!-- 消息通知 -->
    <el-drawer v-model="store.drawer" title="消息中心">
      <span class="drawerCon">
        <EmptyComponent v-show="emptySign"/>
        <NoticeComponenet v-show="noticeSign" />
      </span>
    </el-drawer>
  </div>
</template>

<style scoped>
@import "Layout.css";
</style>