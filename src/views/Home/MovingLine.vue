<template>
  <div class="line-wrapper">
    <div class="line1">
      <span v-for="(name, i) in names" :key="i" @click="copyToClipBoard">
        {{ name }}
      </span>
    </div>
    <div class="line2">
      <span v-for="(name, i) in names" :key="i" @click="copyToClipBoard">
        {{ name }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    names: {
      type: Array,
      required: true,
    },
  },
  computed: {
    nameLine() {
      return this.names.join(" ");
    },
  },
  methods: {
    copyToClipBoard(e){
      navigator.clipboard.writeText(e.target.innerText);

      this.$toasted.show("Copied username to clipboard", { 
        theme: "toasted-primary", 
        position: "bottom-left", 
        duration : 2000
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.line-wrapper {
  display: flex;
  position: relative;
  height: fit-content;
  width: 100%;

  & > * {
    display: flex;
    padding-right: 0.5rem;
    white-space: nowrap;
    width: fit-content;
    justify-content: space-around;
    font-size: 1.5rem;

    font-family: "Shippori Antique B1", sans-serif;

    & > :not(:last-child) {
      padding-right: 1rem;
    }

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  & > * > * {
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      color: #63e99f;
      transform: translate(10px, -5px);
    }
  }

  &.reverse {
    & > * > * {
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        color: #63e99f;
        transform: translate(-10px, -5px);
      }
    }

    .line1 {
      animation: loop-animate-reverse 80s linear infinite;
      animation-delay: -40s;
    }

    .line2 {
      position: absolute;
      animation: loop-animate-reverse 80s linear infinite;
      animation-delay: -80s;
    }
  }

  &:not(.reverse) {
    .line1 {
      animation: loop-animate 80s linear infinite;
      animation-delay: -40s;
    }

    .line2 {
      position: absolute;
      animation: loop-animate 80s linear infinite;
      animation-delay: -80s;
    }
  }
}

@keyframes loop-animate {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes loop-animate-reverse {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
