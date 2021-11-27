<template>
  <h1>展示Axios</h1>
  {{ students }}
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

let students = ref([]);

async function fetchStudents() {
  try {
    const res = await axios.get("/api/student", {
      params: {
        page: 1,
        limit: 5,
      },
    });
    students = res.data.data.list;
    console.log(res);
  } catch (e) {
    alert(e);
  }
}
onMounted(async () => {
  await fetchStudents();
});
</script>