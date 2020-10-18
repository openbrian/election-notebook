<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <nav class="nav">
      <div class="nav__link">
        <nuxt-link to="/">Home</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/about">About</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/parties">Parties</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/national">National</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/state">State</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/local">Local</nuxt-link>
      </div>
      <div class="nav__link">
        <nuxt-link to="/election_2020">2020 Election</nuxt-link>
      </div>
    </nav>
  </header>
</template>
<script>
  import Logo from "@/components/Logo";
  export default {
    name: "nav-bar",
    components: {
      Logo
    }
  }
</script>
<style>

</style>
