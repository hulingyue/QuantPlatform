 <template>
    <el-menu 
        :default-active="activeIndex"
        class="header-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect">

        <el-menu-item index="0">
            <img style="height: 60px;" src="/logo.png" alt="logo">
        </el-menu-item>
        <el-sub-menu index="1">
            <template #title>品类</template>
            <el-menu-item index="1-1">数字货币</el-menu-item>
            <el-menu-item index="1-1">期货</el-menu-item>
            <el-menu-item index="1-1">股票</el-menu-item>
            <el-menu-item index="1-1">现货</el-menu-item>
        </el-sub-menu>
        <div class="flex-grow"></div>

        <div>
            <el-avater>未登录</el-avater>
        </div>
    </el-menu>
 </template>

 <script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')

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
</style>