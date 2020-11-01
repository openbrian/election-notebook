<template>
  <div>
    <h1>2020 Senate Election Tracker</h1>
    <h2>Class 2</h2>
    <v-sheet width="400">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Candidates</th>
              <th>Before Election</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in states" :key="item.name">
              <td>{{ item.id }}</td>
              <td>{{ item.incumbent.name }} ({{item.incumbent.party}})</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
    <v-sheet width="400">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Party</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in agg" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.count }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
    <p>
      <a href="https://en.wikipedia.org/wiki/2020_United_States_Senate_elections">2020 United States Senate Election on Wikipedia</a>
    </p>
  </div>
</template>
<script>
export default {
  name: "about-nuxt",
  data() {
    let st = [
      {
        id: "Alabama",
        incumbent: { name: "Doug Jones", party: "D" },
        candidates: [
          {
            name: "",
            party: "",
          }
        ],
      },
      {
        id: "Alaska",
        incumbent: { name: "Dan Sullivan", party: "R" },
      },
      {
        id: "Arizona Sp",
        incumbent: { name: "Martha McSally", party: "R" },
      },
      {
        id: "Arkansas",
        incumbent: { name: "Tom Cotton", party: "R" },
      },
      {
        id: "Colorado",
        incumbent: { name: "Cory Gdner", party: "R" },
      },
      {
        id: "Delaware",
        incumbent: { name: "Chris Coons", party: "D" },
      },
      {
        id: "Georgia Reg",
        incumbent: { name: "David Perdue", party: "R" },
      },
      {
        id: "Georgia Sp",
        incumbent: { name: "Kelly Loeffler", party: "R" },
      },
      {
        id: "Idaho",
        incumbent: { name: "Jim Risch", party: "R" },
      },
      {
        id: "Illinois",
        incumbent: { name: "Dick Durbin", party: "D" },
      },
      {
        id: "Iowa",
        incumbent: { name: "Joni Ernst", party: "R" },
      },
      {
        id: "Kansas",
        incumbent: { name: "Pat Roberts", party: "R" },
      },
      {
        id: "Kentucky",
        incumbent: { name: "Mitch McConnell", party: "R" },
      },
      {
        id: "Louisiana",
        incumbent: { name: "Bill Cassidy", party: "R" },
      },
      {
        id: "Maine",
        incumbent: { name: "Susan Collins", party: "R" },
      },
      {
        id: "Massachusetts",
        incumbent: { name: "Ed Markey", party: "D" },
      },
      {
        id: "Michigan",
        incumbent: { name: "Gary Peters", party: "D" },
      },
      {
        id: "Minnesota",
        incumbent: { name: "Tina Smith", party: "D" },
      },
      {
        id: "Mississippi",
        incumbent: { name: "Cindy Hyde-Smith", party: "R" },
      },
      {
        id: "Montana",
        incumbent: { name: "Steve Daines", party: "R" },
      },
      {
        id: "Nebraska",
        incumbent: { name: "Ben Sasse", party: "R" },
      },
      {
        id: "New Hampshire",
        incumbent: { name: "Jeanne Shaheen", party: "D" }
      },
      {
        id: "New Jersey",
        incumbent: { name: "Cory Booker", party: "D" },
      },
      {
        id: "New Mexico",
        incumbent: { name: "Tom Udall", party: "D" },
      },
      {
        id: "North Carolina",
        incumbent: { name: "Thom Tillis", party: "R" },
      },
      {
        id: "Oklahoma",
        incumbent: { name: "Jim Inhofe", party: "R" },
      },
      {
        id: "Oregon",
        incumbent: { name: "Jeff Merkley", party: "D" },
      },
      {
        id: "Rhode Island",
        incumbent: { name: "Jack Reed", party: "D" },
      },
      {
        id: "South Carolina",
        incumbent: { name: "Lindsey Graham", party: "R" },
      },
      {
        id: "South Dakota",
        incumbent: { name: "Mike Rounds", party: "R" },
      },
      {
        id: "Tennessee",
        incumbent: { name: "Lamar Alaxander", party: "R" },
      },
      {
        id: "Texas",
        incumbent: { name: "John Cornyn", party: "R" },
      },
      {
        id: "Virginia",
        incumbent: { name: "Mark Warner", party: "D" },
      },
      {
        id: "West Virginia",
        incumbent: { name: "Shelley Moore Capito", party: "R" },
      },
      {
        id: "Wyoming",
        incumbent: { name: "Mike Enzi", party: "R" },
      },
    ];
    function agg(st) {
      let party = [
        {name: "Democrat", count: 0},
        {name: "Republican", count: 0},
      ];
      let index = {
        D: party[0],
        R: party[1],
      }
      for (const s of st) {
        index[s.incumbent.party].count += 1;
      }
      return party
    }
    return {
      agg: agg(st),
      states: st,
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
