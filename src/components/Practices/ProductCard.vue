<template>
    <div class="border -p-4 rounded shadow w-1/2 p-4 relative">
        <!--Name Slot: badge-->
        <div class="absolute top-2 right-2">
            <slot name="badge"></slot>
        </div>

        <!-- Default Slot -->
         <div class="card-body">
            <slot :liked="isLiked"></slot>
         </div>

         <!-- Name Slot: action -->
          <div class="mt-4 flex gap-2">
            <slot name="action"></slot>
          </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isLiked:{
        type: Boolean,
        default: false
    }
});
</script>
