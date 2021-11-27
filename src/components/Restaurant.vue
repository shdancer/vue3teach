<template>
  <div class="res">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="table">
      <slot></slot>
    </div>
  </div>
</template>


<style scoped>
.res {
  width: 80%;
  position: relative;
}
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  border: 3px solid red;
}
.table {
  width: 100%;
  display: flex;
  justify-content: center;

  border-bottom: 3px solid brown;
}
</style>