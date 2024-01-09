<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const count = ref(0)
</script>

<template>
  <button type="button" @click="count++">count is {{ count }}</button>

  <Suspense>
    <template #default>
      <HelloWorld />
    </template>
    <template #fallback>
      <div>Loading ...</div>
    </template>
  </Suspense>
</template>
