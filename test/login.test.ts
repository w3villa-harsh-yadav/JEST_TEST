const fs = require('fs');
const base_url = require('../constants/base-url');
const headers = require('../constants/headers');
const {callApi} = require('../src/index');
const urls = require('../constants/urls');
const MAINTENANCE = false;

const baseUrl = base_url.quickdev3.AFFLIATE_WRITER_URL;
test("Login API",async()=>{
    const url = baseUrl+urls.AFFLIATEWRITER_URLS.login.url;
    const method = urls.AFFLIATEWRITER_URLS.login.method;
    const body = urls.AFFLIATEWRITER_URLS.login.body;
    const data = await callApi(url,method,headers,body);
    const headers_data = await JSON.parse(fs.readFileSync('constants/headers.json', 'utf8'));
    headers_data.token = data.data.token;
    await fs.writeFileSync('constants/headers.json', JSON.stringify(headers_data), 'utf8');
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
})
