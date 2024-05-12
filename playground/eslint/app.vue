<script setup lang="ts">
const n = () => {
  return 1;
};
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
  <div>
    {{ n() }}
  </div>
</template>
