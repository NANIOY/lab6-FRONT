<!-- Scoreboard.vue -->

<template>
    <div class="scoreboard">
      <h1>Scoreboard</h1>
  
      <ul>
        <li v-for="(score, team) in scores" :key="team">
          {{ team }}: {{ score }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scores: {
          'Astralis': 0,
          'NiP': 0,
          'NAVI': 0,
          // Add more teams as needed
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .scoreboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
  }
  
  h1 {
    font-size: 4em;
    margin-bottom: 0.5em;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  </style>
  