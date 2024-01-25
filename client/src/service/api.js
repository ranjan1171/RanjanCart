import axios from 'axios';

const URL = 'http://localhost:8000';

// export const authenticateLogin = async (data) => {
//     try {
//         return await axios.post(`${URL}/login`, data)
//     } catch (error) {
//         console.log('Error while calling login API: ', error);
//     }
// }

export const authenticateSignup = async (data) => {
    try {

        return await axios.post(`${URL}/signup`, data);


        // return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

// export const getProductById = async (id) => {
//     try {
//         return await axios.get(`${url}/product/${id}`);
//     } catch (error) {
//         console.log('Error while getting product by id response', error);
//     }
// }

// export  const payUsingPaytm = async (data) => {
//     try {
//         let response = await axios.post(`${url}/payment`, data);
//         return response.data;
//     } catch (error) {
//         console.log('Error', error);
//     }
// }

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
        
    }
}