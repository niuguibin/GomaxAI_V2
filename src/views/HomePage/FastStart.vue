<script setup lang="ts">
import { ref } from "vue";
import ScrollContain from "@/components/ScrollSlide/ScrollContain.vue";
import ScrollSlide from "@/components/ScrollSlide/ScrollSlide.vue";

const img_url = ref([
    { id: 1, src: '/src/assets/img/fast1.jpg' },
    { id: 2, src: '/src/assets/img/fast2.jpg' },
    { id: 3, src: '/src/assets/img/fast3.jpg' }
])
</script>

<template>
    <div class="fast-start">
        <div class="fast-carousel-container">
            <div class="fast-title">
                <p>
                    TEST TEST TEST
                    <br>
                    QUICK START
                </p>
            </div>
            <div class="fast-scroll">
                <ScrollSlide :autoplay="true" :speed="1" :behave="true">
                    <ScrollContain v-for="item in img_url" :key="item.id">
                        <img :src="item.src" alt="" loading="lazy" class="carousel-img" style="height: 400px;">
                    </ScrollContain>
                </ScrollSlide>
            </div>
        </div>

        <div class="fast-img-container">
            <div class="fast-img-wrapper">
                <img :src=img_url[0].src alt="" loading="lazy" class="display-img">
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "./Home.scss";
</style>