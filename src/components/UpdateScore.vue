<template>
    <div>
      <h1>Update Scores</h1>
  
      <!-- Team Dropdown -->
      <label for="team">Select Team:</label>
      <select v-model="selectedTeam" class="team">
        <option v-for="team in teams" :key="team">{{ team }}</option>
      </select>
  
      <!-- Score Input -->
      <label for="score">Enter Score:</label>
      <input v-model="score" type="number" class="score" />
  
      <!-- Update Button -->
      <button @click="updateScore">Update Score</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedTeam: null,
        score: null,
        teams: ['Astralis', 'NiP', 'NAVI'],
      };
    },
    methods: {
      updateScore() {
        console.log('Updating score:', this.selectedTeam, this.score);
      },
    },
  };
  </script>
  
  <style scoped>
  
  </style>
  