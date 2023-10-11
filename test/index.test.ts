var async = require("async");
const {gameReaderApi} = require('../test_cases/gameReaderApi');
const {gameWriterApi} = require('../test_cases/gameWriterApi');
const {unAuthorizedApi} = require('../test_cases/unauthorizedApi');

jest.setTimeout(100000);


async.waterfall([
  function(callback: (error?: Error | null, result?: {}) => void) {
        const base_url = require('../constants/base-url');
        const headers = require('../constants/headers');
        const {callApi} = require('../src/index');
        const urls = require('../constants/urls');
        const MAINTENANCE = false;
        const data = {
            base_url,
            headers,
            callApi,
            urls,
            MAINTENANCE
        }
        callback(null,data);
    },
    // unAuthorizedApi,
    gameReaderApi,
    gameWriterApi
  ], (error: Error | null, finalResult: string) => {
    if (error) {
      console.log(error);
    } else {
      console.log("::::::::::::::Waterfall Completed::::::::::",finalResult);
    }
});



