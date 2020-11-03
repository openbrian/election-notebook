<template>
  <section class="home">
    <h1 class="home__heading">3 Branches of Federal Government</h1>
    <div class="cards">
      <v-card elevation="5" min-width="250px" v-for="branch in branches" v-bind:key="branch.id">
        <v-card-title>{{ branch.name }}</v-card-title>
        <v-card-subtitle>{{ branch.info }}</v-card-subtitle>
        <v-card-text>
          <v-list>
            <v-list-item v-for="a in branch.has" v-bind:key="a.name">
              <v-list-item-content>
                <v-list-item-title>{{ a.name }}</v-list-item-title>
                <v-list>
                  <v-list-item v-for="b in a.has" v-bind:key="b.name">
                    <v-list-item-title>{{ b.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
<!--        <v-card-actions>-->
<!--          <v-btn>-->
<!--            <nuxt-link-->
<!--              :to="{ name: 'national-id', params: { id: branch.id, dir: branch } }"-->
<!--            >more info</nuxt-link>-->
<!--          </v-btn>-->
<!--        </v-card-actions>-->
      </v-card>
    </div>
    <img alt="map of usa" src="~/assets/Map_of_USA_States_with_names_white.svg" />
    <h2>Resources</h2>
    <p>
      <a href="https://www.usa.gov/branches-of-government">Branches of the U.S. Government</a>
    </p>
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
          info: "Makes laws",
          has: [
            {
              name: "Congress",
              has: [
                { name: "Senate" },
                { name: "House of Representatives" }
                ],
            }
            ],
        },
        {
          id: "executive",
          name: "Executive",
          info: "Carries out laws",
          has: [
            {
              name: "President",
              has: [
                { name: "Vice President" },
                { name: "Cabinet" }
                ],
            }
          ],
        },
        {
          id: "judicial",
          name: "Judicial",
          info: "Interprets laws",
          has: [
            { name: "Supreme Court", has: [] },
            { name: "Other federal courts", has: [] },
          ]
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
