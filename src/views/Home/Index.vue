<template>
  <section>
    <form @submit.prevent="sendToSearchPage">
      <label for="searchInput" class="logo"> git search </label>
      <input
        v-model="search"
        id="searchInput"
        name="searchInput"
        type="text"
        required
      />
      <button>Pesquisar</button>
    </form>
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
    sendToSearchPage() {
      this.$router.push({
        name: "search",
        query: {
          name: this.search,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: black;

  & .logo {
    font-size: 3rem;
  }
}
</style>