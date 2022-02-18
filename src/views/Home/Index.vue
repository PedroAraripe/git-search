<template>
  <section>
    <main>
      <MovingText class="moving-texts"> </MovingText>
      <CardWrapperLogin class="card-wrapper-login">
        <form @submit.prevent="setUser(searchInput)">
          <h1>Search for a git login name</h1>
          <div>
            <input
              v-model="search"
              id="searchInput"
              name="searchInput"
              type="text"
              required
            />
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
  methods: {
    setUser(val) {
      this.$store.commit("fetchUser", val);
    },
    sendToSearchPage() {
      this.$router.push({
        name: "search",
        query: {
          name: this.search,
        },
      });
    },
    getUserInfo() {
      this.$store
        .dispatch("fetchUser")
        .then(this.sendToSearchPage)
        .catch(() => console.log("Nonexistent account"));
      // .then(this.getUserRepos);
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

  & > h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1.3rem;
  }

  & input {
    height: 3rem;
    width: 80%;

    @media (min-width: 768px) {
      min-width: 300px;
      max-width: 50%;
      margin-right: 2rem;
    }

    padding: 1rem;
    margin-bottom: 2.5rem;

    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #323644;
    color: ghostwhite;
  }

  & button {
    min-width: 150px;

    padding: 1rem 2rem;
    font-size: 1rem;

    font-weight: bold;

    cursor: pointer;

    background-color: #21262d;
    color: #c9d1d9;
    border: 1px solid #f0f6fc1a;
    border-radius: 20px;
  }
}
</style>
