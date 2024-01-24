 <template>
    <el-menu 
        :default-active="activeIndex"
        class="header-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect">

        <el-menu-item index="0">
            <img style="height: 60px;" src="/logo.jpg" alt="logo">
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title><h2>品类</h2></template>
            <el-menu-item index="1-1"><el-button text="true">数字货币</el-button></el-menu-item>
            <el-menu-item index="1-2"><el-button text="true">期货</el-button></el-menu-item>
            <el-menu-item index="1-3"><el-button text="true">股票</el-button></el-menu-item>
            <el-menu-item index="1-4"><el-button text="true">现货</el-button></el-menu-item>
        </el-sub-menu>
        <div class="flex-grow"></div>

        <el-switch @click="toggleDark()" v-model="value1" :active-action-icon="Sunny" :inactive-action-icon="Moon"></el-switch>
        <div class="avater">
            <el-avater>未登录</el-avater>
        </div>
    </el-menu>
 </template>

 <script setup lang="ts">
import { ref } from 'vue'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = ref(useDark())
const toggleDark = useToggle(isDark)

const activeIndex = ref('1')
const value1 = ref(true)

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.el-menu {
    width: 100%;
    height: 60px;
}

.el-switch, .avater {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-left: 20px;
}

.avater:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}
</style>