/* eslint-disable prefer-const */
import axios from "axios";
import qs from 'qs';
import { message } from 'antd';

const http = axios.create({
    baseURL: '/api',
    timeout: 60000
});
http.defaults.transformRequest = data => {
    if (isPlainObject(data)) data = qs.stringify(data);
    return data;
};
http.interceptors.response.use(response => {
    return response.data;
}, reason => {
    message.error('当前网络繁忙，请您稍后再试~');
    return Promise.reject(reason);
});


const isPlainObject = function isPlainObject(obj: any) {
    let proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object]") return false;
    proto = Object.getPrototypeOf(obj);
    if (!proto) return true;
    Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && Ctor === Object;
};

export default http;
