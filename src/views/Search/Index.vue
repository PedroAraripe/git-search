<template>
  <div class="search-page">
    <LeftInfos :user="user" />
    <div>
      <h1>This is an Search page</h1>

      <div v-if="user">{{ userNameShowing }}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import LeftInfos from "./components/LeftInfos.vue";

export default {
  components: {
    LeftInfos,
  },
  data() {
    return {
      user: {},
      errors: false,
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      const userGit = this.$route.query.name;
      axios
        .get(`https://api.github.com/users/${userGit}`)
        .then((data) => (this.user = data.data))
        .then(this.getUserRepos)
        .catch(() => (this.errors = true));
    },
    getUserRepos(user) {
      axios.get(user.repos_url).then((data) => (this.userRepos = data.data));
    },
  },
  computed: {
    userNameShowing() {
      return this.user.name ?? this.user.login;
    },
  },
};
</script>
<style lang="scss" scoped>
.search-page {
  min-height: 100vh;
  display: flex;

  color: white;
  background-color: black;

  & h1 {
    margin-top: 0;
  }
}
</style>
