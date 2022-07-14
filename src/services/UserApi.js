import axios from 'axios';

export default class UserApi {
    static classInstance = null;

    static getAPIServiceInstance() {
        if (UserApi.classInstance === null) {
            UserApi.classInstance = new UserApi();
        }
        return this.classInstance;
    }
    baseUrl() {
        console.log(process.env.REACT_APP_URL_API)
        return process.env.REACT_APP_URL_API + '/register';
    }
    register(data) {
        const url = this.baseUrl();
        return axios.post(url, data)
    }

}


