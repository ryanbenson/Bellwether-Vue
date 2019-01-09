<template>
  <div class="search">
    <ErrorMessage v-if="error === true" :message="errorMessage"/>

    <form v-on:submit.prevent="onSubmit">
      <input type="text" name="query" placeholder="Search for..." v-model="query">
      <button type="submit" :disabled="searching">Search{{searching ? 'ing...' : ''}}</button>
    </form>

    <GetStarted v-if="!hasTerms"/>
    <ul class="terms-wrap" v-else>
      <SearchTerm v-for="(term, i) in terms" :key="i" :term="term" v-on:remove="removeTerm(i)"></SearchTerm>
    </ul>
  </div>
</template>

<script>
import { isEmpty, containsBannedChars } from "@/libs/validation";
import ErrorMessage from "@/components/ErrorMessage.vue";
import GetStarted from "@/components/GetStarted.vue";
import SearchTerm from "@/components/SearchTerm.vue";

export default {
  name: "User",
  components: {
    ErrorMessage,
    GetStarted,
    SearchTerm
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
      if (isEmpty(query)) {
        this.showError("Please enter more than spaces");
        return false;
      }

      if (containsBannedChars(query)) {
        this.showError("The following characters are not allowed: (>,<)");
        return false;
      }

      this.addTerm(query);
      this.query = "";
    },

    resetError() {
      this.error = false;
      this.errorMessage = "";
    },

    showError(message) {
      this.error = true;
      this.errorMessage = message;
    },

    addTerm(term) {
      this.terms.push(term);
    },

    removeTerm(i) {
      this.terms.splice(i, 1);
    }
  },

  computed: {
    hasTerms() {
      return this.terms.length > 0 ? true : false;
    }
  }
};
</script>

<style scoped lang="scss">
.terms-wrap {
  margin: 0;
  padding: 20px 0 0 0;

  li:last-child {
    margin-right: 0;
  }
}
</style>
