<template>
  <section class="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm">
    <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 class="text-xl font-bold text-gray-900">Movies</h1>
        <p class="mt-1 text-sm text-gray-600">Total: {{ movies.length }}</p>
      </div>

      <div class="flex items-center gap-2">
        <label class="text-sm font-medium text-gray-700" for="genre">Genre</label>
        <select
          id="genre"
          class="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          :value="selectedGenre"
          @change="onGenreChange"
        >
          <option value="All">All</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="movie in filteredMovies"
        :key="movie.id"
        class="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        :to="{ name: 'movie-detail', params: { id: movie.id } }"
      >
        <h2 class="text-lg font-semibold text-gray-900">{{ movie.title }}</h2>
        <p class="mt-1 text-sm text-gray-600">{{ movie.year }} • {{ movie.genre }}</p>
      </router-link>
    </div>

    <div
      v-if="filteredMovies.length === 0"
      class="mt-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-10 text-center"
    >
      <p class="text-sm text-gray-600">No movies match this genre.</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { movies } from "../data/movies";

const route = useRoute();
const router = useRouter();

const selectedGenre = computed(() => {
  const g = route.query.genre;
  return typeof g === "string" && g.length ? g : "All";
});

const filteredMovies = computed(() => {
  if (selectedGenre.value === "All") return movies;
  return movies.filter((m) => m.genre === selectedGenre.value);
});

function onGenreChange(e) {
  const genre = e.target.value;
  const nextQuery = { ...route.query };

  if (genre === "All") {
    delete nextQuery.genre;
  } else {
    nextQuery.genre = genre;
  }

  router.push({ name: "movies", query: nextQuery });
}
</script>

