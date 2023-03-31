<script>
import Grille from './components/Grille.vue'

export default {
  components: {Grille},
  data () {
    return {
      word: 'chienne',
      gameState: 'playing' // playing, lost, won
    }
  },
  methods: {
    onUpdateGameState (newState) {
      this.gameState = newState
    }
  },
  mounted () {
    this.word = this.word.toUpperCase()
  }
}
</script>

<template>
  <div class="logo">
    <img src="/logo.svg" class="logo">
  </div>
  <div v-if="this.gameState === 'won'" class="won">GAGNE !</div>
  <div v-if="this.gameState === 'lost'" class="lost">PERDU !</div>
  <Grille v-if="this.gameState === 'playing'" :nbLine="6" :word="word" :gameState="'playing'" @updateGameState="onUpdateGameState"></Grille>
  <!-- <div v-if="this.gameState === 'playing'" class="keyboard"></div> -->
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    user-select: none;
  }

  .keyboard {
    width: 500px;
    height: 200px;
    border: 1px solid white;
    margin: 0 auto;
    margin-top: 50px
  }
</style>
