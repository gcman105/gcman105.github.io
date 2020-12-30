<template>
  <article>
    <h1 class="text-3xl text-blue-600">{{ post.title }}</h1>
    <nuxt-content :document='post' />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return {
      post
    }
  }
}

</script>

<style scoped>

</style>
