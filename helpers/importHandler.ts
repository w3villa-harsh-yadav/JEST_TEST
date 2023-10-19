import base_url from './../constants/base-url.json';
import headers from './../constants/headers.json';
import {callApi} from './../Apis/axiosCall';
import urls from './../constants/urls.json';
import { affliateWriterSuit } from '../test_suites/affliateWriterSuit';
import { gameReaderSuit } from '../test_suites/gameReaderSuit';
import { gameWriterSuit } from '../test_suites/gameWriterSuit';
import responses from '../constants/responses.json';

let token: String = "";
let MAINTENANCE = false;
let server = "quickdev1";

// Type for ApiDetails
type apiDetails = {
  base_url:Object,
  headers: Object,
  callApi: Function,
  urls: Object,
  responses: Object,
  MAINTENANCE: Boolean,
  server:String,
  token: String
};

let apiDetails: apiDetails = {
  base_url,
  headers,
  callApi,
  urls,
  MAINTENANCE,
  server,
  token,
  responses
};

export let config = {
  affliateWriterSuit,
  gameReaderSuit,
  gameWriterSuit,
  apiDetails
}
