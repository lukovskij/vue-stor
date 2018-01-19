<template>
  <div id="app">
    <nav class="navbar is-info">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112"
              height="28">
          </router-link>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link active-class="is-active" to="/" class="navbar-item" exact>Home</router-link>
            <router-link active-class="is-active" to="/admin" class="navbar-item">Admin</router-link>
            <router-link active-class="is-active" to="/cart" class="navbar-item">Cart</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="layout">
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>
<style>
  .layout {
    margin: 40px 0;
    display: flex;
  }

</style>
