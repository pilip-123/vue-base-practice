<template>
  <section class="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Watchlist</h1>
        <p class="mt-2 text-sm text-gray-600">
          Only visible to logged-in users.
        </p>
      </div>

      <button
        class="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
        type="button"
        @click="toggleAuth"
      >
        Log out
      </button>
    </div>

    <div class="mt-6">
      <p class="text-sm text-gray-700">
        (Demo) No backend — this page exists to practice navigation guards.
      </p>
    </div>
  </section>
</template>

<script setup>
import { auth } from "../auth";
import { useRouter } from "vue-router";

const router = useRouter();

function toggleAuth() {
  auth.isLoggedIn = false;
  router.push({ name: "home" });
}
</script>


