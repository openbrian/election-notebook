<template>
  <div>
    <h1>2020 Presidential Election Tracker</h1>
    <p>
      Each states gets a number of electoral votes based on its population.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/2020_United_States_presidential_election">2020 United States Presidential Election on Wikipedia</a>
    </p>
    <h2>Electoral College</h2>
    <v-sheet>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>State</th>
              <th>Electoral Votes</th>
              <th>Partisan Voting Index</th>
              <th>FiveThirtyEight</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in states" :key="item.name">
              <th>{{ item.name }}</th>
              <td>{{ item.votes }}</td>
              <td>{{ item.pvi }}</td>
              <td>{{ item.fte }}</td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
    <h1>270 Electoral Votes to Victory</h1>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600" height="888" viewBox="0 0 500 740">
      <defs>
        <rect id="box" width="16" height="16" stroke="#333333" stroke-width="1" fill="#eeeeee" rx="1" x="2" y="1"/>
        <g id="pyr"></g>
      </defs>
      <rect width="500" height="740" fill="#fff" stroke="#333"/>
      <use xlink:href="#box" x="240" y="360" />
      <g transform="translate(500, 340) rotate(180)">
        <use xlink:href="#pyr"/>
      </g>
      <g transform="translate(0, 400)">
        <use xlink:href="#pyr"/>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      states: [
        { name: "Alabama", votes: 9, pvi: 14, fte: "Solid R", 2016: "R" },
        { name: "Alaska", votes: 3, pvi: 9, fte: "Likely R", 2016: "R" },
        { name: "Arizona", votes: 11, pvi: 5, fte: "Lean D", 2016: "R" },
        { name: "Arkansas", votes: 6, pvi: 15, fte: "Solid R", 2016: "R" },
        { name: "California", votes: 55, pvi: -12, fte: "Solid D", 2016: "D" },
        { name: "Colorado", votes: 9, pvi: -1, fte: "Solid D", 2016: "D" },
        { name: "Connecticut", votes: 7, pvi: -6, fte: "Solid D", 2016: "D" },
        { name: "Delaware", votes: 3, pvi: -6, fte: "Solid D", 2016: "D" },
        { name: "District of Columbia", votes: 3, pvi: -41, fte: "Solid D", 2016: "D" },
        { name: "Florida", votes: 29, pvi: 2, fte: "Lean D", 2016: "R" },
        { name: "Georgia", votes: 16, pvi: 5, fte: "Tossup", 2016: "R" },
        { name: "Hawaii", votes: 4, pvi: -18, fte: "Solid D", 2016: "D" },
        { name: "Idaho", votes: 4, pvi: 19, fte: "Solid R", 2016: "R" },
        { name: "Illinois", votes: 20, pvi: -7, fte: "Solid D", 2016: "D" },
        { name: "Indiana", votes: 11, pvi: 9, fte: "Solid R", 2016: "R" },
        { name: "Iowa", votes: 6, pvi: 3, fte: "Tossup", 2016: "R" },
        { name: "Kansas", votes: 6, pvi: 13, fte: "Likely R", 2016: "R" },
        { name: "Kentucky", votes: 8, pvi: 15, fte: "Solid R", 2016: "R" },
        { name: "Louisiana", votes: 8, pvi: 11, fte: "Likely R", 2016: "R" },
        { name: "Maine", votes: 2, pvi: -3, fte: "Likely D", 2016: "D" },
        { name: "ME-1", votes: 1, pvi: -8, fte: "Solid D", 2016: "D" },
        { name: "ME-2", votes: 1, pvi: 2, fte: "Tossup", 2016: "R" },
        { name: "Maryland", votes: 10, pvi: -12, fte: "Solid D", 2016: "D" },
        { name: "Massachusetts", votes: 11, pvi: -12, fte: "Solid D", 2016: "D" },
        { name: "Michigan", votes: 16, pvi: -1, fte: "Likely D", 2016: "R" },
        { name: "Minnesota", votes: 10, pvi: -1, fte: "Likely D", 2016: "D" },
        { name: "Mississippi", votes: 6, pvi: 9, fte: "Likely R", 2016: "R" },
        { name: "Missouri", votes: 10, pvi: 9, fte: "Likely R", 2016: "R" },
        { name: "Montana", votes: 3, pvi: 11, fte: "Likely R", 2016: "R" },
        { name: "Nebraska", votes: 2, pvi: 14, fte: "Solid R", 2016: "R" },
        { name: "NE-1", votes: 1, pvi: 11, fte: "Solid R", 2016: "R" },
        { name: "NE-2", votes: 1, pvi: 4, fte: "Likely D", 2016: "R" },
        { name: "NE-3", votes: 1, pvi: 27, fte: "Solid R", 2016: "R" },
        { name: "Nevada", votes: 6, pvi: -1, fte: "Likely D", 2016: "D" },
        { name: "New Hampshire", votes: 4, pvi: -1, fte: "Likely D", 2016: "D" },
        { name: "New Jersey", votes: 14, pvi: -7, fte: "Solid D", 2016: "D" },
        { name: "New Mexico", votes: 5, pvi: -3, fte: "Solid D", 2016: "D" },
        { name: "New York", votes: 29, pvi: -11, fte: "Solid D", 2016: "D" },
        { name: "North Carolina", votes: 15, pvi: 3, fte: "Lean D", 2016: "R" },
        { name: "North Dakota", votes: 3, pvi: 16, fte: "Solid R", 2016: "R" },
        { name: "Ohio", votes: 18, pvi: 3, fte: "Tossup", 2016: "R" },
        { name: "Oklahoma", votes: 7, pvi: 20, fte: "Solid R", 2016: "R" },
        { name: "Oregon", votes: 7, pvi: -5, fte: "Solid D", 2016: "D" },
        { name: "Pennsylvania", votes: 20, pvi: 0, fte: "Likely D", 2016: "R" },
        { name: "Rhode Island", votes: 4, pvi: -10, fte: "Solid D", 2016: "D" },
        { name: "South Carolina", votes: 9, pvi: 8, fte: "Likely R", 2016: "R" },
        { name: "South Dakota", votes: 3, pvi: 14, fte: "Solid D", 2016: "R" },
        { name: "Tennessee", votes: 11, pvi: 14, fte: "Solid R", 2016: "R" },
        { name: "Texas", votes: 38, pvi: 8, fte: "Lean R", 2016: "R" },
        { name: "Utah", votes: 6, pvi: 20, fte: "Solid R", 2016: "R" },
        { name: "Vermont", votes: 3, pvi: -15, fte: "Solid D", 2016: "D" },
        { name: "Virginia", votes: 13, pvi: -1, fte: "Solid D", 2016: "D" },
        { name: "Washington", votes: 13, pvi: -7, fte: "Solid D", 2016: "D" },
        { name: "West Virginia", votes: 5, pvi: 19, fte: "Solid R", 2016: "R" },
        { name: "Wisconsin", votes: 10, pvi: 0, fte: "Likely D", 2016: "R" },
        { name: "Wyoming", votes: 3, pvi: 25, fte: "Solid R", 2016: "R" },
      ]
    }
  },
  mounted() {
    let p = document.getElementById("pyr");
    let ns = p.namespaceURI;
    let cell = 20;

    function row(min, max, y) {
      for (let x = min; x < max; x++) {
        let u = document.createElementNS(ns, 'use');
        u.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#box')
        u.setAttribute("y", y * cell);
        u.setAttribute("x", x * cell);
        p.appendChild(u)
      }
    }

    function diagonal(y, radius) {
      let min = radius - y;
      let max = radius - y + (y * 2) + 1;
      return [min, max]
    }

    let radius = 12;
    let min, max;
    for (let y = 0; y <= radius; y++) {
      [min, max] = diagonal(y, radius);
      row(min, max, y);
    }
    row(min, max, 13);
    row(min, max, 14);
    row(min, max, 15);
    row(min, max, 16);
  },
};
</script>
<style>
</style>
