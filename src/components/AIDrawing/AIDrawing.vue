<script setup>

</script>

<template>
  <div class="background">
    <div class="painting" v-for="item in 12" :key="item">
      <div class="picture">
        <img src="https://static.runoob.com/images/mix/img_mountains_wide.jpg" alt="" loading="lazy">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Drawing.css";
</style>