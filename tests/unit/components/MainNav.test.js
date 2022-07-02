import { mount } from "@vue/test-utils";
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  
  it('displays company name', () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch('Leax IT Careers')
  });

  it("display menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navMenuITems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navMenuText = navMenuITems.map(item => item.text());
    expect(navMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Leax IT',
      'How we hire',
      'Students',
      'Jobs'
    ])
  });

  describe("when user is logged out", () => {
    it("prompts user to sign", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.findComponent("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    })
  });

  describe("when user is log in", () => {
    it("displays user pofile picture", async() => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);
      
      const loginButton = wrapper.findComponent("[data-test='login-button']");
      //trigger siempre es asincronico, se mecesita aync/await
      await loginButton.trigger("click");
      
      profileImage = wrapper.findComponent("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);

    })
  });

});
