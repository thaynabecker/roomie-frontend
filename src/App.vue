<template>
  <template v-if="route.meta.layout === 'blank'">
    <router-view />
  </template>
  <template v-else>
    <DefaultLayout>
      <router-view />
    </DefaultLayout>
  </template>

</template>

<script setup>
import { useRoute } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const route = useRoute();
</script>
