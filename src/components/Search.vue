<template>
  <div class="search">
    <ErrorMessage v-if="error === true" :message="errorMessage"/>

    <form v-on:submit.prevent="onSubmit">
      <input type="text" name="query" placeholder="Search for..." v-model="query">
      <button type="submit" :disabled="searching">Search{{searching ? 'ing...' : ''}}</button>
    </form>
  </div>
</template>

<script>
import { isEmpty, containsBannedChars } from "@/libs/validation";
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "User",
  components: {
    ErrorMessage
  },

  data() {
    return {
      searching: false,
      query: "",
      terms: [],
      error: false,
      errorMessage: "",
      influencers: [],
      page_info: {
        current_page: 0,
        has_more: false,
        next_page: 1,
        page_count: 0,
        results_count: 0,
        total_results_count: 0,
        total_results_count_capped: true
      },
      sort: ""
    };
  },

  methods: {
    onSubmit() {
      this.resetError();

      const { query } = this;
      if (isEmpty(query)) this.showError("Please enter more than spaces");
      if (containsBannedChars(query))
        this.showError("The following characters are not allowed: (>,<)");
    },

    resetError() {
      this.error = false;
      this.errorMessage = "";
    },

    showError(message) {
      this.error = true;
      this.errorMessage = message;
      return false;
    }
  }
};
</script>

<style scoped lang="scss">
</style>
