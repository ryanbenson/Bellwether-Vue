import { mount } from "@vue/test-utils";
import Person from "@/components/Person.vue";
const data = require("./searchData.json");

describe("Person.vue", () => {
  it("displays the message", () => {
    const wrapper = mount(Person, {
      propsData: {
        person: { ...data.influencers[0] }
      }
    });
    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper.find(".card__name").exists()).toBeTruthy();
    expect(wrapper.find(".card__title").exists()).toBeTruthy();
    expect(wrapper.find(".card__location").exists()).toBeTruthy();
    expect(wrapper.findAll(".person__stats span").length).toBe(3);

    expect(wrapper.find("img").attributes("src")).toBe(
      data.influencers[0].avatar.large
    );
    expect(wrapper.find(".card__name").text()).toBe(data.influencers[0].name);
    expect(wrapper.find(".card__title").text()).toBe(data.influencers[0].title);
    expect(wrapper.find(".card__location").text()).toBe(
      data.influencers[0].location
    );
  });
});
