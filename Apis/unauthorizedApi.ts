export const unAuthorizedApi = async(prevResult: any) => {
    return await new Promise<Boolean>((resolve,reject)=>{
        try {
            const {
                base_url,
                headers,
                callApi,
                urls,
                MAINTENANCE
            } = prevResult;
            const baseUrl = base_url.quickdev1.GAME_READER_URL;
            test("Unauthorized API", async ()=>{
                const url = baseUrl+urls.GAME_READER_URLS.leaderboard.url;
                const method = urls.GAME_READER_URLS.leaderboard.method;
                const body = urls.GAME_READER_URLS.leaderboard.body;
                const data = await callApi(url,method,{},body);
                expect(data).toEqual("Unauthorized");
                return resolve(true)
            });
        } catch (error) {
            reject(error)
        }
    })
}
