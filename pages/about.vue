<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Learn about democracy
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2">
          Track election night results
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            height="100px"
          >
            <p>
              Learn about the branches of the federal government, their
              composition, political parties.
            </p>
          </v-card>
          <v-btn color="primary" @click="e1 = 2">
            Next
          </v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            height="100px"
          >
            <p>
              As the results are announced, track the progress made by each
              candidate.
            </p>
          </v-card>
          <v-btn color="primary" @click="e1 = 1">
            Previous
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      e1: 1,
    }
  },
}
</script>
<style>
</style>
