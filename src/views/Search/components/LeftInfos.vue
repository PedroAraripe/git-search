<template>
  <div class="wrapper-infos">
    <img class="user-img" :src="user.avatar_url" alt="" />
    <div>
      {{ user.login }}
    </div>
    <div>
      {{ user.bio }}
    </div>
    <div>
      {{ user.company }}
    </div>
    <div>
      {{ user.location }}
    </div>
    <div>
      {{ user.followers }}
    </div>
    <div>
      {{ user.public_repos }}
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper-infos {
  position: absolute;
  width: 60%;
  height: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    position: static;
    width: 30vw;
    max-width: 200px;
  }

  background-color: rgb(71, 67, 67);
  padding: 1rem;

  & .user-img {
    border-radius: 5px;
    width: 100%;
  }
}
</style>
