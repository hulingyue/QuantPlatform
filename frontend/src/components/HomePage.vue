<template>
    <el-header><HeaderView></HeaderView></el-header>
    <el-main><StockView></StockView></el-main>
    <el-footer><FooterView></FooterView></el-footer>
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
import StockView from './StockView.vue'

document.title = "ARTrade量化交易平台"
</script>