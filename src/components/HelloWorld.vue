<script setup lang="ts">
function sleep(milliseconds: number): Promise<void> {
  return new Promise((r) => setTimeout(r, milliseconds))
}

await sleep(4 * 1000)
</script>

<template>
  <div class="card">
    <h1>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </h1>
  </div>
</template>
