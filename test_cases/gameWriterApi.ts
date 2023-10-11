module.exports.gameWriterApi = async(prevResult: any) => {
    return await new Promise<any>(async(resolve,reject)=>{
        try {
            const {
                base_url,
                headers,
                callApi,
                urls,
                MAINTENANCE
            } = prevResult;
            const baseUrl = base_url.quickdev1.GAME_WRITER_URL;
            const GAME_WRITER_API = urls.GAME_WRITER_URLS
            const apis = Object.keys(GAME_WRITER_API);

            const testApi = async() =>{
                return new Promise<Boolean>((resolve,reject)=>{
                    test('TESTING WRITER APIS', async () => {
                        for(let i = 0;i<apis.length; i++){
                            const key = apis[i];
                            const url = baseUrl+GAME_WRITER_API[key].url;
                            const method = GAME_WRITER_API[key].method;
                            const body = GAME_WRITER_API[key].body;
                            const data = await callApi(url,method,headers,body);
                            console.log(`${GAME_WRITER_API[key].name}::::::Done`);
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
                        }
                        return resolve(true);
                    });
                })

            }

            const testsDone = await testApi();
            if(testsDone){
                resolve(prevResult);
            }
        } catch (error:any) {
            reject(error);
        }
    })


}
