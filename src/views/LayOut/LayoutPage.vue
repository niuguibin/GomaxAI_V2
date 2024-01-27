<script setup>
import {RouterView} from "vue-router";
import NavigatorPage from "@/components/TopNavigator/NavigatorPage.vue";
</script>

<template>
  <div class="background">
    <NavigatorPage/>
    <RouterView/>
  </div>
</template>

<style scoped>
@import "Layout.css";
</style>