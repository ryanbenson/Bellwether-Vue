import { shallowMount } from "@vue/test-utils";
import Notification from "@/components/Notification.vue";

describe("Notification.vue", () => {
  it("renders the notification icon", () => {
    const wrapper = shallowMount(Notification);
    expect(wrapper.contains("span+span img")).toBeTruthy();
  });

  it("renders the count of notifications", () => {
    const wrapper = shallowMount(Notification);
    expect(wrapper.text()).toContain("4");
  });
});
