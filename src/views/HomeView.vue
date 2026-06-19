<template>
  <section class="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
    <h1 class="text-2xl font-bold text-gray-900">Welcome to CineCatalog</h1>
    <p class="mt-2 text-gray-700">
      Browse movies, open details, explore Overview/Cast tabs, and visit your
      Watchlist.
    </p>
    <div class="mt-4 flex gap-3">
      <router-link
        to="/movies"
        class="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
      >
        Browse Movies
      </router-link>
      <router-link
        to="/watchlist"
        class="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm transition hover:bg-indigo-100"
      >
        Watchlist
      </router-link>
    </div>
  </section>
</template>

