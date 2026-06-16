

<template>
<div class="container w-1/2 h-32 mt-4 flex gap-4 m-auto">
   <!-- product 1  -->
  <ProductCard :isLiked="true">
  <template #badge>
<span class="bg-green-500 text-white px-2 py-1 rounded">New</span>
  </template>

  <template #default="{liked}">
    <h2 class="text-xl font-bold">iPhone 17</h2>
    <p>Latest Apple smartphone.</p>
  <span v-if="liked">hart</span>
  </template>

  <template #actions>
    <button class="bg-blue-500 text-white px-3 py-1 rounded">Add to card</button>
    <button class="bg-gray-500 text-white px-3 py-1 rounded">Whishlist</button>
  </template>

  </ProductCard>

  <!-- Product 2  -->
   <ProductCard :isLiked="false">
    <template #badge>
      <span class="bg-red-500 text-white px-2 py-1 rounded">Sale</span>
    </template>

    <template #default="{liked}">
      <h2 class="text-xl font-bold">MacBook Pro</h2>
      <p>Powerful laptop for developer.</p>
      <span v-if="liked">Hard</span>
    </template>

    <template #actions>
    <button class="bg-blue-500 text-white px-3 py-1 rounded">Add to card</button>
    <button class="bg-gray-500 text-white px-3 py-1 rounded">Whishlist</button>
  </template>

   </ProductCard>

     <!-- Product 3 -->
  <ProductCard :isLiked="true">

    <template #badge>
      <span class="bg-purple-500 text-white px-2 py-1 rounded">
        HOT
      </span>
    </template>

    <template #default="{ liked }">
      <h2 class="text-xl font-bold">
        AirPods Pro
      </h2>

      <p>Wireless earbuds with noise cancellation.</p>

      <span v-if="liked">Hard</span>
    </template>

    <template #actions>
      <button class="bg-blue-500 text-white px-3 py-1 rounded">
        Add to Cart
      </button>

      <button class="bg-gray-500 text-white px-3 py-1 rounded">
        Wishlist
      </button>
    </template>

  </ProductCard>
</div>
</template>

<script setup>
import ProductCard from './components/ProductCard.vue';
</script>
