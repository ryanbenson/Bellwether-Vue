<template>
  <div class="app">
    <Header/>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "about",
  components: {
    Header
  }
};
</script>
