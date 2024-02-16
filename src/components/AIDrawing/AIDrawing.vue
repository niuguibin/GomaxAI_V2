<script setup>

</script>

<template>
  <div class="background">
    <div class="painting" v-for="item in 12" :key="item">
      <div class="picture">
        <img src="../../assets/img/schooltest.jpg" alt="" loading="lazy">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "Drawing.css";
</style>