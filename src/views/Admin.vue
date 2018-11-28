<template>
  <div class="admin">
    <TopNav />
    <section class="hero is-light is-medium">
      <Netlify />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/TopNav.vue";
import Netlify from "@/components/Netlify.vue";
export default {
  name: "admin",
  components: {
    TopNav, Netlify
  }
};
</script>

