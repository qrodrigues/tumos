<template>
    <div class="container">
        <p class="rulesTitle">Les règles</p>
        <div class="allRules">
            <p class="rulesText">
                Bienvenue sur Tumos, le but du jeu est de trouvé le mot, avec les indices fournis.<br><br>
                Pour cela vous devez remplir la grille avec des mots existants, vous avez un nombre de ligne limité.<br><br>
                Vous pouvez supprimer les lettres déjà trouvées ! Sauf la première...
            </p>
            <br>
            <p class="rulesSection">Les indices :</p>
            <div class="rule">
                <div class="caseRule">
                    <div class="letterRule atPosition">R</div>
                </div>
                <p>La lettre est dans le mot, et bien placée.</p>
            </div>
            <div class="rule">
                <div class="caseRule">
                    <div class="letterRule inWord">K</div>
                </div>
                <p>La lettre est dans le mot, mais mal placée.</p>
            </div>
            <div class="rule">
                <div class="caseRule">
                    <div class="letterRule">L</div>
                </div>
                <p>La lettre n'est pas dans le mot.</p>
            </div>
        </div>
        <div class="close">
            <div class="closeButtonArea">
                <button @click="onClickClose">Fermer</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onClickClose() {
            this.$emit('clickClose')
        }
    }
}
</script>
<style>
.container {
    border: 5px solid #a06b9a;
    background-color: white;
    border-radius: 10px;
    width: 500px;
}

p {
    text-align: center;
}

.close {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.close button {
    border: none;
    outline: none;
    background-color: orange;
    width: 200px;
    height: 30px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    -webkit-box-shadow: 0px 8px 0px 0px #323031;
    box-shadow: 0px 8px 0px 0px #323031;
    transition: .1s;
    margin-bottom: 20px;
}

.closeButtonArea {
    height: 35px;
}

.closeButtonArea:hover {
    cursor: pointer;
}

.close .closeButtonArea:hover button {
    -webkit-box-shadow: 0px 3px 0px 0px #323031;
    box-shadow: 0px 3px 0px 0px #323031;
    margin-top: 5px;
    cursor: pointer;
}

.allRules {
    height: 650px;
}

.rulesTitle {
    font-size: 34px;
    text-decoration: underline;
}

.rule {
    display: flex;
    margin-top: 10px;
}

.rule .atPosition {
    background-color: #a06b9a;
}

.rule .inWord {
    background-color: orange;
}

.rule .letterRule {
    color: white;
    font-size: 48px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.rule p {
    margin-left: 10px;
    font-size: 18px;
}

.caseRule {
    background-color: #347670;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-left: 10px;
    padding: 4px
}

.rulesSection {
    font-size: 28px;
    text-decoration: underline;
}

.rulesText {
    margin: 10px;
}
</style>