<template>
  <div class="user-profile">
    <Notification/>
    <div class="logo">
      <img src="images/traackr.svg">
    </div>
    <div class="avatar" v-bind:style="{ backgroundImage: 'url(' + photo + ')' }"></div>
    <span>{{ name }}</span>
    <UserMenu/>
  </div>
</template>

<script>
import { getAvatar } from "@/libs/http";
import UserMenu from "@/components/UserMenu.vue";
import Notification from "@/components/Notification.vue";

export default {
  name: "User",
  components: {
    UserMenu,
    Notification
  },

  data() {
    return {
      loading: false,
      name: "",
      email: "",
      photo: "",
      position: ""
    };
  },

  async created() {
    this.loading = true;

    const [avatar] = await getAvatar();
    const { name, email, photo, position } = avatar;
    this.name = name;
    this.email = email;
    this.photo = photo;
    this.position = position;
    this.loading = false;
  }
};
</script>

<style scoped lang="scss">
.user-profile {
  display: flex;
  > span {
    margin: 6px 0 0 8px;
  }
}
.avatar {
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 100%;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.25);
}
</style>
