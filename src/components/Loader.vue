<template>
  <div>
    <div
      v-for="n in 3"
      :key="n"
      class="dot w-4 h-4 mx-1 rounded-full bg-dark"
    />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Loader',
  });
</script>

<style scoped>
.dot {
  transform: scale(0);
  display: inline-block;
  animation: dotanim 0.8s infinite ease-in-out;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.15s;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes dotanim {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  90% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
}
</style>
