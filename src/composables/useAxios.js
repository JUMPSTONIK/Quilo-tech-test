import axios from 'axios';

//API Instances declare here to use them as singleton
let apiInstance;

const useAxios = () => {
    //This should be invoked here, because outside can't get initialized

    //We check if we need to create the instance or if we can use the old one
    if (!apiInstance) {
        apiInstance = axios.create({
            baseURL: "https://api.fxratesapi.com/",
        })

    }

    return apiInstance;
}


export default useAxios;