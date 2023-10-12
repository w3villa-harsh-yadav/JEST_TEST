import async, { any } from "async" ;
import {gameReaderApi} from '../test_cases/gameReaderApi';
import {gameWriterApi} from '../test_cases/gameWriterApi';
import {affliateWriterApi} from '../test_cases/affliateWriterApi';
// import {unAuthorizedApi} from '../test_cases/unauthorizedApi';
import base_url from '../constants/base-url.json';
import headers from '../constants/headers.json';
import {callApi} from '../src/index';
import urls from '../constants/urls.json';
import { log } from "console";


// Testing TimeOut
jest.setTimeout(9000);


// Type for ApiDetails
type apiDetails = {
  base_url:Object,
  headers: Object,
  callApi: Function,
  urls: Object,
  MAINTENANCE: Boolean,
  server:String,
  token: String
};

// Constants Data
let token: String = "";
let MAINTENANCE = false;
let server = "quickdev1";
let apiDetails: apiDetails = {
  base_url,
  headers,
  callApi,
  urls,
  MAINTENANCE,
  server,
  token
};


// function login(){
//   describe('LOGIN API',()=>{

//     beforeAll(async()=>{
//       // Set up any data or dependencies needed for your tests
//     })

//     test('LOGIN API',async()=>{
//       const data = await affliateWriterApi(apiDetails,"login")
//       if( MAINTENANCE) {
//         expect(data).toHaveProperty("success",false);
//         expect(data).toHaveProperty("message");
//         expect(data).toHaveProperty("data");
//         expect(data).toHaveProperty("display");
//       } else {
//         expect(data).toHaveProperty("success",true);
//         expect(data).toHaveProperty("message");
//         expect(data).toHaveProperty("data");
//         expect(data).toHaveProperty("display");
//       }
//     })
//   })
//   console.log("HELLO WORLD")
//   return true;
// }


function runTest() {
  describe('AFTER LOGIN API TESTS', () => {

    function dataValidation(data: any){
      if( MAINTENANCE) {
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
      return true;

    }

    beforeAll(async () => {
      // Set up any data or dependencies needed for your tests
    });

    test('LOGIN API', async()=>{
      const data = await affliateWriterApi(apiDetails,"login")
      apiDetails.token = data.data.token;
      dataValidation(data);
    })

    test('JOIN LOBBY API', async () => {
      const data = await gameWriterApi(apiDetails,"joinlobby");
      dataValidation(data);
    });

    test('LEADERBOARD API', async () => {
      const data = await gameReaderApi(apiDetails,"leaderboard");
      dataValidation(data);
    });

    test('GAME TOOLS API', async () => {
      const data = await gameReaderApi(apiDetails,"gameTools");
      dataValidation(data);
    });

  });
  return true;
}


async.waterfall([
    runTest
  ]
  ,(error?: Error | null, finalResult?: Boolean) => {
    console.log("HELLO WORLD")
    if (error) {
      console.log(error);
    } else {
      console.log("Waterfall Completed:", finalResult);
    }
});

