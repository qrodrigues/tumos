<template>
  <div class="app">
    <div class="logo">
        <img to="accueil" src="/logo.svg" class="logo">
    </div>
    <p style="color: white;">En maintenance...</p>
  </div>
</template>
  
  
<script>
import Rules from './components/Rules.vue'

export default {
  name: 'App',
  components: { Rules },
  data() {
    return {
      rules: false
    }
  },
  methods: {
    onClickCloseRules() {
      this.rules = false
    }
  }
};
</script>
<style>
.logo {
  display: flex;
  justify-content: center;
  user-select: none;
  margin: 20px 0
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
}

nav .navElement {
  width: 300px;
  display: flex;
  justify-content: center;
  height: 55px;
  margin-top: 20px;
}


nav .navElement:hover {
  cursor: pointer;
}

nav a {
  text-decoration: none;
  text-align: center;
  font-size: 32px;
  transition: .1s;
  background-color: white;
  border-radius: 5px;
  color: #347670;
  -webkit-box-shadow: 0px 8px 0px 0px #323031;
  box-shadow: 0px 8px 0px 0px #323031;
  margin-bottom: 20px;
  width: 300px;
  height: 50px;
}

nav .navElement:hover a {
  color: white;
  background-color: #A06B9A;
  -webkit-box-shadow: 0px 3px 0px 0px #323031;
  box-shadow: 0px 3px 0px 0px #323031;
  margin-top: 5px;
}

.clickableButtons {
  display: flex;
  justify-content: center;
}


.buttonContainer {
  height: 55px;
}

.buttonContainer:hover {
  cursor: pointer;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.button {
  background-color: white;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 8px 0px 0px #323031;
  box-shadow: 0px 8px 0px 0px #323031;
  transition: .1s;
  padding-right: 10px;
  padding-left: 10px;
}

.buttonContainer:hover .button {
  -webkit-box-shadow: 0px 3px 0px 0px #323031;
  box-shadow: 0px 3px 0px 0px #323031;
  margin-top: 5px;
  cursor: pointer;
  background-color: #A06B9A;
}

.rules {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.homeButton {
  position: absolute;
  left: 60px;
  top: 40px;
  width: 75px;
  height: 75px;
  border-radius: 20px;
  color: white;
  font-size: 52px;
  transition: .1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.homeButton span{
  font-size: 30px;
  transition: .1s;
}

.homeButton:hover {
  font-size: 60px;
  cursor: pointer;
}

.homeButton:hover span {
  font-size: 34px;
}
</style>