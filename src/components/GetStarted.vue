<template>
  <div class="get-started">
    <div class="empty__hero">
      <img src="/images/get-started.svg" alt="Get Started">
    </div>
    <p class="empty__content">Search by individual search terms to get started.</p>
    <p>
      Try things such as
      <span>green energy</span> or
      <span>software</span>!
    </p>
  </div>
</template>

<script>
export default {
  name: "GetStarted"
};
</script>

<style scoped lang="scss">
.get-started {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  .empty__hero,
  .empty__content {
    flex: 1 100%;
    text-align: center;
  }
  .empty__hero {
    img {
      width: auto;
      height: 250px;
    }
  }
  p {
    margin: 10px;
  }
  span {
    background-color: #e1d0ea;
    padding: 2px 4px;
    border-radius: 4px;
  }
}
</style>
