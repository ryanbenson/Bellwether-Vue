import { mount } from "@vue/test-utils";
import Search from "@/components/Search.vue";

describe("Search.vue", () => {
  it("displays the search form", () => {
    const wrapper = mount(Search);
    expect(wrapper.contains("form")).toBeTruthy();
    expect(wrapper.contains("input")).toBeTruthy();
    expect(wrapper.contains("button")).toBeTruthy();
  });

  it("shows an error message when a blank query is given", () => {
    const wrapper = mount(Search);
    wrapper.setData({ query: " " });
    const form = wrapper.find("form");
    form.trigger("submit");

    expect(wrapper.find("message__error")).toBeTruthy();
  });

  it("shows an error message when an invalid query is given", () => {
    const wrapper = mount(Search);
    wrapper.setData({ query: "hi<there>everybody" });
    const form = wrapper.find("form");
    form.trigger("submit");

    expect(wrapper.find("message__error")).toBeTruthy();
  });
});
