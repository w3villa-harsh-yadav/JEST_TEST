import {gameReaderApi} from '../Apis/gameReaderApi';
import { responseValidation } from '../helpers/responseValidation';


export const gameReaderSuit = {
  leaderboard : (apiDetails: any) => {
    test('LEADERBOARD API', async () => {
      const data = await gameReaderApi(apiDetails,"leaderboard");
      responseValidation(apiDetails.MAINTENANCE,data,apiDetails.urls.GAME_READER_URLS.leaderboard.response);
    });
  },

  gameTools : (apiDetails: any) => {
    test('GAME TOOLS API', async () => {
      const data = await gameReaderApi(apiDetails,"gameTools");
      responseValidation(apiDetails.MAINTENANCE,data,apiDetails.urls.GAME_READER_URLS.gameTools.response);
    });
}
};

