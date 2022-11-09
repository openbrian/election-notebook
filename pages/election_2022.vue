<template>
  <section>
    <section>
      <h1>State</h1>
      <p>
        <nuxt-link :to="{name: 'election-2022-house_tracker'}">2022 House election tracker</nuxt-link>
      </p>
      <p>
        <nuxt-link :to="{name: 'election-2022-senate_tracker'}">2022 Senate election tracker</nuxt-link>
      </p>
      <h2>US House District 8 - Virginia</h2>
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
            <tr v-for="item in house_va_candidates" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.party }}</td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-sheet>
      <h2>Referrenda</h2>
<!--      <ul>-->
<!--        <li>Redistricting Commission Amendment</li>-->
<!--        <li>Motor Vehicle Property Tax Exemption for Disabled Veterans Amendment</li>-->
<!--      </ul>-->
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
      house_va_candidates: [
        {
          name: 'Karina A. Lipsman',
          party: 'Republican',
        },
        {
          name: 'Donald S. Beyer, Jr.',
          party: 'Democratic',
        },
        {
          name: 'Teddy Fikre',
          party: 'independent',
        },
      ],
    }
  },
}
</script>
