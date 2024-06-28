<script setup lang="ts">
import * as Icons from '@element-plus/icons-vue';
import 'element-plus/es/components/icon/style/css';
import { computed } from 'vue';

const props = defineProps({
    iconType: { type: String, default: '' },
    text: { type: String, default: '' },
    description: { type: String, default: '' },
    onClick: { type: () => { }, default: null },
})

// const emit = defineEmits(["onClick"]);
// const doSth = () => {
//   emit('onClick');
// }

const currentIcon = computed(() => {
    let iconType = props.iconType;
    let icon = null;

    if (iconType !== '' && iconType !== undefined) {
        icon = iconType.replace(iconType[0], iconType[0].toUpperCase())
    }

    return Icons[icon];
})

</script>

<template>
    <div class="enter_btn" @click="props?.onClick">
        <div class="btn_left">
            <div class="btn_title">
                {{ props.text }}
            </div>
            <div class="btn_des">
                {{ props.description }}
            </div>
            <div class="btn_hover">
                <el-icon color="#9270ff" :size="36">
                    <SemiSelect />
                </el-icon>
            </div>
        </div>
        <div class="btn_right">
            <el-icon :size="80">
                <component :is="currentIcon"></component>
            </el-icon>
        </div>
    </div>
</template>

<style scoped>
@import "./EnterButton.css";
</style>