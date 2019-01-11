import { mount } from "@vue/test-utils";
import Search from "@/components/Search.vue";
import GetStarted from "@/components/GetStarted.vue";
global.fetch = require("jest-fetch-mock");
const sinon = require("sinon");

const data = require("./searchData.json");

describe("Search.vue", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

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
    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(Search);
    const expected = ["software"];
    wrapper.setData({ query: expected[0] });
    const form = wrapper.find("form");
    form.trigger("submit");

    expect(wrapper.vm.terms).toEqual(expected);
  });

  it("adds multiple terms to list of terms", () => {
    fetch.mockResponseOnce(JSON.stringify(data));

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
    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(Search);
    const expected = ["software"];
    const form = wrapper.find("form");

    wrapper.setData({ query: expected[0] });
    form.trigger("submit");

    expect(wrapper.vm.query).toEqual("");
    expect(wrapper.find("input").attributes("value")).toBeFalsy();
  });

  it("displays get started message when there are no terms", () => {
    const wrapper = mount(Search);
    const getStarted = wrapper.find(GetStarted);
    expect(getStarted.is(GetStarted)).toBe(true);
  });

  it("hides display of get started message when there are terms", () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(Search);
    const terms = ["software"];
    const form = wrapper.find("form");

    wrapper.setData({ query: terms[0] });
    form.trigger("submit");
    expect(wrapper.find(".get-started").exists()).toBeFalsy();
  });

  it("shows search terms when submitted", () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(Search);
    const terms = ["software", "green energy"];
    const form = wrapper.find("form");

    wrapper.setData({ query: terms[0] });
    form.trigger("submit");

    wrapper.setData({ query: terms[1] });
    form.trigger("submit");

    expect(wrapper.findAll(".search-term").length).toEqual(terms.length);
  });

  it("removes search terms if you click on a term", () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(Search);
    const terms = ["software"];
    const form = wrapper.find("form");

    wrapper.setData({ query: terms[0] });
    form.trigger("submit");

    const term = wrapper.find(".search-term");
    term.trigger("click");

    expect(wrapper.findAll(".search-term").length).toEqual(0);
  });

  it("removes influencer data when removing all terms", () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(Search);
    const terms = ["software"];
    const form = wrapper.find("form");

    wrapper.setData({ query: terms[0] });
    form.trigger("submit");

    const term = wrapper.find(".search-term");
    term.trigger("click");

    expect(wrapper.vm.$data.influencers.length).toBe(0);
  });

  it("researches influencers when removing a term, but still have a term listed", () => {
    fetch.mockResponses(
      [JSON.stringify(data), { status: 200 }],
      [JSON.stringify(data), { status: 200 }]
    );

    const spy = sinon.spy(Search.methods, "getInfluencers");
    const wrapper = mount(Search);
    const terms = ["software", "green energy"];
    const form = wrapper.find("form");

    wrapper.setData({ query: terms[0] });
    form.trigger("submit");

    wrapper.setData({ query: terms[1] });
    form.trigger("submit");

    const term = wrapper.find(".search-term");
    term.trigger("click");

    expect(spy.called).toBe(true);
  });
});
