<script setup>
import DataTable from "./components/DataTable.vue";

const users = [
  {
    id: 1,
    name: "chavy yom",
    email: "chavy@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "rida yom",
    email: "rida@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "pilip yom",
    email: "pilip@gmail.com",
    status: "active",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "actions",
    label: "Actions",
  },
];
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">
      User Management
    </h1>

    <DataTable
      :items="users"
      :columns="columns"
    >
      <!-- Custom Name Column -->
      <template #name="{ value }">
        <strong>{{ value }}</strong>
      </template>

      <!-- Custom Status Header -->
      <template #status-header="{ column }">
        🔵 {{ column.label }}
      </template>

      <!-- Custom Status Column -->
      <template #status="{ item }">
        <span
          v-if="item.status === 'active'"
          class="bg-green-500 text-white px-2 py-1 rounded"
        >
          Active
        </span>

        <span
          v-else
          class="bg-red-500 text-white px-2 py-1 rounded"
        >
          Inactive
        </span>
      </template>

      <!-- Bonus Actions Column -->
      <template #actions="{ item }">
        <div class="flex gap-2">
          <button
            class="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>

          <button
            class="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </template>
    </DataTable>
  </div>
</template>