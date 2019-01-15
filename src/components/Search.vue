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

    <div v-if="influencers" class="search__results">
      <Person v-for="(person, i) in influencers" :key="i" :person="person"></Person>
    </div>
  </div>
</template>

<script>
import { isEmpty, containsBannedChars } from "@/libs/validation";
import { getList } from "@/libs/http";
import ErrorMessage from "@/components/ErrorMessage.vue";
import GetStarted from "@/components/GetStarted.vue";
import SearchTerm from "@/components/SearchTerm.vue";
import Person from "@/components/Person.vue";

export default {
  name: "User",
  components: {
    ErrorMessage,
    GetStarted,
    SearchTerm,
    Person
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
      this.getInfluencers();
    },

    async getInfluencers() {
      const data = await getList(this.termsString, 0);
      const { influencers, page_info } = data;
      const updatedInfluencers =
        page_info.current_page === 0
          ? [...influencers]
          : [...this.influencers, ...influencers];

      this.influencers = updatedInfluencers;
      this.page_info = page_info;
    },

    resetInfluenerState() {
      this.influencers = [];
      this.page_info = {
        current_page: 0,
        has_more: false,
        next_page: 1,
        page_count: 0,
        results_count: 0,
        total_results_count: 0,
        total_results_count_capped: true
      };
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
      this.terms.length > 0
        ? this.getInfluencers()
        : this.resetInfluenerState();
    }
  },

  computed: {
    hasTerms() {
      return this.terms.length > 0 ? true : false;
    },
    termsString() {
      const list = this.terms.map(t => (t.includes(" ") ? `"${t}"` : t));
      return list.join(",");
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
.search__results {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}
</style>
