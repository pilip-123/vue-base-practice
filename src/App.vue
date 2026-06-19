<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <div class="mx-auto max-w-6xl px-4 py-8">
      <header class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">CineCatalog</h1>
          <p class="mt-1 text-sm text-gray-600">Hello , welcome to our movie services</p>
        </div>

        <nav class="flex items-center gap-3 text-sm">
          <router-link
            to="/"
            class="rounded-xl px-3 py-2 transition"
            :class="$route.path === '/' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'"
          >
            Home
          </router-link>

          <router-link
            to="/movies"
            class="rounded-xl px-3 py-2 transition"
            :class="$route.path.startsWith('/movies') ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'"
          >
            Movies
          </router-link>

          <router-link
            to="/watchlist"
            class="rounded-xl px-3 py-2 transition"
            :class="$route.path === '/watchlist' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'"
          >
            Watchlist
          </router-link>

          <!-- <button
            type="button"
            class="ml-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-gray-700 transition hover:bg-gray-50"
            @click="toggleAuth"
          >
            {{ auth.isLoggedIn ? 'Log out' : 'Log in' }}
          </button> -->
        </nav>
      </header>

      <router-view />
    </div>
  </div>
</template>

<script setup>
import { auth } from "./auth";

function toggleAuth() {
  auth.isLoggedIn = !auth.isLoggedIn;
}
</script>


