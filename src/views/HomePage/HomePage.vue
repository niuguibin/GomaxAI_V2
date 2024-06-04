<script setup>

import TopAd from "@/LayOut/TopAD/TopAd.vue";
import AIDrawing from "./AIDrawing/AIDrawing.vue";
import SoldPage from "./SoldClass/SoldPage.vue";
import FooterPage from "@/LayOut/BottomFooter/FooterPage.vue";
</script>

<template>
  <div class="background_3">
    <TopAd/>
    <AIDrawing/>
    <SoldPage/>
    <div style="width: 100%;height: 50px"></div>
    <FooterPage/>
  </div>
</template>

<style scoped>
@import "Home.css";
</style>