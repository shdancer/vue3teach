<template>
  <h1>演示CompositionApi</h1>
  {{ `你的鼠标点击了(${position.x},${position.y})` }}
</template>

<script setup>
import useMouse from "@/api/useMouse";

const { position } = useMouse();
</script>