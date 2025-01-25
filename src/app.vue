<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/header.vue";

</script>
<template>
  <Header/>
  <RouterView/>
  <footer>
    <div>
      <nav>
        <RouterLink to="/">login</RouterLink>
      </nav>
    </div>

  </footer>
</template>