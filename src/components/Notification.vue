<template>
  <div class="notification">
    <span class="count">{{ count }}</span>
    <span>
      <img src="/images/notifications.svg" alt="Notifications">
    </span>
  </div>
</template>

<script>
export default {
  name: "UserMenu",

  data() {
    return {
      count: 4
    };
  }
};
</script>

<style scoped lang="scss">
.notification {
  margin-right: 30px;
  transform: translateY(3px);
  img {
    width: 26px;
    height: 26px;
  }
}

.count {
  display: inline-block;
  background: #14c4fe;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 10px;
  color: #ffffff;
  transform: translateY(-100%) translateX(185%);
  border-radius: 100%;
  padding: 3px 6px;
  span {
    margin: 0;
  }
}
</style>
