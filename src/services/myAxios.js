import axios from "axios";


const config = {
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzdhOTdiNmU3NjU2NDYxM2ViM2YzNjdhZWI2ZmU3NSIsInN1YiI6IjYxMmY3NjYwYzFmZmJkMDAyYjk4OGU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W5vq4qcn2PM92It4VnliPopuFxLSwazxmlmttUgKANA'
    }
}


export default axios.create(config);