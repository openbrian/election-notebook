<template>
  <section class="home">
    <h1 class="home__heading">Political Parties</h1>
    <div class="cards">
      <v-card elevation="5" width="300px" v-for="item in parties" v-bind:key="item.id">
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.info }}</v-card-subtitle>
        <v-card-text>
          <v-list dense>
            <v-list-item v-for="a in item.platform" v-bind:key="a.name">
              <v-list-item-content>
                <v-list-item-title>{{ a }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn>
            <a :href=item.url>more info</a>
          </v-btn>
        </v-card-actions>
      </v-card>
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
        id: "democratic",
        name: "Democratic Party",
        wikipedia: "https://en.wikipedia.org/wiki/Democratic_Party_(United_States)",
        platform: [
          "expand social security",
          "increase minimum wage",
          "tax cuts for working and middle class",
          "support universal health care",
          "invest in science and technology",
          "expand renewable energy",
          "decriminalize marijuana",
          "implement campaign finance reform",
          "support same-sex marriage",
        ],
      },
      {
        id: "republican",
        name: "Republican Party",
        wikipedia: "https://en.wikipedia.org/wiki/Republican_Party_(United_States)",
        platform: [
          "constitution should be honored",
          "government should be smaller",
          "lower taxes",
          "reduce government spending",
          "privatize healthcare",
          "gun rights",
          "deregulation",
          "restrictions on labor unions",
          "free market capitalism",
          "increase military spending",
        ],
      },
      {
        id: "libertarian",
        name: "Libertarian Party",
        wikipedia: "https://en.wikipedia.org/wiki/Libertarian_Party_(United_States)",
        platform: [
          "civil liberties",
          "lower taxes",
          "abolish the IRS",
          "decrease national debt",
          "allow social security opt-out",
          "eliminate welfare state",
          "end prohibition on illegal drugs",
          "advocate criminal justice reform",
          "support same sex marriage",
          "end capital punishment",
          "support gun ownership",
        ],
      },
      {
        id: "green",
        name: "Green Party",
        wikipedia: "https://en.wikipedia.org/wiki/Green_Party_of_the_United_States",
        platform: [
          "environmentalism",
          "nonviolence",
          "social justice",
          "grassroots democracy",
          "gender equality",
          "anti-war",
          "ecosocialism",
        ],
      },
      {
        id: "const",
        name: "Constitution Party",
        wikipedia: "https://en.wikipedia.org/wiki/Constitution_Party_(United_States)",
        platform: [
          "originalist interpretation of the Constitution",
          "supports the environment",
          "phase out social security",
          "strongly influence by Christianity",
        ],
      },
      {
        id: "vermont_prog",
        name: "Vermont Progressive Party",
        wikipedia: "https://en.wikipedia.org/wiki/Vermont_Progressive_Party",
        platform: [
          "democratic socialist",
          "single-payer health care system",
          "rewewable energy",
          "phase out nuclear energy",
          "support public transportation",
          "criminal justice reform",
          "end homelessness",
          "support LGBT rights",
          "convert minimum wage to living wage",
          "support small and local business",
          "empower worker cooperatives",
        ],
      },
      {
        id: "ip_ny",
        name: "Independence Party of New York",
        wikipedia: "https://en.wikipedia.org/wiki/Independence_Party_of_New_York",
        platform: [
          "draw out independent voters",
          "data driven policy",
          "no ideology",
          "no position on divisive issues",
        ],
      },
      {
        id: "reform",
        name: "Reform Party of the United States",
        wikipedia: "https://en.wikipedia.org/wiki/Reform_Party_of_the_United_States_of_America",
        platform: [
          "maintain a balanced budget",
          "campaign finance reform",
          "enforce immegration laws",
          "elect president by popular vote"
        ],
      },
    ];
    return {
      parties: parties.sort(() => 0.5 - Math.random())
    };
  },
};
</script>
<style>
</style>
