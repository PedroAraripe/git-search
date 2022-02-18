<template>
  <div class="line-wrapper">
    <div class="line1">
      <span v-for="(name, i) in names" :key="i">
        {{name}}
      </span>
    </div>
    <div class="line2">
      <span v-for="(name, i) in names" :key="i">
        {{name}}
      </span>
    </div>
    <!-- <div class="line2">
      {{ names.join(" ") }}
    </div> -->
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
};
</script>
<style lang="scss" scoped>
.line-wrapper {
  display: flex;
  position: relative;
  height: 100px;
  width: 100%;

  & > * {
    display: flex;
    padding-right: .5rem;
    white-space: nowrap;
    width: fit-content;
    justify-content: space-around;
    
    & > :not(:last-child) {
      margin-right: .5rem;
    }
    
    @media (min-width: 768px) {
      width: 100%;
    }
  }
}

.line1 {
  animation: loop-animate 20s linear infinite;
  animation-delay: -10s;
}

.line2 {
  position: absolute;
  animation: loop-animate2 20s linear infinite;
  animation-delay: -20s;
}

@keyframes loop-animate {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes loop-animate2 {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
