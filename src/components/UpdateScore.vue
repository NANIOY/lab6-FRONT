<template>
    <div class="frame">
        <h1>Update Scores</h1>

        <!-- Team Dropdown -->
        <div class="team">
            <label for="team">Select Team:</label>
            <select v-model="selectedTeam" class="team-selector">
                <option v-for="team in teams" :key="team">{{ team }}</option>
            </select>
        </div>


        <!-- Score Input -->
        <div class="score">
            <label for="score">Enter Score:</label>
            <input v-model="score" type="number" class="score-input" />
        </div>

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
  