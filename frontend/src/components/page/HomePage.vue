<template>
    <el-header><HeaderView></HeaderView></el-header>
    <el-main>
        <HomepageView></HomepageView>
    </el-main>
    <el-footer><FooterView></FooterView></el-footer>
</template>

<script setup lang="ts">
import HeaderView from '../part/HeaderView.vue'
import FooterView from '../part/FooterView.vue'
import HomepageView from '../part/HomepageView.vue'

document.title = "ARTrade量化交易平台"
</script>