<template>
  <div>
    <section class='lg:relative'>
      <div
        class='w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left'
      >
        <div class='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
          <h1
            class='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl'
          >
            <span class='block l:inline'>{{ page.title }}</span>
            <span class='block text-indigo-600 xl:inline'
            >{{ page.subtitle }}</span
            >
          </h1>
          <p
            class='max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'
          >
            &nbsp;{{ page.description }}
          </p>
        </div>
      </div>
      <div
        class='relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'
      >
        <img
          class='absolute inset-0 object-cover w-full h-full'
          src='https://res.cloudinary.com/gcman105/image/fetch/f_auto,q_auto/https://gcman105.com/_nuxt/img/GaryCheeseman.d494e8c.jpg'
          height='1920'
          width='1920'
          alt='Gary C.'
        />
        <Buymeacoffee class='absolute z-10 right-3 bottom-3' />
      </div>
    </section>
    <div class='mx-auto max-w-6xl p-8'>
      <nuxt-content :document='page' />
    </div>
  </div>
</template>

<script>
export default {
  asyncData: async function({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  }
}
</script>

<style></style>
