<<<<<<< HEAD
<<<<<<< HEAD
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
=======
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

=======
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

>>>>>>> f055b97419aad3308f793723763d211334b31b0e
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
>>>>>>> 79f1500 (Revert "FEAT-1: InicioView.vue CSS")
