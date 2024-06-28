<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";

const props = defineProps({
    // 是否自动播放
    autoplay: { type: Boolean, default: true },
    // 播放速度 1-10
    speed: { type: Number, default: 1 },
    // 行为 true(鼠标放上去暂停,移出滚动) false(鼠标放上去滚动,移出暂停,必须设置autoplay为false)
    behave: { type: Boolean, default: true }
});

const realSpeed = ref(1);

const timer: Ref<null | NodeJS.Timer> = ref(null);

//判断滚动
const beginScroll = () => {
    const vueScrollWrapDom: HTMLElement | null = document.querySelector(".scroll-wrap");
    const overWidth = Array.from(document.querySelectorAll(".scroll-wrap .scroll-slide"))
        .map(e => e.clientWidth).reduce((a, b) => a + b);
    if (vueScrollWrapDom) {
        timer.value = setInterval(() => {
            const translateXs = vueScrollWrapDom.style.transform.match(/translateX\((.*)px\)/);
            let oldTranslateX = translateXs ? Number(translateXs[1]) : 0;
            if (Math.abs(oldTranslateX) >= (overWidth / 2)) oldTranslateX = 0;
            vueScrollWrapDom.style.transform = `translateX(${oldTranslateX - realSpeed.value}px)`;
        }, 30)
    }
}

const stopScroll = () => {
    if (timer.value) {
        clearInterval(timer.value as any)
    }
}

// 处理播放速度(为防止参数输错做处理)
const handleSpeed = (sped: number) => {
    if (sped < 1) return 1;
    if (sped > 10) return 10;
    return sped;
}

const onMouseEn = () => {
    props.behave ? stopScroll() : beginScroll();
}
const onMouseLe = () => {
    props.behave ? beginScroll() : stopScroll();
}

onMounted(() => {
    realSpeed.value = handleSpeed(props.speed);
    if (props.autoplay) beginScroll();
})

</script>

<template>

    <div class="scroll-container" @mouseenter="onMouseEn" @mouseleave="onMouseLe">
        <ul class="scroll-wrap">
            <slot></slot>
            <slot></slot>
        </ul>
    </div>
</template>

<style scoped>
 @import "./ScrollSlide.scss";
</style>