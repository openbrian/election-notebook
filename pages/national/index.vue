<template>
  <section class="home">
    <h1 class="home__heading">3 Branches of Federal Government</h1>
    <div class="cards">
      <div
        class="card__container"
        v-for="branch in branches"
        :key="branch.id"
        @click.prevent="storeBranchInfo(branch)"
      >
        <p class="card__name">
          <nuxt-link
            :to="{ name: 'national-id', params: { id: branch.id, dir: branch } }"
          >{{ branch.name }}</nuxt-link>
        </p>
      </div>
    </div>
    <p>
      <a href="https://www.usa.gov/branches-of-government">Branches of the U.S. Government</a>
    </p>
    <img alt="map of usa" src="~/assets/Map_of_USA_States_with_names_white.svg" />
  </section>
</template>
<script>
// https://www.smashingmagazine.com/2020/04/getting-started-nuxt/
export default {
  name: "about-nuxt",
  data() {
    return {
      branches: [
        {
          id: "legislative",
          name: "Legislative",
          info: "Makes laws"
        },
        {
          id: "executive",
          name: "Executive",
          info: "Carries out laws"
        },
        {
          id: "judicial",
          name: "Judicial",
          info: "Interprets laws"
        },
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
