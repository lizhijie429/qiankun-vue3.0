<template>
  <div class="home">
    <h1>主应用首页</h1>
    <el-button type="primary" @click="getStorageData">
      测试获取storage
    </el-button>
  </div>
</template>
<script setup lang="ts">
import { getStorage } from '@/utils/storage'
const getStorageData = () => {
  const data = getStorage('currentModule')
  console.log('data', data)
}
</script>
<style lang="scss" scoped></style>
