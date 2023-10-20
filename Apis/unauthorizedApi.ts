export const unAuthorizedApi = async(apiDetails: any,apiName: string): Promise<any> => {
    try {
        const {
            base_url,
            headers,
            callApi,
            urls,
            MAINTENANCE,
            server,
            token
        } = apiDetails;
        const baseUrl = base_url[server].GAME_READER_URL;
        const GAME_READER_API = urls.GAME_READER_URLS[apiName];
        const url = baseUrl+GAME_READER_API.url;
        const method = GAME_READER_API.method;
        const body = GAME_READER_API.body;
        const beforetime = new Date().getTime();
        const data = await callApi(url,method,headers,body);
        const aftertime = new Date().getTime();
        console.log(`UNAUTHORIZED_API::::::Done`,aftertime-beforetime);
        return data;
    } catch (error:any) {
        console.error("ERROR IN UNAUTHORIZED API:::::::",error);
        return false
    }
}
