import { reactive, onMounted, onUnmounted } from "vue";

export default function useMouse() {
  const position = reactive({
    x: undefined,
    y: undefined
  });

  function print(e) {
    position.x = e.x;
    position.y = e.y;
  }


  onMounted(() => {
    document.querySelector("body").addEventListener("click", print);
  });

  onUnmounted(() => {
    document.querySelector("body").removeEventListener("click", print);
  });

  return {
    position
  };
}