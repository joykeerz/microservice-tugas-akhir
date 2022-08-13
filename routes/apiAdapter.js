const axios = require("axios");
const { TIMEOUT } = process.env;
const baseUrl = "http://localhost:3000";

module.exports = (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    timeout: parseInt(TIMEOUT),
  });
};
