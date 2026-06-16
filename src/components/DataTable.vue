<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <table class="w-full border-collapse border border-gray-300">
    <thead>
      <tr class="bg-gray-100">
        <th
          v-for="col in columns"
          :key="col.key"
          class="border p-3 text-left"
        >
          <slot
            :name="`${col.key}-header`"
            :column="col"
          >
            {{ col.label }}
          </slot>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
        class="hover:bg-gray-50"
      >
        <td
          v-for="col in columns"
          :key="col.key"
          class="border p-3"
        >
          <slot
            :name="col.key"
            :item="item"
            :value="item[col.key]"
          >
            {{ item[col.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>