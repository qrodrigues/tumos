import axios from "axios";
import CryptoJS from "crypto-js";
import config from '../../config'

const secretKey = config.api_secret_key
const url = config.api_url
console.log(secretKey);
console.log(url);

function decrypt(encryptedWord) {
  return CryptoJS.AES.decrypt(encryptedWord, secretKey).toString(
    CryptoJS.enc.Utf8
  );
}

export default {
  async isWord(word, size, firstLetter) {
    const response = await axios.get(
      url + "/words/" + size + "/" + firstLetter
    );
    return response.data.words.includes(word);
  },
  async getDailyWord() {
    const response = await axios.get(url + "/words/daily");
    return decrypt(response.data.word)
  },
  async getHourlyWord() {
    const response = await axios.get(url + "/words/hourly");
    return decrypt(response.data.word)
  },
  async getMinutelyWord() {
    const response = await axios.get(url + "/words/minutely");
    return decrypt(response.data.word)
  },
  async getDailyDate() {
    const response = await axios.get(url + "/words/daily/time");
    return response.data.time;
  },
  async getHourlyDate() {
    const response = await axios.get(url + "/words/hourly/time");
    return response.data.time;
  },
  async getMinutelyDate() {
    const response = await axios.get(url + "/words/minutely/time");
    return response.data.time;
  },
};
