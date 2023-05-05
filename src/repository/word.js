import axios from 'axios'

const url = process.env.API_URL || 'http://localhost:3000'

export default {
    async isWord(word, size, firstLetter) {
        const response = await axios.get(url + '/words/'+size+'/'+firstLetter);
        return response.data.words.includes(word);
    },
    async getDailyWord() {
        const response = await axios.get(url + '/words/daily');
        return response.data.word;
    },
    async getHourlyWord() {
        const response = await axios.get(url + '/words/hourly');
        return response.data.word;
    },
    async getMinutelyWord() {
        const response = await axios.get(url + '/words/minutely');
        return response.data.word;
    },
    async getDailyDate() {
        const response = await axios.get(url + '/words/daily/time');
        return response.data.time;
    },
    async getHourlyDate() {
        const response = await axios.get(url + '/words/hourly/time');
        return response.data.time;
    },
    async getMinutelyDate() {
        const response = await axios.get(url + '/words/minutely/time');
        return response.data.time;
    }
}
