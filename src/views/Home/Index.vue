<template>
  <section>
    <main>
      <MovingText v-if="hasVueContributorsNames" class="moving-texts" />
      <CardWrapperLogin class="card-wrapper-login">
        <form @submit.prevent="fetchUser">
          <h1>Search for a git login name</h1>
          <div>
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
    hasVueContributorsNames(){
      return this.vueContributorsNames?.length > 0; 
    }
  },
  created(){
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
        .dispatch("fetchUser",this.search)
        .then(this.sendToSearchPage)
        .catch(() => console.log("Nonexistent account"));
      // .then(this.getUserRepos);
    },
    fetchVueContributors(){
      this.$store.dispatch("fetchVueContributors");
    }
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
    font-size: 2rem;
    color: white;
    margin-bottom: 1.3rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
    }
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
    color: #64ffda;
    border: 1px solid #64ffda;
    border-radius: 5px;
    
    transition: all .3s;

    &:hover {
      background-color: #2d534a;
      box-shadow: 0 0 30px hsl(215deg 30% 23%);
    }
  }
}
</style>
