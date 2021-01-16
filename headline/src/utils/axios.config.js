import axios from "axios";
const port = 3333;
import {Message} from 'element-ui'
// import router from "../../../server/routes";
import router from '../router/index.js'
axios.defaults.baseURL = "http://localhost:" + port;
axios.interceptors.request.use(
    function (config) {
        const token = window.localStorage.getItem('user-token');
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function () {}
)
axios.interceptors.response.use(function(response){
    return response.data?response.data:{};
    console.log(response,'axios-response')
},function(error){
    console.log(error,'axios-error');
    const status = error.response.status?error.response.status:401;
    let message = "";
    switch(status){
        case 401:
            message = "未授权，或授权已过期";
            window.localStorage.removeItem('user-token')
            router.push('/login');
            break;
            default:
                console.log(error.response);
                message = error.response.data.message;
    }
    Message({
        type:'warning',
        message:message + "------------自定义"
    })
    // return  new Promise(()=>{})
    return error.response;
})
export default axios;