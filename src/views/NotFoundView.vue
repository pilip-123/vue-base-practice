<template>
  <section class="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
    <h1 class="text-2xl font-bold text-gray-900">Page not found</h1>
    <p class="mt-2 text-sm text-gray-600">
      The URL does not match any page in CineCatalog.
    </p>

    <router-link
      to="/"
      class="mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
    >
      Go Home
    </router-link>
  </section>
</template>

