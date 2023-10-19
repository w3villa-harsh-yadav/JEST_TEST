import {gameWriterApi} from '../Apis/gameWriterApi';
import { dataValidation } from '../helpers/responseValidation';

export const gameWriterSuit = {
    joinlobby: (apiDetails: any)=>{
        test('JOIN LOBBY API', async () => {
            const data = await gameWriterApi(apiDetails,"joinlobby");
            dataValidation(apiDetails.MAINTENANCE,data,apiDetails.urls.GAME_WRITER_URLS.joinlobby.response);
        });
    }
}
