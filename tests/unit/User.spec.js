import { shallowMount, mount } from "@vue/test-utils";
import User from "@/components/User.vue";
global.fetch = require("jest-fetch-mock");

describe("User.vue", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("renders the notifications", () => {
    const wrapper = mount(User);
    expect(wrapper.contains(".notification")).toBeTruthy();
  });

  it("renders the avatar", () => {
    const data = {
      name: "Ryan Benson",
      email: "benson.ryan@gmail.com",
      photo:
        "https://pbs.twimg.com/profile_images/534763729364078592/znp0-JQv_400x400.jpeg",
      position: "Senior UI Engineer"
    };
    const expectedBackground = `background-image: url(${data.photo});`;

    fetch.mockResponseOnce(JSON.stringify(data));

    const wrapper = mount(User);
    wrapper.setData(data);

    expect(wrapper.contains(".avatar")).toBeTruthy();
    expect(wrapper.find(".avatar").attributes("style")).toBe(
      expectedBackground
    );
  });

  it("renders the user menu", () => {
    const wrapper = mount(User);
    expect(wrapper.contains(".user-menu")).toBeTruthy();
  });
});
