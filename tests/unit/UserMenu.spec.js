import { shallowMount } from "@vue/test-utils";
import UserMenu from "@/components/UserMenu.vue";

describe("UserMenu.vue", () => {
  it("displays the down arrow for the temporary menu", () => {
    const wrapper = shallowMount(UserMenu);
    expect(wrapper.contains("img")).toBeTruthy();
  });
});
