export default {
    removeAccents(str) {
        const accents = [
            { from: "à", to: "a" },
            { from: "á", to: "a" },
            { from: "â", to: "a" },
            { from: "ä", to: "a" },
            { from: "ç", to: "c" },
            { from: "è", to: "e" },
            { from: "é", to: "e" },
            { from: "ê", to: "e" },
            { from: "ë", to: "e" },
            { from: "î", to: "i" },
            { from: "ï", to: "i" },
            { from: "ô", to: "o" },
            { from: "ö", to: "o" },
            { from: "ù", to: "u" },
            { from: "ú", to: "u" },
            { from: "û", to: "u" },
            { from: "ü", to: "u" },
            { from: "ÿ", to: "y" },
        ];
        for (let i = 0; i < accents.length; i++) {
            str = str.replace(new RegExp(accents[i].from, "g"), accents[i].to);
        }
        return str;
    },
    async isWord(word) {
        const response = await fetch('/src/data/gutenberg.txt');
        const text = await response.text();
        return this.removeAccents(text).includes(word);
    }
}
