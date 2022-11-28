import axios from "axios";

const ApiAxios =axios.create({
    baseUrl: 'https://www.buyinhotel.co.kr/',
    timeout : 1000 
    });

    ApiAxios.interceptors.request.use(
        function (config) {
          config.headers["Content-Type"] = "application/json; charset=utf-8";
          config.headers["user"] = "AppIDEtest";
          return config;
        },
        function (error) {
          console.log(error);
          return Promise.reject(error);
        }
      );

      ApiAxios.interceptors.response.use(
        function (response) {
          console.log(response);
          return response.data.data;
        },
        function (error) {
          console.log(error);
          return Promise.reject(error);
        }
      );

      export default ApiAxios;