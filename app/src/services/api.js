import axios from 'axios';

const api = axios.create({
    // general ip for local requests
    baseURL: 'http://192.168.0.10:3333',
    // nodejs port for deploy app via usb
    // baseURL: 'http://10.0.3.2:3333',
    // nodejs port for deploy app via usb using genymotion for android
    // baseURL: 'http://10.0.2.2:3333',
})

export default api;