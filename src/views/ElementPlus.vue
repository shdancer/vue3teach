<template>
  <el-button type="primary">测试</el-button>
  <br />
  <el-input v-model="name" clearable />
  <el-button type="primary" @click="fetchStudents">搜索</el-button>
  <el-table v-loading="loading" :data="students">
    <el-table-column prop="name" lable="姓名" />
    <el-table-column prop="class" lable="班级" />
    <el-table-column prop="mainDep" lable="主选部门" />
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :total="total"
    v-model:currentPage="page"
    @current-change="fetchStudents"
  ></el-pagination>
</template>

<script setup>
import useFetchStudents from "@/api/useFetchStudents";
import { reactive, ref, toRef } from "vue";

const { students, form, loading, total, fetchStudents } = useFetchStudents();
const { page, limit, name } = form;
</script>