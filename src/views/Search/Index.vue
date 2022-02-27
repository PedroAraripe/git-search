<template>
  <div class="search-page">
    <UserInfos v-if="user" :user="user" />
    <div v-if="userRepos" class="repos">
      <div v-for="repo in userRepos" :key="repo.id">
        <ProjectCard :project="repo" />
      </div>
    </div>
  </div>
</template>
<script>
import UserInfos from "./components/UserInfos.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  components: {
    UserInfos,
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
  
  color: white;
  background-color: #161b22;

  @media (min-width: 992px) {
   display: flex;
  }


  & h1 {
    margin-top: 0;
  }

  & .repos {
    width: 100%;

    & > * {
      border-top: 1px solid #2d3932;
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }
}
</style>
