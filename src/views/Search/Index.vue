<template>
  <div class="search-page">
    <LeftInfos v-if="user" :user="user" />
    <div>
      <div v-if="user">
        <div v-for="repo in userRepos" :key="repo.id">
          <ProjectCard :project="repo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import LeftInfos from "./components/LeftInfos.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  components: {
    LeftInfos,
    ProjectCard,
  },
  data() {
    return {
      errors: false,
    };
  },
  mounted() {
    if (!this.user && this.$route.query.name) {
      this.$store.dispatch("fetchUser", this.$route.query.name);
    }

    this.getUserRepos();
  },
  methods: {
    getUserRepos() {
      axios
        .get(this.user.repos_url)
        .then((data) => this.$store.commit("setUserRepos", data.data));
    },
  },
  computed: {
    userNameShowing() {
      return this.user.name ?? this.user.login;
    },
    user() {
      return this.$store.state.user;
    },
    userRepos() {
      return this.$store.state.userRepos;
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
