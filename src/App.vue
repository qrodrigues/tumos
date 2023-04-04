<template>
    <div class="app">
        <div class="logo">
            <router-link to="/">
                <img to="accueil" src="/logo.svg" class="logo">
            </router-link>
        </div>
        <nav v-if="this.$route.path === '/'">
            <router-link to="/quotidien">Mot du jour</router-link>
        </nav>
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
}

nav a {
    text-decoration: none;
    text-align: center;
    font-size: 32px;
    transition: .5s;
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