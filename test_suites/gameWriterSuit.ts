import {gameWriterApi} from '../Apis/gameWriterApi';
import { responseValidation } from '../helpers/responseValidation';

export const gameWriterSuit = {
    joinlobby: (apiDetails: any)=>{
        test('JOIN LOBBY API', async () => {
            const data = await gameWriterApi(apiDetails,"joinlobby");
            responseValidation(apiDetails.MAINTENANCE,data,apiDetails.urls.GAME_WRITER_URLS.joinlobby.response);
        });
    }
}
