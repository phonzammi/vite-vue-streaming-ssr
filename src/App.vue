<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const count = ref(0)

// We expect Vue to server-side render the entire template first with the
// Suspense's fallback and an interactive button first, and then later to stream
// <script>s that will replace the fallback with the Suspense's default.
// However it seems that instead Vue's renderer hangs on rendering the Suspense,
// finally rendering the entire template with the Suspense's default. The
// fallback is never rendered, and we're not getting an interactive button while
// the renderer is hanging.
// See https://github.com/vikejs/vike/discussions/1318
</script>

<template>
  <Suspense>
    <template #default>
      <HelloWorld />
    </template>
    <template #fallback>
      <div>Loading ...</div>
    </template>
  </Suspense>

  <button type="button" @click="count++">count is {{ count }}</button>
</template>
