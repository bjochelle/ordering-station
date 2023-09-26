import {useErrorStore} from "@/store/Error";
import router from "@/routes/index";
import axios from 'axios';
import Swal from 'sweetalert2'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.baseURL = window.location.origin;
axios.defaults.withCredentials = true;

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'm-1 btn btn-sm btn-success ',
        cancelButton: 'm-1  btn btn-sm btn-danger'
    },
    buttonsStyling: false
})
// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent

        useErrorStore().$reset();

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        switch (error.response.status) {
            case 401:
                localStorage.removeItem("token");
                window.location.reload();
                break;
            case 403:
                swalWithBootstrapButtons.fire({
                    icon: 'error',
                    title: 'Error 403!',
                    text: "You don't have permission to access this action.",
                    footer: '<a href="">Please Contact Support</a>'
                })
                break;
            case 404:
                router.push({
                    name: "error_404",
                    props: {
                        error: {
                            message: error.response.data.message,
                            status: error.status,
                        },
                    },
                });
                break;
            case 422:
                useErrorStore().$state = error.response.data
                break;
            case 429:
                swalWithBootstrapButtons.fire({
                    icon: 'error',
                    title: 'Error 429!',
                    text: 'Opps...Too many attempts! Please try again later.',
                    footer: '<a href="">Please Contact Support</a>'
                })
                break;
            default:

                swalWithBootstrapButtons.fire({
                    icon: 'error',
                    title: 'Error 500!',
                    text: 'Opps...Something went wrong!',
                    footer: '<a href="">Please Contact Support</a>'
                })

        }

        return Promise.reject(error);
    }
);


export default axios;

