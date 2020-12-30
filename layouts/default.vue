<template>
  <div>
    <Header />
    <main class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  components: { Footer, Header }
}
</script>

<style>

</style>

