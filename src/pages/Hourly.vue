<script>
import Grille from '../components/Grille.vue'
import wordRepository from '../repository/word';
import Timer from '../components/Timer.vue';

export default {
  components: {Grille, Timer},
  data () {
    return {
      word: '',
      gameState: 'playing', // playing, lost, won
      actualLine: 0,
      loaded: false,
      endDate: null
    }
  },
  methods: {
    onUpdateGameState (newState) {
      this.gameState = newState
    },
    onActualLineIncrease () {
      this.actualLine++
    }
  },
  async mounted () {
    this.word = await wordRepository.getHourlyWord()
    this.word = this.word.toUpperCase()
    this.loaded = true
    this.endDate = await wordRepository.getHourlyDate()
  }
}
</script>

<template>
  <div>
    <Timer :endDate="new Date(new Date(this.endDate).getTime() + 60 * 60 * 1000)" />
    <div class="end-container">
      <div v-if="this.gameState === 'won'" class="end won">
        <p class="subtitle">VICTOIRE</p>
        <p class="showWord">Le mot était : <span>{{ word }}</span></p>
        <p>Vous avez trouvé le mot en {{ actualLine + 1 }} {{ actualLine + 1 > 1 ? 'lignes' : 'ligne' }} !<br>Revenez demain pour le nouveau mot du jour !</p>
      </div>
      <div v-if="this.gameState === 'lost'" class="end lost">
        <p class="subtitle">DEFAITE</p>
        <p class="showWord">Le mot était : <span>{{ word }}</span></p>
        <p>Vous n'avez pas réussi à trouver le mot !<br>Revenez demain pour une nouvelle chance avec un nouveau mot.</p>
      </div>
    </div>
    <Grille v-if="this.gameState === 'playing' && loaded" :actualLine="actualLine" :nbLine="6" :word="word" :gameState="'playing'" @updateGameState="onUpdateGameState" @actualLineIncrease="onActualLineIncrease"></Grille>
    <!-- <div v-if="this.gameState === 'playing'" class="keyboard"></div> -->
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  .keyboard {
    width: 500px;
    height: 200px;
    border: 1px solid white;
    margin: 0 auto;
    margin-top: 50px
  }

  .end-container {
    display: flex;
    justify-content: center;
  }

  .end {
    width: 30%;
    border: 5px solid #A06B9A;
    border-radius: 10px;
    margin: 10px;
  }

  .end .subtitle {
    color: white;
    font-size: 24px;
    margin: 0;
    text-decoration: underline;
  }

  .end p {
    text-align: center;
  }
  
  .showWord {
    margin: 0;
    color: white;
  }

  .showWord span {
    color: orange;
    font-weight: bold;
  }
</style>
