<script setup>

import TopAd from "@/components/TopAD/TopAd.vue";
import AIDrawing from "@/components/AIDrawing/AIDrawing.vue";
import SoldPage from "@/components/SoldClass/SoldPage.vue";
import FooterPage from "@/components/BottomFooter/FooterPage.vue";
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