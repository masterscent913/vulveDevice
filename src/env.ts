export const prodUrl = "https://someapp.herokuapp.com";

const env = {
  dev: {
    apiUrl: "http://100.25.155.48:443"
  },
  staging: {
    apiUrl: prodUrl
  },
  prod: {
    apiUrl: prodUrl
  }
};

export default env ;
