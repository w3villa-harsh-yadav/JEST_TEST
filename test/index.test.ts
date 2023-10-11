import async, { any } from "async" ;
import {gameReaderApi} from '../test_cases/gameReaderApi';
import {gameWriterApi} from '../test_cases/gameWriterApi';
// import {unAuthorizedApi} from '../test_cases/unauthorizedApi';
import base_url from '../constants/base-url.json';
import headers from '../constants/headers.json';
import {callApi} from '../src/index';
import urls from '../constants/urls.json';

jest.setTimeout(9000);

function runTest() {
  describe('API Tests', () => {
    let prevResult:any;
  
    beforeAll(async () => {
      // Set up any data or dependencies needed for your tests
      const MAINTENANCE = false;
      prevResult = {
        base_url,
        headers,
        callApi,
        urls,
        MAINTENANCE
      };
    });
    test('TESTING READER APIS', async () => {
      await gameReaderApi(prevResult);
    });
  
    // test('TESTING WRITER APIS', async () => {
    //   await gameWriterApi(prevResult);
    // });
  });
}





async.waterfall([
    runTest
  ]
  , (error?: Error | null, finalResult?: string) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Waterfall Completed:", finalResult);
    }
  });

