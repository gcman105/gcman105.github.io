<template>
  <article class='py-3'>
    <h1
      class='block mt-2 mb-8 text-3xl font-extrabold tracking-wider text-center text-indigo-600 leading-8 sm:text-4xl'>
      Articles
    </h1>
    <ul class='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <nuxt-link
        v-for='post in posts'
        :to='`/posts/${post.slug}`'
        :key='post.slug'>
        <li class='flex flex-col text-center bg-white rounded-lg shadow col-span-1 divide-y divide-gray-200'>
          <div class='flex flex-col flex-1 p-8'>
            <img v-if='post.img' :src='post.img' :alt='post.alt' class='flex-shrink-0 w-32 h-32 mx-auto bg-black rounded-full'/>
            <img v-else src='../../static/306899474.jpg' :alt='post.title' class='flex-shrink-0 w-32 h-32 mx-auto bg-white rounded-full' />
            <h3 class='h-12 mt-6 overflow-hidden text-sm font-medium text-gray-900'>{{ post.title }}</h3>
            <dl class='flex flex-col justify-between flex-grow mt-1'>
              <dt class='sr-only'>{{ post.title }}</dt>
              <dd class='h-16 overflow-hidden text-sm text-gray-500'>{{ post.description }}</dd>
              <dt class='sr-only'>{{ post.description }}</dt>
              <dd v-if='post.tags' class='h-12 mt-3 overflow-hidden'>
                <span v-for='tag in post.tags' class='px-2 py-1 mx-1 text-xs font-medium text-indigo-400 rounded-full bg-indigo-50'>{{ tag
                  }}</span>
              </dd>
              <dd v-else class='mt-3'>&nbsp</dd>
              <dd class='mt-3 text-sm text-gray-500'>{{ post.date }}</dd>
            </dl>
          </div>
        </li>
      </nuxt-link>
    </ul>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, $dayjs }) {
    const posts = await $content('posts')
      .only(['title', 'slug', 'date', 'description', 'img', 'alt', 'tags'])
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style scoped>

</style>
