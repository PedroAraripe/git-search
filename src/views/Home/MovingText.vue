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
      position: absolute;
    z-index: 0;
    min-height: fit-content;
    transform: rotate(-20deg);
    min-width: fit-content;
    height: 150vh;
    width: 150vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  @media (min-width: 768px) {
    transform: rotate(
-10deg
);
  }
}
</style>
