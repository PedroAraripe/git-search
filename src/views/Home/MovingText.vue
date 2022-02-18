<template>
  <div class="wrapper-mv-text">
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
    <MovingLine class="mv-text" :names="names" />
  </div>
</template>
<script>
import MovingLine from "./MovingLine.vue";

export default {
  components: {
    MovingLine,
  },
  data() {
    return {
      names: [
        "PedroAraripe",
        "johnleider",
        "KaelWD",
        "MajesticPotatoe",
        "jacekkarczmarczyk",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper-mv-text {
  width: 100%;
  height: 100%;

  @media (max-width: 767.97px) {
    transform: rotate(-20deg);
  }
}
</style>
