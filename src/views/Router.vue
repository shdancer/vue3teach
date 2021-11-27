<template>
  <h1>Router演示页面</h1>
  <button @click="jumpToHome">跳转到首页</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function jumpToHome() {
  router.push("/");
}
</script>