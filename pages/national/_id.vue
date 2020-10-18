<template>
  <section class="branch" v-if="branch">
    <h1 class="branch__name">{{ branch.name }}</h1>
    <p class="branch__info">{{ branch.info }}</p>
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
