<template>
  <Layout>
    <div class="bg-indigo-900 text-center py-4 lg:px-4 mt-10">
      <div
        class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span
          class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
          >New</span
        >
        <span class="font-semibold mr-2 text-left flex-auto"
          >Get the coolest t-shirts from our brand new store</span
        >
        <svg
          class="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
          />
        </svg>
      </div>
    </div>

    <div
      class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 mt-10"
      role="alert"
    >
      <p class="font-bold">Informational message</p>
      <p class="text-sm">Some additional text to explain said message.</p>
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
    >
      Button
    </button>

    <button
      class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-3"
    >
      Button
    </button>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
