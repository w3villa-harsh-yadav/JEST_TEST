
module.exports.affliateWriterapi = async(callApi: any,base_url: any,headers: any,urls: any,MAINTENANCE: any) => {
    const baseUrl = base_url.quickdev1.AFFLIATEWRITER_URL;
    const AFFLIATEWRITER_API = urls.AFFLIATEWRITER_URLS
    const apis = Object.keys(AFFLIATEWRITER_API);

    test("Unauthorized API", async()=>{
        const url = baseUrl+urls.AFFLIATEWRITER_URLS.leaderboard.url;
        const method = urls.AFFLIATEWRITER_URLS.leaderboard.method;
        const body = urls.AFFLIATEWRITER_URLS.leaderboard.body;
        const data = await callApi(url,method,{},body);
        expect(data).toEqual("Unauthorized");
    });

    // Looping through the Game Reader Apis
    apis.map( (keys) => {
        test(`${AFFLIATEWRITER_API[keys].name}`, async () => {
            const url = baseUrl+AFFLIATEWRITER_API[keys].url;
            const method = AFFLIATEWRITER_API[keys].method;
            const body = AFFLIATEWRITER_API[keys].body;
            const data = await callApi(url,method,headers,body);
            console.log(`${AFFLIATEWRITER_API[keys].name}:::`,data);
            if( MAINTENANCE ) {
                expect(data).toHaveProperty("success",false);
                expect(data).toHaveProperty("message");
                expect(data).toHaveProperty("data");
                expect(data).toHaveProperty("display");
            } else {
                expect(data).toHaveProperty("success",true);
                expect(data).toHaveProperty("message");
                expect(data).toHaveProperty("data");
                expect(data).toHaveProperty("display");
            }
        });
    })
  }
