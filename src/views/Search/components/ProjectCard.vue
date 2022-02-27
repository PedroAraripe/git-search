<template>
  <div class="wrapper-card-project">
    <a class="title" :href="projectUrl" target="_blank" rel="noreferrer">
      {{ project.name }}
    </a>
    <p v-if="project.description" class="description">
      {{ project.description }}
    </p>
    <div v-if="project.topics.length > 0" class="topics">
      <Topic v-for="(topic, i) in project.topics" :key="i" :topic="topic" />
    </div>
  </div>
</template>

<script>
import Topic from "./Topic.vue";

export default {
  props: {
    project: {
      required: true,
      type: Object,
    },
  },
  components: {
    Topic,
  },
  computed: {
    projectUrl() {
      return this.project.homepage?.length
        ? this.project.homepage
        : this.project.html_url;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper-card-project {
  width: 100%;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  & .title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #63e99f;
    margin: 0;
  }

  & .description {
    font-size: 0.9rem;
  }

  & .topics {
    font-size: 0.9rem;
    /* display: flex; */
    padding-top: 1.1rem;

    & > :not(:last-child) {
      margin-right: 1rem;

      @media (max-width: 767.97px) {
        margin-bottom: 0.3rem;
      }
    }
  }
}
</style>
