import axios from "axios";


const config = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        authorization: 
    }
}


export default axios.create(config);
