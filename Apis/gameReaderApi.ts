export const gameReaderApi = async(apiDetails: any,apiName: string): Promise<any>=> {
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
        headers.token = token;
        const data = await callApi(url,method,headers,body);
        console.log(`${GAME_READER_API.name}::::::Done`);
        return data;
    } catch (error:any) {
        console.error("ERROR IN GAME READER:::::::",error);
        return false;
    }

}
