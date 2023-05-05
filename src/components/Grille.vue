<script>
import wordRepository from '../repository/word';

export default {
  props: {
    nbLine: {
      type: Number,
      default: 0
    },
    word: {
      type: String,
      default: ''
    },
    gameState: {
      type: String,
      default: 'playing'
    },
    actualLine: {
      type: Number,
      default: 0
    },
    isGrilleReset: {
      type: Boolean
    }
  },
  data() {
    return {
      foundLetters: [],
      actualCase: 0,
      grille: {
        lignes: []
      },
      typedLetters: [],
      isError: false
    }
  },
  methods: {
    async onKeyPress(key) {
      if (/^[a-zA-Z]$/.test(key) || key === 'ENTER' || key === "BACKSPACE") {
        // Si on valide le mot
        if (key === 'ENTER') {
          // On vérifie que le mot soit de la bonne taille
          if (this.typedLetters.filter(letter => letter !== "").length === this.word.length) {
            // On vérifie si le mot est le bon
            if (this.typedLetters.join('') === [...this.word].join('')) {
              this.$emit('updateGameState', 'won')
            }
            // On vérifie si le mot existe parmis le lexique
            // if (true) {
            if (await this.checkWord(this.typedLetters.join('').toLowerCase())) {
              // On ajoute les lettres trouvées
              this.typedLetters.forEach((lettre, index) => {
                if (this.isLetterAtPosition(lettre, index)) {
                  this.addFoundLetter(lettre, index)
                }
              });
              // Enregistrement de l'ancienne ligne
              this.grille.lignes[this.actualLine].lettres.push(...this.typedLetters)

              // Clear des données et passage au suivant
              this.typedLetters = []
              this.actualCase = 0
              this.$emit('actualLineIncrease')
              this.typedLetters = this.foundLetters.slice()
              var findEmpty = false
              for (let l = 0; l < this.typedLetters.length && !findEmpty; l++) {
                if (this.typedLetters[l] === "") {
                  this.actualCase = l
                  findEmpty = true
                }
              }
            } else {
              this.isError = true
                setTimeout(() => {
                  this.isError = false
                }, 500);
            }
            // On vérifie que ce soit pas la dernière ligne
            if (this.actualLine >= this.nbLine - 1) {
              this.$emit('updateGameState', 'lost')
            }
          } else {
            this.isError = true
            setTimeout(() => {
              this.isError = false
            }, 500);
          }
        }
        if (key === 'BACKSPACE') {
          if (this.actualCase > 1) {
            this.actualCase--
            this.typedLetters[this.actualCase] = ""
          }
        }
        if (key !== 'ENTER' && key !== 'BACKSPACE' && this.actualCase < this.word.length) {
          this.typedLetters[this.actualCase] = key
          if (this.actualCase < this.word.length) {
            if (this.typedLetters[this.actualCase + 1] != this.foundLetters[this.actualCase + 1] || this.typedLetters[this.actualCase + 1] == "" || this.actualCase + 1 === this.word.length) {
            this.actualCase++
          } else {
            var findEmptyLetter = false
            const nbLetterLeft = this.word.length - (this.actualCase + 1)
            for (let i = 0; i < nbLetterLeft && !findEmptyLetter; i++) {
              if (this.typedLetters[i + this.actualCase + 1] == "") {
                this.actualCase = i + this.actualCase + 1
                findEmptyLetter = true
              }        
            }
            if (!findEmptyLetter) {
              this.actualCase = this.word.length
            }
          }
          }
        }
      }
    },
    isLetterAtPosition(letter, index) {
      return this.word[index] === letter
    },
    addFoundLetter(letter, index) {
      this.foundLetters[index] = letter
    },
    async checkWord(word) {
      const result = await wordRepository.isWord(word, this.word.length, this.word[0]);
      return result;
    },
    letterInWord (letter, position, ligne) {
      var nbLetter = 0
      this.word.split('').forEach(l => {
        if (l === letter) {
          nbLetter++
        }
      })
      // Si la lettre est présente une fois ou plus
      if (nbLetter >= 1) {
        // Je vérifie si elle est pas trouvé plus loin
        var countFind = 0
        for (let i = 0; i < this.word.length; i++) {
          if (this.foundLetters[i] === letter) {
            countFind++
          }
        }

        if (countFind >= nbLetter) {
          return false
        }

        // Je compte le nombre de fois que la lettre est trouvé avant la position pour vérifier si elle doit être affiché
        var count = 0
        for (let i = 0; i < position; i++) {
          if (ligne[i] === letter) {
            count++
          }
        }
        // Je vérifie si la position correspond
        if (count < nbLetter) {
          return true
        }
      }
      return false
    },
    onResetGrid () {
      console.log('reset grid');
    }
  },
  mounted() {
    // Initialisation
    for (let i = 0; i < this.word.length; i++) {
      this.foundLetters[i] = ""
    }
    if (this.word.length > 0) {
      this.foundLetters[0] = this.word[0].toUpperCase()
    }
    for (let i = 0; i < this.nbLine; i++) {
      this.grille.lignes.push({
        lettres: []
      })
    }
    this.typedLetters = this.foundLetters.slice()
    var findEmpty = false
    for (let l = 0; l < this.typedLetters.length && !findEmpty; l++) {
      if (this.typedLetters[l] === "") {
        this.actualCase = l
        findEmpty = true
      }
    }

    window.addEventListener('keyup', (event) => {
      this.onKeyPress(event.key.toUpperCase());
    });
  }
}
</script>

<template>
  <div :class="['grille', this.isError ? 'error' : '']">
    <div v-for="i in nbLine" class="ligne">
      <div v-for="j in word.length" :class="['case', this.isError ? 'errorCase' : '']">
        <!-- Si c'est une ancienne ligne -->
        <div :set="lettre = grille.lignes[i - 1].lettres[j - 1]" v-if="this.actualLine > i - 1"
          :class="[this.letterInWord(lettre, j - 1, grille.lignes[i - 1].lettres) ? 'inWord' : '', word[j - 1] === lettre ? 'atPosition' : '']">{{
            this.lettre }}</div>

        <!-- Si c'est la ligne actuelle -->
        <div v-if="this.actualLine === i - 1 && this.foundLetters[j - 1] === this.typedLetters[j - 1] && this.foundLetters[j - 1] != '' && this.actualCase != j - 1" class="letter atPosition">{{ this.foundLetters[j - 1] }}</div>
        <div v-else-if="this.actualLine === i - 1 && this.actualCase === j - 1" class="cursor">_</div>
        <div v-else-if="this.actualLine === i - 1 && this.actualCase > j - 1" class="letter">{{ this.typedLetters[j - 1] }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ligne {
  display: flex;
  justify-content: center;
}

.case {
  border: 2px solid white;
  width: 75px;
  height: 75px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  text-transform: uppercase;
  user-select: none;
}

.grille {
  margin: 0 auto;
  border: 2px solid white;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: min-content;
}

.inWord {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  border-radius: 50%;
  width: 90%;
  height: 90%;
}

.atPosition {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A06B9A;
  border-radius: 50%;
  width: 90%;
  height: 90%;
}

.cursor {
  animation: cursor 1s infinite;
}

@keyframes cursor {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0
  }

  100% {
    opacity: 1;
  }
}

.letter {
  animation: letter .1s ease-in
}

@keyframes letter {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.errorCase{
  border-color: #FAA916
}
.error {
  border-color: #FAA916;
  animation: shake .2s infinite;
}

@keyframes shake {
  0% {
    transform: translateX(0);
    transform: translateY(0);
  }
  
  20% {
    transform: translateX(2px);
    transform: translateY(2px);
  }
  
  40% {
    transform: translateX(-2px);
    transform: translateY(-2px);
  }

  40% {
    transform: translateX(2px);
    transform: translateY(2px);
  }
  80% {
    transform: translateX(-2px);
  }
  100% {
    transform: translateX(0);
    transform: translateY(0);
  }
  
}
</style>
