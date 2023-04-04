<template>
  <div class="app">
    <div class="logo">
      <router-link to="/">
        <img to="accueil" src="/logo.svg" class="logo">
      </router-link>
    </div>
    <div v-if="this.$route.path === '/'">
      <nav>
        <router-link to="/quotidien">Mot du jour</router-link>
        <router-link to="/horaire">Mot de l'heure</router-link>
        <router-link to="/minute">Mot de la minute</router-link>
      </nav>
      <div class="clickableButtons">
        <div class="buttons">
          <div class="button">Règles</div>
          <div class="button">Paramètres</div>
          <div class="button">Langues</div>
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>
  
  
<script>
export default {
  name: 'App',
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

nav a {
  text-decoration: none;
  text-align: center;
  font-size: 32px;
  transition: .3s;
  background-color: white;
  border-radius: 5px;
  color: #347670;
  -webkit-box-shadow: 0px 8px 0px 0px #323031;
  box-shadow: 0px 8px 0px 0px #323031;
  margin-bottom: 20px;
  width: 300px;
}

nav a:hover {
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
  transition: .3s;
  padding-right: 10px;
  padding-left: 10px;
}

.button:hover {
  -webkit-box-shadow: 0px 3px 0px 0px #323031;
  box-shadow: 0px 3px 0px 0px #323031;
  margin-top: 5px;
  cursor: pointer;
  background-color: #A06B9A;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to,
.view.fade-leave-active {
  opacity: 0;
}
</style>