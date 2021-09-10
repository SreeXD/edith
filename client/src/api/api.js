import axios from 'axios';

export const predict = async (data) => await axios.get(`/predict`, {
    params: data,
});