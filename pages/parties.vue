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
    let parties = [
      {
        id: "democrate",
        name: "Democratic Party",
      },
      {
        id: "republican",
        name: "Republican Party",
      },
      {
        id: "libertarian",
        name: "Libertarian Party",
      },
      {
        id: "green",
        name: "Green Party",
      },
      {
        id: "cpnys",
        name: "Conservative Party of New York State",
      },
      {
        id: "const",
        name: "Constitution Party",
      },
      {
        id: "work_fam",
        name: "Working Families Party",
      },
      {
        id: "soc_lib",
        name: "Party for Socialism and Liberation",
      },
      {
        id: "peace",
        name: "Peace and Freedom Party",
      },
      {
        id: "womens_eq",
        name: "Women's Equality Party",
      }
    ];
    return {
      parties: parties.sort(() => 0.5 - Math.random())
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
