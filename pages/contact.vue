<template>
  <main class='lg:relative prose lg:prose-xl'>
    <h2>{{ page.title }}</h2>
    <nuxt-content :document='page' />
  </main>
</template>

<script lang='js'>
export default {
  asyncData: async function({ $content }) {
    const page = await $content('contact').fetch()

    return {
      page
    }
  }
}
</script>

<style scoped>

</style>
