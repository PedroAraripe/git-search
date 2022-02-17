<template>
  <div>
    {{ project.name }}
  </div>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
      type: Object,
    },
  },
};
</script>
