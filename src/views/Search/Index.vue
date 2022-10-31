<template>
  <div class="search-page">
    <div v-if="!user" class="no-user">
      <div>Sorry ! User not found.</div>
      <br />
      <div>Try again.</div>
    </div>

    <UserInfos v-if="user" :user="user" />

    <div v-if="userRepos" class="repos">
      <div v-for="repo in slicedRepos" :key="repo.id">
        <ProjectCard :project="repo" />
      </div>

      <div class="pagination">
        <div class="wrapper-pages">
          <div v-if="isShowingBeforeDots">
            <button class="page" @click="currentPage = 0">1</button>
          </div>

          <div v-if="isShowingBeforeDots">...</div>

          <button
            class="page"
            v-for="(_, index) in pagesInMiddleShowing"
            :key="index"
            :class="{
              'page-selected': isShowingBeforeDots
                ? index === 2
                : index === currentPage,
            }"
            @click="() => clickPageHandler(index)"
          >
            {{ isShowingBeforeDots ? index + currentPage - 1 : index + 1 }}
          </button>

          <div v-if="isShowingAfterDots">...</div>
          <div v-if="isShowingAfterDots">
            <button class="page" @click="currentPage = totalPages - 1">
              {{ totalPages }}
            </button>
          </div>
        </div>
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
      currentPage: 0,
      projectsPerPage: 7,
    };
  },
  mounted() {
    if (!this.user && this.$route.query.name) {
      this.$store.dispatch("fetchUser", this.$route.query.name);
    }
  },
  methods: {
    clickPageHandler(index) {
      if (this.isShowingBeforeDots) {
        this.currentPage = this.currentPage + (index - 2);
      } else {
        this.currentPage = index;
      }
    },
  },
  computed: {
    isShowingBeforeDots() {
      return this.currentPage > 2;
    },
    isShowingAfterDots() {
      return (
        this.totalPages > this.pagesLimitMiddle &&
        this.currentPage + 4 <= this.totalPages
      );
    },
    totalPages() {
      return Math.ceil(this.userRepos.length / this.projectsPerPage);
    },
    pagesLimitMiddle() {
      return 5;
    },
    pagesInMiddleShowing() {
      if (
        this.totalPages >= this.pagesLimitMiddle &&
        this.currentPage + 3 > this.totalPages
      ) {
        return this.totalPages - this.currentPage + 2;
      } else if (this.totalPages > this.pagesLimitMiddle) {
        return this.pagesLimitMiddle;
      } else {
        return this.totalPages;
      }
    },
    slicedRepos() {
      return this.userRepos.slice(
        this.firstSlice,
        this.firstSlice + this.projectsPerPage
      );
    },
    firstSlice() {
      return this.currentPage * this.projectsPerPage;
    },
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
.wrapper-pages {
  display: flex;
  align-items: end;

  & > :not(:first-child) {
    margin-left: 1rem;
  }

  .page {
    background: transparent;
    color: #63e99f;
    border: 1px solid #63e99f;
    border-radius: 50%;

    width: 2.8rem;
    height: 2.8rem;

    transition: all 0.3s;

    &:hover {
      cursor: pointer;
    }

    &.page-selected,
    &:hover {
      color: black;
      background-color: #63e99f;
      border: 1px solid black;
    }
  }
}

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

  & .no-user {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #63e99f;
    font-size: 20px;
  }
}
</style>
