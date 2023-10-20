import {affliateWriterApi} from '../Apis/affliateWriterApi';
import { responseValidation } from '../helpers/responseValidation';

export const affliateWriterSuit = {
    login: (apiDetails: any) =>{
        test('LOGIN API', async()=>{
            const data = await affliateWriterApi(apiDetails,"login")
            apiDetails.token = data.data.token;
            let apiData = data;
            // apiDetails.urls.AFFLIATE_WRITER_URLS.login.response
            let verifiedData = apiDetails.responses.AFFLIATE_WRITER.LOGIN;
            responseValidation(apiDetails.MAINTENANCE,apiData,verifiedData);
        });
    }
}
