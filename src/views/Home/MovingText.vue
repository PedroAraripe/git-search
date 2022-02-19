<template>
  <div class="wrapper-mv-text">
    <MovingLine
      v-for="i in 10"
      :key="i"
      class="mv-text"
      :class="{ reverse: !!(i % 2) }"
      :names="vueContributorsNames"
    />
  </div>
</template>
<script>
import MovingLine from "./MovingLine.vue";

export default {
  components: {
    MovingLine,
  },
  computed: {
    vueContributorsNames() {
      return this.$store.state.vueContributorsNames;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper-mv-text {
  position: absolute;
  z-index: 0;

  height: 150vh;
  width: 150vw;
  min-height: fit-content;
  min-width: fit-content;

  transform: rotate(-20deg);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    transform: rotate(-10deg);
  }
}
</style>
