<template>
  <div class="topic">
    {{ topic }}
  </div>
</template>

<script>
export default {
  props: {
    topic: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.topic {
  padding: 0.5rem 0.7rem;
  color: #63e99f;
  background-color: #153c27;
  border-radius: 10px;
  display: inline-block;
}
</style>