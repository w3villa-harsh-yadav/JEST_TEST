import { config } from '../helpers/importHandler';

// Testing TimeOut
jest.setTimeout(10000);

describe('AFTER LOGIN API TESTS', () => {
  config.affliateWriterSuit.login(config.apiDetails)
  // for(let i = 0;i<=10;i++){
  //   config.gameReaderSuit.leaderboard(config.apiDetails)
  // }
  // config.gameWriterSuit.joinlobby(config.apiDetails)
  // config.gameReaderSuit.leaderboard(config.apiDetails)
  // config.gameReaderSuit.gameTools(config.apiDetails)
});
