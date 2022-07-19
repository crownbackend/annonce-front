import axios from 'axios';

export default class SecurityApi {
    static classInstance = null;

    static getAPIServiceInstance() {
        if (SecurityApi.classInstance === null) {
            SecurityApi.classInstance = new SecurityApi();
        }
        return this.classInstance;
    }
    baseUrl() {
        console.log(process.env.REACT_APP_URL_API)
        return process.env.REACT_APP_URL_API_LOGIN + '/login_check';
    }
    login(data) {
        const url = this.baseUrl();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        return fetch(url, requestOptions)
    }

}


