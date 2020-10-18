<template>
  <section class="home">
    <h1 class="home__heading">Political Parties</h1>
    <div class="cards">
      <div
        class="card__container"
        v-for="party in parties"
        :key="party.id"
        @click.prevent="storeBranchInfo(party)"
      >
        <p class="card__name">
          {{ party.name }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
// https://www.smashingmagazine.com/2020/04/getting-started-nuxt/
export default {
  name: "about-nuxt",
  data() {
    return {
      parties: [
        {
          id: "democrate",
          name: "Democrat",
        },
        {
          id: "republican",
          name: "Republican",
        },
        {
          id: "libertarian",
          name: "Libertarian",
        },
        {
          id: "green",
          name: "Green",
        }
      ]
    };
  },
  methods: {
    storeBranchInfo(branch) {
      this.$store.commit("saveInfo", {
        branch: branch
      });
    }
  }
};
</script>
<style>
</style>
