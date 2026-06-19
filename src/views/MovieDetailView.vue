<template>
  <section v-if="movie" class="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
    <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <button
          type="button"
          class="text-sm font-medium text-indigo-700 hover:text-indigo-800"
          @click="goBack"
        >
          ← Back to all movies
        </button>

        <h1 class="mt-2 text-2xl font-bold text-gray-900">{{ movie.title }}</h1>
        <p class="mt-1 text-sm text-gray-600">{{ movie.year }} • {{ movie.genre }}</p>
      </div>

      <div class="flex items-center gap-2">
        <router-link
          :to="{ name: 'movie-overview', params: { id: movie.id } }"
          class="rounded-xl px-3 py-2 text-sm font-medium shadow-sm transition"
          :class="linkClass('overview')"
        >
          Overview
        </router-link>
        <router-link
          :to="{ name: 'movie-cast', params: { id: movie.id } }"
          class="rounded-xl px-3 py-2 text-sm font-medium shadow-sm transition"
          :class="linkClass('cast')"
        >
          Cast
        </router-link>
      </div>
    </div>

    <div class="rounded-xl border border-gray-200 bg-white p-4">
      <router-view :movie="movie" />
    </div>
  </section>

  <section v-else class="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
    <h1 class="text-xl font-bold text-gray-900">Movie not found</h1>
    <p class="mt-2 text-gray-700 text-sm">The requested movie does not exist.</p>
    <router-link
      to="/movies"
      class="mt-4 inline-block rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
    >
      Back to Movies
    </router-link>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { movies } from "../data/movies";

const route = useRoute();
const router = useRouter();

const movie = computed(() => {
  const id = Number(route.params.id);
  return movies.find((m) => m.id === id) || null;
});

function goBack() {
  router.push({ name: "movies" });
}

function linkClass(tab) {
  const child = route.name;
  if (!child) return "bg-indigo-50 text-indigo-700 border border-indigo-200";
  const activeOverview = tab === "overview" && child === "movie-overview";
  const activeCast = tab === "cast" && child === "movie-cast";

  if (activeOverview || activeCast) {
    return "bg-indigo-600 text-white border border-indigo-600";
  }

  return "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100";
}
</script>

