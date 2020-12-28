<template>
  <div>
    <main class="lg:relative">
      <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl">
            <span class="block l:inline">gcman105 = Gary C. </span>
            <span class="block text-indigo-600 xl:inline">online, work & play</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            &nbsp;
          </p>
        </div>
      </div>
      <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img class="absolute inset-0 w-full h-full object-cover"
             src="../assets/GaryCheeseman.jpg" height="1920" width="1920" alt="Gary C."/>
        <Buymeacoffee />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Buymeacoffee from '~/components/Buymeacoffee.vue'

export default Vue.extend({
  components: { Buymeacoffee }
})
</script>

<style>

</style>
