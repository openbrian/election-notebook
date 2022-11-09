<template>
  <div class="container">
    <div>
      <div class="title">
        Election Notebook
      </div>
      <div class="subtitle">
        an election tracker
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid black;
}

.title {
  font-weight: 300;
  font-size: 42px;
  /*font-size: 100px;*/
  color: #526488;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
