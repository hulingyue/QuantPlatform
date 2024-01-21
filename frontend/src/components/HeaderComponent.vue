<template>
    <div class="menu">
        <a-menu mode="horizontal" :default-selected-keys="['1']">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px', marginButton: '10px'}" disabled>
                <div :style="{ width: '140px', height: '30px', borderRadius: '2px' }">
                    <img :src="require('@/assets/logo.png')" :style="{'max-height': '100%', 'wight': 'auto', 'float': 'left'}" alt="logo">    
                    <h4 :style="{maxHeight: '100%', wight: auto, color: 'var(--color-text-2)'}">{{ title }}</h4>
                </div>
            </a-menu-item>

            <a-menu-item v-for="(item, index) in items" :key="index">{{ item }}</a-menu-item>

            <a-button @click="themeChangeEvent" shape="round">
            <template #icon>
                <icon-sun v-if="themes" />
                <icon-moon-fill v-else />
            </template>
            </a-button>
        </a-menu>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {

    Props: {
        title: String
    },
    
    setup() {
        const themes = ref(true);
        const items = ref(['Home', 'About', 'Services', 'Contact']);

        const themeChangeEvent = () => {
            themes.value = !themes.value;

            if (themes.value) {
                document.body.removeAttribute('arco-theme');
            } else {
                document.body.setAttribute('arco-theme', 'dark')
            }
        };

        return {
            themes,
            items,
            themeChangeEvent
        };
    }
};
</script>

<style scoped>
    .menu {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        background-color: var(--color-neutral-2);
    }
</style>
