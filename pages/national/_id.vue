<template>
  <section class="card" v-if="branch">
    <h1 class="card__name">{{ branch.name }}</h1>
    <p class="card__info">{{ branch.info }}</p>
  </section>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    name: "branch-info",
    computed: {
      ...mapState(["branch"])
    }
  };
</script>
<style>
</style>
