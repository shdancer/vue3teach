<template>
  <div class="adv">
    <Hello />
    <hr />
    <h1>涵涵做pizza(父组件传参)</h1>
    <div class="pizzas">
      <Pizza
        v-for="(radius, index) in pizzaRadiuses"
        :key="index"
        :radius="radius"
        @eat="eat(index, $event)"
      />
    </div>
    <Toggle v-model:on="eatMethod" />
    <hr />
    <Restaurant>
      <template #header>
        <h1>涵涵pizza店！童叟无欺！</h1>
      </template>
      <Pizza :radius="80"></Pizza>
      <Pizza :radius="100"></Pizza>
      <Pizza :radius="50"></Pizza>
    </Restaurant>
    <hr />
    {{ `你的鼠标点击了(${position.x},${position.y})` }}
  </div>
</template>

<script setup>
import Hello from "@/components/Hello.vue";
import Pizza from "@/components/Pizza.vue";
import Toggle from "@/components/Toggle.vue";
import Restaurant from "@/components/Restaurant.vue";
import useMouse from "@/api/useMouse";
import { reactive, ref } from "vue";

const pizzaRadiuses = reactive([100, 120, 80, 30]);
const eatMethod = ref(false);
const { position } = useMouse();

function eat(index, amout) {
  if (eatMethod.value) pizzaRadiuses[index] -= amout;
  else pizzaRadiuses[index] /= 2;
  if (pizzaRadiuses[index] <= 0) pizzaRadiuses[index] = 0;
}
</script>

<style scoped>
.pizzas {
  display: flex;
  justify-content: center;
}

.adv {
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  width: 100%;
}
</style>