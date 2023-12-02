<template>
  <div id="app">
    <nav>
      <router-link to="/update" class="nav-link">Update Scores</router-link>
      <router-link to="/scoreboard" class="nav-link">Scoreboard</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.nav-link {
  margin: 24px;
  font-size: 1.5em;
  text-decoration: none;
  color: #7a7a7a;
}

.nav-link.router-link-exact-active {
  color: greenyellow;
  font-weight: bold;
}
</style>
