class JsonPlaceHolderApi {
    constructor(){
        this.__URL = 'https://jsonplaceholder.typicode.com/users';
    }
    async getUserList(){
        const response = await fetch(this.__URL);
        const data = await response.json();
        return data;
    }
}

export default JsonPlaceHolderApi;