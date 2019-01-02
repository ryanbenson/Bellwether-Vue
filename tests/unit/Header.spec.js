import { shallowMount, mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders the app logo", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.contains(".logo img")).toBeTruthy();
  });

  it("renders the user profile section", () => {
    const wrapper = mount(Header);
    expect(wrapper.contains(".user-profile")).toBeTruthy();
  });
});
