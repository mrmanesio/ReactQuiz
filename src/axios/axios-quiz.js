import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-909c1-default-rtdb.europe-west1.firebasedatabase.app/'
})