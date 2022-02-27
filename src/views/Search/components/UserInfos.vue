<template>
  <div class="wrapper-infos">
    <div class="user-img">
      <img
        height="200"
        width="200"
        class="user-img-mobile"
        :src="user.avatar_url"
        alt=""
      />
      <img
        height="300"
        width="300"
        class="user-img-desktop"
        :src="user.avatar_url"
        alt=""
      />
    </div>
    <div class="infos">
      <h2 class="name">
        {{ user.name }}
      </h2>
      <div class="login mb-c-1">
        {{ user.login }}
      </div>
      <p class="bio mb-c-1">
        {{ user.bio }}
      </p>
      <div class="follows-status mb-c-1 small-c">
        <span>
          {{ user.followers }}
          <span class="light-c-gray">followers</span>
        </span>
        &nbsp;·&nbsp;
        <span>
          {{ user.following }}
          <span class="light-c-gray">following</span>
        </span>
      </div>
      <div class="small-c">
        {{ user.company }}
      </div>
      <div class="small-c">
        {{ user.location }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper-infos {

  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 5rem 0;
  margin-left: 1.5rem;

  @media (min-width: 992px) {
    padding: 2rem 0 2rem 2rem;
    margin-left: 0rem;
    min-height: fit-content;
  }

  & .mb-c-1 {
    margin-bottom: 1rem;
  }

  & .light-c-gray {
    color: #bfbfbf;
  }

  & .small-c {
    font-size: 0.9rem;
  }

  & .user-img {
    & * {
      border-radius: 50%;
    }

    & .user-img-mobile {
      @media (min-width: 992px) {
        display: none;
      }
    }

    & .user-img-desktop {
      display: none;

      @media (min-width: 992px) {
        display: block;
      }
    }
  }

  & .infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & .name {
      font-size: 1.5rem;
      font-weight: 600;
      color: #63e99f;
      margin-bottom: 0.2rem;
    }

    & .login {
      color: #637383;
      font-size: 1.2rem;
    }

    & .bio {
      max-width: 300px;
      text-align: left;

      margin-top: 0;
    }

    & .follows-status {
      display: flex;
    }
  }
}
</style>
