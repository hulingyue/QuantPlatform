<template>
    <el-header><HeaderView></HeaderView></el-header>
    <el-main></el-main>
    <el-footer><FooterView></FooterView></el-footer>
</template>

<script setup lang="ts">
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'

document.title = "ARTrade量化交易平台"
</script>