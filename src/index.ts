import axios from 'axios';

const callApi = async(url: string, method: string, headers: {}, body: {})=>{
    try {
        return axios({
            method: method,
            url: url,
            headers: headers,
            data: body
        }).then(function (response){
            return response.data;
        }).catch(function(error){
            return error.response.data;
        })
    } catch (error) {
        console.log("ERROR:::::::::",error)
        return
    }
}


module.exports = {
    callApi
}
