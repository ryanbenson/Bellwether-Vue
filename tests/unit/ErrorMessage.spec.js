import { mount } from "@vue/test-utils";
import ErrorMessage from "@/components/ErrorMessage.vue";

describe("ErrorMessage.vue", () => {
  it("displays the message", () => {
    const message = "Please input a valid query";
    const wrapper = mount(ErrorMessage, {
      propsData: {
        message
      }
    });
    expect(wrapper.text()).toContain(message);
  });
});
