<template>
  <div>
    <h1>2020 Senate Election Tracker</h1>
    <p>
      There are 100 senators, 2 from each state.  They are broken up into 3
      classes: Class 1 (33), Class 2 (33), and Class 3 (34).  Every 2 years,
      one third of them are up for election.  Each senator serves for 6
      years.  In 2020 Class 2 is up for election.
    </p>
    <p>
      <a href="https://en.wikipedia.org/wiki/2020_United_States_Senate_elections">2020 United States Senate Election on Wikipedia</a>
    </p>
    <h2>Class 2</h2>
    <v-sheet>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Election</th>
              <th>Before Election</th>
              <th>Candidates (excluding write-ins)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in states" :key="item.name">
              <th>{{ item.id }} {{ item.special ? "special" : ""}}</th>
              <td><span class="person" :class="item.incumbent.party">{{ item.incumbent.name }} ({{item.incumbent.party}})</span></td>
              <td>
                <ul class="candidates">
                  <li class="person" :class="c.party" v-for="c in item.candidates"><input type="checkbox" /> {{ c.name }} ({{c.party}})</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
    <h2>Election Tally</h2>
    <v-sheet>
      <v-simple-table>
        <template v-slot:default>
          <thead>
          <tr>
            <th>Party</th>
            <th>Tally (list the states won here)</th>
            <th>total</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th>Democratic</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Republican</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>independent</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Green</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Libertarian</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>other: </th>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
    <h2>Entire Senate</h2>
    <p>
      The senate is controlled by the party with the most senators.
    </p>
    <v-sheet width="800">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Party</th>
              <th>Class 1</th>
              <th>Class 2 Before</th>
              <th>Class 2 After</th>
              <th>Class 3</th>
              <th>Total Before</th>
              <th>Total After</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Democratic</th>
              <td>21</td>
              <td>{{ agg[0].count }}</td>
              <td></td>
              <td>12</td>
              <td>45</td>
              <td></td>
            </tr>
            <tr>
              <th>Republican</th>
              <td>10</td>
              <td>{{ agg[1].count }}</td>
              <td></td>
              <td>22</td>
              <td><b>53</b></td>
              <td></td>
            </tr>
            <tr>
              <th>independent</th>
              <td>2</td>
              <td>{{ agg[2].count }}</td>
              <td></td>
              <td>0</td>
              <td>2</td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: "about-nuxt",
  data() {
    let st = [
      {
        id: "Alabama",
        special: false,
        incumbent: { name: "Doug Jones", party: "D" },
        candidates: [
          { name: "Doug Jones", party: "D" },
          { name: "Tommy Tuberville", party: "R" },
        ],
      },
      {
        id: "Alaska",
        special: false,
        incumbent: { name: "Dan Sullivan", party: "R" },
        candidates: [
          { name: "Al Gross", party: "I" },
          { name: "John Wayne Howe", party: "AI" },
          { name: "Dan Sullivan", party: "R" },
          { name: "Jed Whittaker", party: "G" },
        ],
      },
      {
        id: "Arizona",
        special: true,
        incumbent: { name: "Martha McSally", party: "R" },
        candidates: [
          { name: "Mark Kelly", party: "D" },
          { name: "Martha McSally", party: "R" },
        ],
      },
      {
        id: "Arkansas",
        special: false,
        incumbent: { name: "Tom Cotton", party: "R" },
        candidates: [
          { name: "Tom Cotton", party: "R" },
          { name: "RIcky Dale Harrington, Jr.", party: "L" },
        ],
      },
      {
        id: "Colorado",
        special: false,
        incumbent: { name: "Cory Gardner", party: "R" },
        candidates: [
          { name: "Raymond Anthony Doane", party: "L" },
          { name: "Daniel Doyle", party: "AV" },
          { name: 'Stephan "Seku" Evans', party: "U" },
          { name: "Cory Gardner", party: "R" },
          { name: "John Hickenlooper", party: "D" },
        ],
      },
      {
        id: "Delaware",
        special: false,
        incumbent: { name: "Chris Coons", party: "D" },
        candidates: [
          { name: "Chris Coons", party: "D" },
          { name: "Nadine Frost", party: "L" },
          { name: "Mark Turley", party: "DI" },
          { name: "Lauren Witzke", party: "R" },
        ],
      },
      {
        id: "Georgia",
        special: false,
        incumbent: { name: "David Perdue", party: "R" },
        candidates: [
          { name: "Shane Hazel", party: "L" },
          { name: "Jon Ossoff", party: "D" },
          { name: "David Perdue", party: "R" },
        ],
      },
      {
        id: "Georgia",
        special: true,
        incumbent: { name: "Kelly Loeffler", party: "R" },
        candidates: [
          { name: 'Eli "Al" Bartell', party: "I" },
          { name: "Allen Buckley", party: "I" },
          { name: "Doug Collins", party: "R" },
          { name: 'John "Green" Fortuin', party: "G" },
          { name: "Derrick Grayson", party: "R" },
          { name: "Michael Todd Greene", party: "I" },
          { name: "Annette Davis Jackson", party: "R" },
          { name: "Deborah Jackson", party: "D" },
          { name: "Jamesia James", party: "D" },
          { name: "Tamara Johnson-Shealey", party: "D" },
          { name: "Matt Lieberman", party: "D" },
          { name: "Kelly Loeffler", party: "R" },
          { name: "Joy Felicia Slade", party: "D" },
          { name: "Brian Slowinski", party: "L" },
          { name: "Valencia Stovall", party: "I" },
          { name: "Ed Tarver", party: "D" },
          { name: "Kandiss Taylor", party: "R" },
          { name: "Raphael Warnock", party: "D" },
          { name: "Richard Dien Winfield", party: "D" },
        ],
      },
      {
        id: "Idaho",
        special: false,
        incumbent: { name: "Jim Risch", party: "R" },
        candidates: [
          { name: "Natalie Fleming", party: "I" },
          { name: "Paulette Jordan", party: "D" },
          { name: "Jim Risch", party: "R" },
          { name: "Ray Writz", party: "C" },
        ],
      },
      {
        id: "Illinois",
        special: false,
        incumbent: { name: "Dick Durbin", party: "D" },
        candidates: [
          { name: "David F. Black", party: "G" },
          { name: "Mark Curran", party: "R" },
          { name: "Dick Durbin", party: "D" },
          { name: "Danny Malouf", party: "L" },
          { name: "Willie Wilson", party: "WW" },
        ],
      },
      {
        id: "Iowa",
        special: false,
        incumbent: { name: "Joni Ernst", party: "R" },
        candidates: [
          { name: "Joni Ernst", party: "R" },
          { name: "Theresa Greenfield", party: "D" },
          { name: "Suzanne Herzog", party: "I" },
          { name: "Rick Steward", party: "L" },
        ],
      },
      {
        id: "Kansas",
        special: false,
        incumbent: { name: "Pat Roberts", party: "R" },
        candidates: [
          { name: "Barbara Bollier", party: "D" },
          { name: "Jason Buckley", party: "L" },
          { name: "Roger Marshall", party: "R" },
        ],
      },
      {
        id: "Kentucky",
        special: false,
        incumbent: { name: "Mitch McConnell", party: "R" },
        candidates: [
          { name: "Brad Barron", party: "L" },
          { name: "Mitch McConnell", party: "R" },
          { name: "Amy McGrath", party: "D" },
        ],
      },
      {
        id: "Louisiana",
        special: false,
        incumbent: { name: "Bill Cassidy", party: "R" },
        candidates: [
          { name: "Beryl Billiot", party: "I" },
          { name: "John Paul Bourgeois", party: "I" },
          { name: "Bill Cassidy", party: "R" },
          { name: "Reno Daret III", party: "I" },
          { name: "Champ Edwards", party: "D" },
          { name: "Xan John", party: "I" },
          { name: "David Drew Knight", party: "D" },
          { name: "Vinny Mendoza", party: "I" },
          { name: "Jamar Montgomery", party: "I" },
          { name: "Dustin Murphy", party: "R" },
          { name: "Adrian Perkins", party: "D" },
          { name: "Antoine Pierce", party: "D" },
          { name: "Melinda Mary Price", party: "I" },
          { name: "Aaron Sigler", party: "L" },
          { name: "Peter Wenstrup", party: "D" },
        ],
      },
      {
        id: "Maine",
        special: false,
        incumbent: { name: "Susan Collins", party: "R" },
        candidates: [
          { name: "Tiffany Bond", party: "MMRI" },
          { name: "Susan Collins", party: "R" },
          { name: "ISara Gideon", party: "D" },
          { name: "Max Patrick Linn", party: "I" },
          { name: "Lisa Savage", party: "IG" },
        ],
      },
      {
        id: "Massachusetts",
        special: false,
        incumbent: { name: "Ed Markey", party: "D" },
        candidates: [
          { name: "Ed Markey", party: "D" },
          { name: "Kevin O'Connor", party: "R" },
        ],
      },
      {
        id: "Michigan",
        special: false,
        incumbent: { name: "Gary Peters", party: "D" },
        candidates: [
          { name: "Doug Dern", party: "NL" },
          { name: "John James", party: "R" },
          { name: "Gary Peters", party: "D" },
          { name: "Marcia Squier", party: "G" },
          { name: "Valerie Willis", party: "UST" },
        ],
      },
      {
        id: "Minnesota",
        special: false,
        incumbent: { name: "Tina Smith", party: "D" },
        candidates: [
          { name: "Jason Lewis", party: "R" },
          { name: "Kevin O'Connor", party: "LMN" },
          { name: "TIna Smith", party: "D" },
          { name: "Oliver Steinberg", party: "LC" },
        ],
      },
      {
        id: "Mississippi",
        special: false,
        incumbent: { name: "Cindy Hyde-Smith", party: "R" },
        candidates: [
          { name: "Jimmy Edwards", party: "L" },
          { name: "Mike Espy", party: "D" },
          { name: "Cindy Hyde-Smith", party: "R" },
        ],
      },
      {
        id: "Montana",
        special: false,
        incumbent: { name: "Steve Daines", party: "R" },
        candidates: [
          { name: "Steve Bullock", party: "D" },
          { name: "Steve Daines", party: "R" },
        ],
      },
      {
        id: "Nebraska",
        special: false,
        incumbent: { name: "Ben Sasse", party: "R" },
        candidates: [
          { name: "Chris Janicek", party: "D" },
          { name: "Ben Sasse", party: "R" },
          { name: "Gene Siadek", party: "L" },
        ],
      },
      {
        id: "New Hampshire",
        special: false,
        incumbent: { name: "Jeanne Shaheen", party: "D" },
        candidates: [
          { name: "Corky Messner", party: "R" },
          { name: "Jusin O'Donnell", party: "L" },
          { name: "Jeanne Shaheen", party: "D" },
        ],
      },
      {
        id: "New Jersey",
        special: false,
        incumbent: { name: "Cory Booker", party: "D" },
        candidates: [
          { name: "Cory Booker", party: "D" },
          { name: "Daniel Burke", party: "LR" },
          { name: "Veronica Fernandez", party: "OBF" },
          { name: "Madelyn R. Hoffman", party: "G" },
          { name: "Rik Mehta", party: "R" },
        ],
      },
      {
        id: "New Mexico",
        special: false,
        incumbent: { name: "Tom Udall", party: "D" },
        candidates: [
          { name: "Ben Ray Luján", party: "D" },
          { name: "Mark Ronchetti", party: "R" },
          { name: "Rob Walsh", party: "L" },
        ],
      },
      {
        id: "North Carolina",
        special: false,
        incumbent: { name: "Thom Tillis", party: "R" },
        candidates: [
          { name: "Shannon Bray", party: "L" },
          { name: "Cal Cunningham", party: "D" },
          { name: "Keven Hayes", party: "C" },
          { name: "Thom Tillis", party: "R" },
        ],
      },
      {
        id: "Oklahoma",
        special: false,
        incumbent: { name: "Jim Inhofe", party: "R" },
        candidates: [
          { name: "Abby Broyles", party: "D" },
          { name: "Joan Farr", party: "I" },
          { name: "Jim Inhofe", party: "R" },
          { name: "Robert Murphy", party: "L" },
          { name: "A. D. Nesbit", party: "I" },
        ],
      },
      {
        id: "Oregon",
        special: false,
        incumbent: { name: "Jeff Merkley", party: "D" },
        candidates: [
          { name: "Gary Dye", party: "L" },
          { name: "Jeff Merkley", party: "D" },
          { name: "Jo Rae Perkins", party: "R" },
          { name: "Ibrahim Taher", party: "PG" },
        ],
      },
      {
        id: "Rhode Island",
        special: false,
        incumbent: { name: "Jack Reed", party: "D" },
        candidates: [
          { name: "Jack Reed", party: "D" },
          { name: "Allen Waters", party: "R" },
        ],
      },
      {
        id: "South Carolina",
        special: false,
        incumbent: { name: "Lindsey Graham", party: "R" },
        candidates: [
          { name: "Bill Bledsoe", party: "C" },
          { name: "Keenan Dunham", party: "L" },
          { name: "Lindsey Graham", party: "R" },
          { name: "Jaime Harrison", party: "D" },
        ],
      },
      {
        id: "South Dakota",
        special: false,
        incumbent: { name: "Mike Rounds", party: "R" },
        candidates: [
          { name: "Dan Ahlers", party: "D" },
          { name: "Mike Rounds", party: "R" },
        ],
      },
      {
        id: "Tennessee",
        special: false,
        incumbent: { name: "Lamar Alaxander", party: "R" },
        candidates: [
          { name: "Marquita Bradshaw", party: "D" },
          { name: "Romi Faparusi", party: "I" },
          { name: "Jeffrey Grunau", party: "I" },
          { name: "Bill Hagerty", party: "R" },
          { name: "Ronnie Henley", party: "I" },
          { name: "G. Dean Hill", party: "I" },
          { name: "Steven Hooper", party: "I" },
          { name: "Aaron James", party: "I" },
          { name: "Elizabeth McLeod", party: "I" },
          { name: "Eric Stansberry", party: "I" },
        ],
      },
      {
        id: "Texas",
        special: false,
        incumbent: { name: "John Cornyn", party: "R" },
        candidates: [
          { name: "David B Collins", party: "G" },
          { name: "John Cornyn", party: "R" },
          { name: "MJ Hegar", party: "D" },
          { name: "Kerry McKennon", party: "L" },
        ],
      },
      {
        id: "Virginia",
        special: false,
        incumbent: { name: "Mark Warner", party: "D" },
        candidates: [
          { name: "Daniel Gade", party: "R" },
          { name: "Mark Warner", party: "D" },
        ],
      },
      {
        id: "West Virginia",
        special: false,
        incumbent: { name: "Shelley Moore Capito", party: "R" },
        candidates: [
          { name: "Shelly Moore Capito", party: "R" },
          { name: "David Moran", party: "L" },
          { name: "Paula Jean Swearengin", party: "D" },
        ],
      },
      {
        id: "Wyoming",
        special: false,
        incumbent: { name: "Mike Enzi", party: "R" },
        candidates: [
          { name: "Merav Ben-David", party: "D" },
          { name: "Cynthia Lummis", party: "R" },
        ],
      },
    ];
    function agg(st) {
      let party = [
        { name: "Democrat", count: 0 },
        { name: "Republican", count: 0 },
        { name: "Independent", count: 0 }
      ];
      let index = {
        D: party[0],
        R: party[1],
      }
      for (const s of st) {
        if (! s.special) {
          index[s.incumbent.party].count += 1;
        }
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
.candidates {
  list-style-type: none;
}
.person {
  display: inline-block;
  width: 220px;
  padding: 2px;
  margin: 4px;
  border: 1px #D8D8D8 solid;
  border-left: 6px #AAA solid;
  border-radius: 4px;
}
.D { border-left-color: #33F; }
.R { border-left-color: #F33; }
.G { border-left-color: #3F3; }
.L { border-left-color: #FED105; }
</style>
