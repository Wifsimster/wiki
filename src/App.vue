<template>
  <div
    class="grid h-screen"
    style="grid-template-columns: auto 1fr; grid-template-rows: auto auto 1fr 1fr;"
  >
    <ComHeader class="row-start-1 row-end-2 col-start-1 col-end-3" />
    <ComSidebar class="row-start-2 row-end-5 col-start-1 col-end-2" />
  </div>
</template>

<script setup>
import ComHeader from './components/ComHeader.vue'
import ComSidebar from './components/ComSidebar.vue'
</script>
