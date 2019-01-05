<template>
  <div class="message__error">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  props: {
    message: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.message__error {
  position: relative;
  color: #ffffff;
  background: #de5a51;
  border-radius: 6px;
  padding: 12px 12px 12px 36px;
  margin-bottom: 20px;
  :before {
    content: "";
    background: url(/images/error.svg) no-repeat;
    background-size: cover;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 13px;
    top: 13px;
  }
  p {
    margin: 0;
  }
}
</style>
