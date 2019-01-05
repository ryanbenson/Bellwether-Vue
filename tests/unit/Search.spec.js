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

  it("adds term to list of terms with valid query", () => {
    const wrapper = mount(Search);
    const expected = ["software"];
    wrapper.setData({ query: expected[0] });
    const form = wrapper.find("form");
    form.trigger("submit");

    expect(wrapper.vm.terms).toEqual(expected);
  });

  it("adds multiple terms to list of terms", () => {
    const wrapper = mount(Search);
    const expected = ["software", "green", "database"];
    const form = wrapper.find("form");

    expected.forEach(val => {
      wrapper.setData({ query: val });
      form.trigger("submit");
    });

    expect(wrapper.vm.terms).toEqual(expected);
  });

  it("resets form input on valid query submission", () => {
    const wrapper = mount(Search);
    const expected = ["software"];
    const form = wrapper.find("form");

    wrapper.setData({ query: expected[0] });
    form.trigger("submit");

    expect(wrapper.vm.query).toEqual("");
    expect(wrapper.find("input").attributes("value")).toBeFalsy();
  });
});
