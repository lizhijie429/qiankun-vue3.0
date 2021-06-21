/*
 * @Author: lizhijie429
 * @Date: 2021-06-19 10:36:24
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-06-21 14:29:59
 * @Description:
 */
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const config = {
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 10000,
  responseType: "json",
};

const http = axios.create(config as AxiosRequestConfig);

// Add a request interceptor
http.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export function getResources(url: string, params = {}) {
  return http({
    url,
    method: "GET",
    params,
  });
}

//封装post请求
export function postResources(url: string, data = {}) {
  return http({
    url,
    method: "POST",
    data,
  });
}
