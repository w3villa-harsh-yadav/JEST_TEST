import axios from 'axios';

export const callApi = async(url: string, method: string, headers: {}, body: {})=>{
    try {
        return await new Promise<any>((resolve,reject)=>{
            axios({
                method: method,
                url: url,
                headers: headers,
                data: body
            }).then(function (response){
                resolve(response.data);
            }).catch(function(error){
                resolve(error.response.data);
            })
        })
    } catch (error) {
        console.log("ERROR:::::::::",error)
        return
    }
}
