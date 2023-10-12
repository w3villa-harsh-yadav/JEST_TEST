export const affliateWriterApi = async(apiDetails: any,apiName: string):Promise<any> => {
    try {
        const {
            base_url,
            headers,
            callApi,
            urls,
            MAINTENANCE,
            server
        } = apiDetails;
        const baseUrl = base_url[server].AFFLIATE_WRITER_URL;
        const AFFLIATE_WRITER_API = urls.AFFLIATE_WRITER_URLS[apiName];
        const url = baseUrl+AFFLIATE_WRITER_API.url;
        const method = AFFLIATE_WRITER_API.method;
        const body = AFFLIATE_WRITER_API.body;
        const data = await callApi(url,method,headers,body);
        console.log(`${AFFLIATE_WRITER_API.name}::::::Done`);
        return data;
    } catch (error:any) {
        console.error("ERROR IN GAME READER:::::::",error);
        return false
    }

  }
