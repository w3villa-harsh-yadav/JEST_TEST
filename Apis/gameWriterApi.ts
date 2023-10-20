export const gameWriterApi = async(apiDetails: any,apiName: string): Promise<any> => {
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
        const baseUrl = base_url[server].GAME_WRITER_URL;
        const GAME_WRITER_API = urls.GAME_WRITER_URLS[apiName];
        const url = baseUrl+GAME_WRITER_API.url;
        const method = GAME_WRITER_API.method;
        const body = GAME_WRITER_API.body;
        headers.token = token;
        const beforetime = new Date().getTime();
        const data = await callApi(url,method,headers,body);
        const aftertime = new Date().getTime();
        console.log(`${GAME_WRITER_API.name}::::::Done`,aftertime-beforetime);
        return data;
    } catch (error:any) {
        console.error("ERROR IN GAME WRITER:::::::",error);
        return false
    }
}
