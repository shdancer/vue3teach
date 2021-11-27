import { ref, reactive, onMounted, toRefs } from "vue";
import axios from "axios";

export default function useFetchStudents() {
  const students = ref([]);
  const loading = ref(false);
  const form = reactive({
    page: 1,
    limit: 5,
    name: undefined
  });
  const total = ref(0);

  async function fetchStudents() {
    loading.value = true;
    try {
      const res = await axios("/api/student", {
        params: {
          page: form.page,
          limit: form.limit,
          name: form.name || undefined
        }
      });
      students.value = res.data.data.list;
      total.value = res.data.data.count;
    } catch (e) {
      alert(e);
    }
    loading.value = false;
  }

  onMounted(async () => {
    await fetchStudents();
  })

  return {
    students,
    loading,
    form: toRefs(form),
    total,
    fetchStudents
  };
}