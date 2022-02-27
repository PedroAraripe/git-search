<template>
  <section>
    <main>
      <MovingText v-if="hasVueContributorsNames" class="moving-texts" />
      <CardWrapperLogin class="card-wrapper-login">
        <form @submit.prevent="fetchUser">
          <h1>Search for a git login name</h1>
          <div class="wrapper-inputs">
            <input v-model="search" type="text" required />
            <button>Search</button>
          </div>
        </form>
      </CardWrapperLogin>
    </main>
  </section>
</template>
<script>
import MovingText from "./MovingText.vue";
import CardWrapperLogin from "./CardWrapperLogin.vue";

export default {
  components: {
    MovingText,
    CardWrapperLogin,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    vueContributorsNames() {
      return this.$store.state.vueContributorsNames;
    },
    hasVueContributorsNames() {
      return this.vueContributorsNames?.length > 0;
    },
  },
  created() {
    this.fetchVueContributors();
  },
  methods: {
    setUser() {
      this.$store.commit("fetchUser", this.search);
    },
    sendToSearchPage() {
      this.$router.push({
        name: "search",
        query: {
          name: this.search,
        },
      });
    },
    fetchUser() {
      this.$store
        .dispatch("fetchUser", this.search)
        .then(this.sendToSearchPage)
        .catch(() => console.log("Nonexistent account"));
      // .then(this.getUserRepos);
    },
    fetchVueContributors() {
      this.$store.dispatch("fetchVueContributors");
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  position: relative;
  overflow: hidden;

  .moving-texts {
    position: absolute;
    z-index: 0;
  }

  .card-wrapper-login {
    z-index: 1;
  }

  min-height: 100vh;
  background-color: rgb(10, 10, 10);

  & main {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    max-width: 100vw;
    overflow: hidden;

    background-color: #272a37;
  }
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  & * {
    font-family: "Vollkorn", serif;
  }

  & > h1 {
    font-size: 2rem;
    color: #aeeac9;
    margin-bottom: 2.3rem;
    text-transform: uppercase;

    @media (min-width: 992px) {
      font-size: 2.5rem;
      margin-bottom: 1.3rem;
    }
  }

  & .wrapper-inputs {
    width: 100%;

    @media (min-width: 992px) {
      display: flex;
    }

    & input {
      width: 80%;

      padding: 1rem;
      margin-bottom: 2.5rem;

      border: 1px solid #aeeac9;
      outline: none;
      border-radius: 10px;
      background-color: #323644;
      color: #aeeac9;

      @media (min-width: 992px) {
        flex-grow: 1;
        min-width: 300px;
        margin-right: 2rem;
        margin-bottom: 0rem;
        font-size: 20px;
      }
    }

    & button {
      min-width: 150px;

      padding: 1rem 2rem;
      font-size: 1rem;

      font-weight: bold;

      cursor: pointer;

      background-color: #21262d;
      color: #63e99f;
      border: 1px solid #63e99f;
      border-radius: 5px;

      transition: all 0.3s;

      @media (min-width: 992px) {
        font-size: 20px;
      }

      &:hover {
        background-color: #2d534a;
        box-shadow: 0 0 30px hsl(215deg 30% 23%);
      }
    }
  }
}
</style>
