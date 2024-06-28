<script setup>

import TopAd from "./TopAD/TopAd.vue";
// import AIDrawing from "./AIDrawing/AIDrawing.vue";
import SoldPage from "./SoldClass/SoldPage.vue";
import FastStart from "./FastStart.vue";
import FooterPage from "@/LayOut/BottomFooter/FooterPage.vue";
</script>

<template>
  <div class="home-container">
    <TopAd />
    <div class="home-wrapper">
      <FastStart />
    </div>
    <!-- <AIDrawing /> -->
    <SoldPage/>
    <div style="width: 100%;height: 50px"></div>
    <FooterPage/>
  </div>
</template>

<style scoped>
@import "Home.scss";
</style>