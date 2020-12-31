<template>
  <header>
    <nav class="bg-gray-800">
      <div class="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
                Heroicon name: menu

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <!-- Icon when menu is open. -->
              <!--
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <a href='/'>
              <img class="block lg:hidden h-8 w-auto"
                   src='../static/gcman105_logo.png' height="500" width="500" aria-hidden="true" alt="gcman105"/>
              <img class="hidden lg:block h-8 w-auto"
                   src='../static/gcman105_logo2.png' height="250" width="1229" aria-hidden="true" alt="gcman105"/>
              </a>
            </div>
            <div class='hidden sm:block sm:ml-6'>
              <div class='flex space-x-4'>
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href='/posts'
                   class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Blog
                </a>
<!--                <a href='#'-->
<!--                   class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Team</a>-->
<!--                <a href='#'-->
<!--                   class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Projects</a>-->
<!--                <a href='#'-->
<!--                   class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Calendar</a>-->
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                       src='../static/GaryCheeseman2018_500X500.jpg' alt="gcman105">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      -->
      <div class="hidden sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a href='/posts'
             class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            Blog
          </a>
<!--          <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>-->
<!--          <a href="#"-->
<!--             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>-->
<!--          <a href="#"-->
<!--             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>-->
<!--          <a href="#"-->
<!--             class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>-->
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">

</style>
