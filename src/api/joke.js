import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    config.headers.Accept = 'application/json';
    return config;
});

export default {
    fetchJoke(cb) {
        axios.get('https://icanhazdadjoke.com')
            .then(response => {
                cb(response.data);
            })
    },
}
