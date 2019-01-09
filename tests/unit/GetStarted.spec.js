import { mount } from "@vue/test-utils";
import GetStarted from "@/components/GetStarted.vue";

describe("GetStarted.vue", () => {
  it("displays the get started message", () => {
    const wrapper = mount(GetStarted);
    expect(wrapper.contains("img")).toBeTruthy();
  });
});
