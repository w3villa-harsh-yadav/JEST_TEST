import { validators } from './validators';
export const responseValidation = (MAINTENANCE: boolean ,responseData: any,verifiedData: any)=>{
  if( MAINTENANCE) {
    expect(responseData).toHaveProperty("success",false);
    expect(responseData).toHaveProperty("message");
    expect(responseData).toHaveProperty("data");
    expect(responseData).toHaveProperty("display");
  } else {
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
  }
}
