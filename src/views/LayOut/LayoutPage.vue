<script setup>
import {RouterView} from "vue-router";
import NavigatorPage from "@/components/TopNavigator/NavigatorPage.vue";
import FooterPage from "@/components/BottomFooter/FooterPage.vue";
</script>

<template>
  <div class="background">
    <NavigatorPage/>
    <RouterView/>
    <FooterPage/>
  </div>
</template>

<style scoped>
@import "Layout.css";
</style>