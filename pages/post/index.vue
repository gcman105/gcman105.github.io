<template>
  <article>
    <h1 class="text-3xl text-blue-600">Articles</h1>
    <nuxt-link
      v-for="post in posts"
      :to="`/post/${post.slug}`"
      :key="post.slug"
    >
      {{ post.title }}
    </nuxt-link>
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts')
      .only(["title", "slug"])
      .fetch()
    return {
      posts
    }
  }
}
</script>

<style scoped>

</style>
