import {affliateWriterApi} from '../Apis/affliateWriterApi';
import { dataValidation,login } from '../helpers/responseValidation';

export const affliateWriterSuit = {
    login: (apiDetails: any) =>{
        test('LOGIN API', async()=>{
            const data = await affliateWriterApi(apiDetails,"login")
            apiDetails.token = data.data.token;
            let apiData = apiDetails.urls.AFFLIATE_WRITER_URLS.login.response;
            // apiDetails.urls.AFFLIATE_WRITER_URLS.login.response
            let verifiedData = apiDetails.responses.AFFLIATE_WRITER.LOGIN;
            console.log("API_DATA::::::::::::",apiData);
            login(apiDetails.MAINTENANCE,apiData,verifiedData);
            // login(apiDetails.MAINTENANCE,apiData,verifiedData);
        });
    }
}
