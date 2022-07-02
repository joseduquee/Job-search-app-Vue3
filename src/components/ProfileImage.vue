<template>
  <img
    :src="imageLink"
    class="w-8 h-8 object-contain rounded-3xl"
    alt="profile-image"
  />
</template>

<script>
export default {
  name: 'ProfileImage',
  setup() {
    

    return {
      imageLink: "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
    }
  },
}
</script>