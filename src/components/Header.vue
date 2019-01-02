<template>
  <header>
    <div class="logo">
      <img src="images/traackr.svg">
    </div>
    <User/>
  </header>
</template>

<script>
import User from "@/components/User.vue";

export default {
  name: "Header",
  components: {
    User
  }
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  padding: 8px;
  background-color: #ffffff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
}

.logo {
  border-radius: 50%;
  width: 32px;
  height: 32px;
}
</style>
