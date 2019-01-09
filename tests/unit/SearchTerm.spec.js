import { mount } from "@vue/test-utils";
import SearchTerm from "@/components/SearchTerm.vue";

describe("SearchTerm.vue", () => {
  it("displays the message", () => {
    const term = "software";
    const wrapper = mount(SearchTerm, {
      propsData: {
        term
      }
    });
    expect(wrapper.text()).toContain(term);
  });
});
