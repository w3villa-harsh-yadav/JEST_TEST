import {gameReaderApi} from '../Apis/gameReaderApi';
import { dataValidation } from '../helpers/responseValidation';

export const gameReaderSuit = {
  leaderboard : (apiDetails: any) => {
    test('LEADERBOARD API', async () => {
      const data = await gameReaderApi(apiDetails,"leaderboard");
      dataValidation(apiDetails.MAINTENANCE,data,apiDetails.urls.GAME_READER_URLS.leaderboard.response);
    });
  },

  gameTools : (apiDetails: any) => {
    test('GAME TOOLS API', async () => {
      const data = await gameReaderApi(apiDetails,"gameTools");
      dataValidation(apiDetails.MAINTENANCE,data,apiDetails.urls.GAME_READER_URLS.gameTools.response);
    });
}
};

