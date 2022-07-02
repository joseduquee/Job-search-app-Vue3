<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="
          flex flex-nowrap
          h-full
          px-8
          mx-auto
          border-b border-solid border-brand-gray-1
        "
      >
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="item in menuItems"
              :key="item"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center h-full ml-auto">
          <ProfileImage 
            v-if="isLoggedIn" 
            data-test="profile-image"
            @click="handleLogin" 
          />
          <ActionButton 
            v-else 
            data-test="login-button" 
            @click="handleLogin"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import { ref } from "vue";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  setup() {
    
    const isLoggedIn = ref(false);

    return {
      company: "Leax IT Careers",
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Leax IT",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn,

      //Methods
      handleLogin: () => (isLoggedIn.value = !isLoggedIn.value),
    };
  },
};
</script>

