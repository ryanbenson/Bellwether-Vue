<template>
  <li class="search-term" v-on:click="$emit('remove')">{{term}}</li>
</template>

<script>
export default {
  name: "SearchTerm",
  props: {
    term: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.search-term {
  display: inline-block;
  position: relative;
  background-color: #efefef;
  border-radius: 50px;
  padding: 12px 36px 12px 12px;
  margin: 0 12px 12px 0;
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 13px;
    background-image: url(/images/delete.svg);
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
