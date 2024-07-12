import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "5a716e4aa6cf07be1b5e519a0c4c5fdc",
        language: "ko-KR"
    }
})

export default instance;