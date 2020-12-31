<template>
  <article class='py-3'>
    <h1
      class='mt-2 mb-8 block text-3xl text-center leading-8 font-extrabold tracking-wider text-indigo-600 sm:text-4xl'>
      Articles
    </h1>
    <ul class='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <nuxt-link
        v-for='post in posts'
        :to='`/posts/${post.slug}`'
        :key='post.slug'>
        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
          <div class='flex-1 flex flex-col p-8'>
            <img v-if='post.img' :src='post.img' :alt='post.alt' class='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full'/>
            <img v-else src='../../static/306899474.jpg' :alt='post.title' class='w-32 h-32 flex-shrink-0 mx-auto bg-white rounded-full' />
            <h3 class='mt-6 text-gray-900 text-sm font-medium'>{{ post.title }}</h3>
            <dl class='mt-1 flex-grow flex flex-col justify-between'>
              <dt class='sr-only'>{{ post.title }}</dt>
              <dd class='text-gray-500 text-sm h-16 overflow-hidden'>{{ post.description }}</dd>
              <dt class='sr-only'>{{ post.description }}</dt>
              <dd v-if='post.tags' class='mt-3'>
                <span v-for='tag in post.tags' class='mx-1 px-2 py-1 text-indigo-400 text-xs font-medium bg-indigo-50 rounded-full'>{{ tag
                  }}</span>
              </dd>
              <dd v-else class='mt-3'>&nbsp</dd>
              <dd class='text-gray-500 text-sm mt-3'>{{ post.date }}</dd>
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
