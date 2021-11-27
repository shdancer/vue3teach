<template>
  <h1>展示Axios</h1>
  <div v-if="!loading">{{ students }}</div>
  <div v-else>加载中</div>
  <br />
  <input type="text" v-model="form.name.value" />
  <button @click="fetchStudents">搜索</button>
</template>

<script setup>
import useFetchStudents from "@/api/useFetchStudents";

const { students, loading, form, fetchStudents } = useFetchStudents();
</script>