<template>
  <div
    class="toggle"
    @click="toggle"
    :style="{
      backgroundColor: on ? 'green' : 'gray',
    }"
  ></div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  on: Boolean,
});
const emit = defineEmits(["update:on"]);

function toggle() {
  emit("update:on", !props.on);
}
</script>

<style scoped>
.toggle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out background-color;
}
</style>