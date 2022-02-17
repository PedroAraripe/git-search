<template>
  <section>
    <aside>developers login names here moving</aside>
    <main>
      <form @submit.prevent="setUser(searchInput)">
        <h1>Search for a git login name</h1>
        <input
          v-model="search"
          id="searchInput"
          name="searchInput"
          type="text"
          required
        />
        <button>Search</button>
      </form>
    </main>
  </section>
</template>
<script>
export default {
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
  display: grid;
  grid-template-columns: 50vw 50vw;
  min-height: 100vh;
  background-color: rgb(10, 10, 10);

  & > * {
    padding: 1rem;
  }

  & main {
    background-color: #272a37;
  }

  & aside {
    background-color: black;
    color: white;
  }
}

form {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  & > h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1.3rem;
  }

  & > input {
    height: 3rem;
    width: 50%;
    max-width: 400px;

    padding: 1rem;
    margin-bottom: 2.5rem;

    border: none;
    outline: none;
    border-radius: 10px;
    background-color: #323644;
    color: ghostwhite;
  }

  & > button {
    min-width: 150px;

    padding: 1rem 2rem;
    font-size: 1rem;

    font-weight: bold;

    cursor: pointer;

    background-color: #1d90f5;
    color: ghostwhite;
    border: none;
    border-radius: 20px;
  }
}
</style>
