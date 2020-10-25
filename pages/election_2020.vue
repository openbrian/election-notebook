<template>
  <section>
    <section>
      <h1>National</h1>
      <h2>President</h2>
      <v-sheet width="400">
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th>Candidates</th>
              <th>Party</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in pres_candidates" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.party }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-sheet>
      <p>
        <nuxt-link :to="{name: 'election-tracker_president'}">presidential election tracker</nuxt-link>
      </p>
      <h2>US Senate - Virginia</h2>
      <v-sheet width="400">
        <v-simple-table>
          <template v-slot:default>
            <thead>
            <tr>
              <th>Candidate</th>
              <th>Party</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in senate_va_candidates" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.party }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-sheet>
    </section>
    <section>
      <h1>State</h1>
      <h2>Referrenda</h2>
      <ul>
        <li>Redistricting Commission Amendment</li>
        <li>Motor Vehicle Property Tax Exemption for Disabled Veterans Amendment</li>
      </ul>
    </section>
    <section>
      <h1>Local</h1>
    </section>
  </section>
</template>
<script>
export default {
  data () {
    return {
      pres_candidates: [
        {
          name: 'Donald Trump / Mike Pence',
          party: 'Republican',
        },
        {
          name: 'Joe Biden / Kamala Harris',
          party: 'Democratic',
        },
        {
          name: 'Jo Jorgensen / Spike Cohen',
          party: 'Libertarian',
        },
      ],
      senate_va_candidates: [
        {
          name: 'Daniel Gade',
          party: 'Republican',
        },
        {
          name: 'Mark Warner',
          party: 'Democratic',
        },
        {
          name: 'Al Mina',
          party: 'independent',
        },
      ],
    }
  },
}
</script>
