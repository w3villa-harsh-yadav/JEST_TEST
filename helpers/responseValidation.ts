import { validators } from './validators';
export const dataValidation = (MAINTENANCE: boolean ,responseData: any,data: any) => {
    if( MAINTENANCE) {
      expect(responseData).toHaveProperty("success",false);
      expect(responseData).toHaveProperty("message");
      expect(responseData).toHaveProperty("data");
      expect(responseData).toHaveProperty("display");
    } else {
      for(let key in data){
        if(toString.call(data[key]) === "[object Object]"){
          expect(responseData).toHaveProperty(key);
          dataValidation(false,responseData[key],data[key]);
        } else {
          expect(responseData).toHaveProperty(key);
          expect(toString.call(responseData[key])).toBe(toString.call(data[key]));
        }
      }
      return true;
    }
}

export const login = (MAINTENANCE: boolean ,responseData: any,verifiedData: any)=>{
  expect(responseData).toHaveProperty("success",true);
  expect(responseData).toHaveProperty("message", "Logged in with email.");
  expect(responseData).toHaveProperty("display",false);
  expect(responseData).toHaveProperty("data");
  let checkedData = verifiedData.data;
  for(let key in checkedData){
      let keyData = checkedData[key].split(" ");
      let optionalKey = false;
      let optionalKeyPresent = false;
      if(keyData[0] in verifiedData.optional){
        optionalKey = true;
        if(responseData.data[key]){
          optionalKeyPresent = true;
        }
      }
      if(keyData[0] in validators && (!optionalKey || optionalKeyPresent)){
        if(keyData[0] === "stringValidator"){
          expect(validators[keyData[0]](key,responseData.data[key],keyData[1],parseInt(keyData[2]),parseInt(keyData[3]))).toBe(true);
        } else {
          expect(validators[keyData[0]](key,responseData.data[key])).toBe(true);
        }
      } else {
        continue;
      }
  }
  // expect(joi.number().integer().validate(responseData["data"]["id"]).value).toBeDefined();
  // expect(joi.string().length(20).validate(responseData["data"]["firstName"]).value).toBeDefined()
  // expect(joi.string().length(20).validate(responseData["data"]["lastName"]).value).toBeDefined()
  // expect(joi.string().uri({
  //   scheme: ['http', 'https']
  // }).validate(responseData["data"]["imageUrl"]).value).toBeDefined()
  // expect(joi.string().max(50).validate(responseData["data"]["countryName"]).value).toBeDefined()
  // expect(joi.string().allow(null).uri({
  //   scheme: ['http', 'https']
  // }).validate(responseData["data"]["countryFlagImage"]).error).toBeFalsy()
  // expect(joi.boolean().validate(responseData["data"]["mobileNoVerified"]).value).toBeDefined()
  // expect(joi.boolean().validate(responseData["data"]["emailVerified"]).value).toBeDefined()
  // expect(joi.string().max(5).validate(responseData["data"]["countryCode"]).value).toBeDefined()
  // expect(joi.boolean().validate(responseData["data"]["socialDone"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["nextAction"]).value).toBeDefined()
  // expect(joi.number().integer().validate(responseData["data"]["member"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["memberType"]).value).toBeDefined()
  // expect(joi.boolean().validate(responseData["data"]["isPasscodeSet"]).value).toBeDefined()
  // expect(joi.boolean().validate(responseData["data"]["passwordSet"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["userName"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["referralCode"]).value).toBeDefined()
  // expect(joi.string().allow(null).uri({
  //   scheme: ['http', 'https']
  // }).validate(responseData["data"]["referralLink"]).value).toBeDefined()
  // expect(joi.boolean().validate(responseData["data"]["updateReferral"]).value).toBeDefined()
  // expect(joi.boolean().validate(responseData["data"]["isNewUser"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["appLang"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["gameLang"]).value).toBeDefined()
  // expect(joi.string().validate(responseData["data"]["lastLogout"]).value).toBeDefined()
}
