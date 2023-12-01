<template>
    <div class="frame">
        <h1>Update Scores</h1>

        <!-- Team Dropdown -->
        <div class="team">
            <label for="team">Select Team</label>
            <select v-model="selectedTeam" class="selector">
                <option v-for="team in teams" :key="team">{{ team }}</option>
            </select>
        </div>


        <!-- Score Input -->
        <div class="score">
            <label for="score">Enter Score</label>
            <input v-model="score" type="number" class="selector" />
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
h1 {
    font-size: 4em;
    margin-bottom: 0.5em;
}
.frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 98vh;
}

.team {
  margin-bottom: 1em;
}

.selector {
    margin-left: 0.5em;
}

button {
    margin-top: 2em;
    padding: 0.5em 1em;
    border-radius: 0.2em;
    border: none;
    background-color: greenyellow;
    color: black;
    font-size: 1em;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
  