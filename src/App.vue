
 <template>
  <nav class=" bg-green-500 w-1/2 h-20 mt-4 m-auto flex justify-center items-center gap-2 font-blod text-lg text-white">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>

  <router-view />
</template>
<script setup>
import router from './components/Routers/route';
</script>
