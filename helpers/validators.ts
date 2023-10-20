import joi from 'joi';
export const validators : any = {

    emailValidator:(key:String,email:string)=>{
        let pass = joi.string().email().required().validate(email);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    tokenValidator:(key:String,token:String)=>{
        let pass = joi.string().regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/).required().validate(token);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    mobileValidator:(key:String,number:String)=>{
        let pass = joi.string().allow(null).length(10).validate(number);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    primaryIdValidator:(key:String,id:Number)=>{
        let pass = joi.number().strict().integer().min(0).validate(id);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    userIdValidator:(key:String,id:Number)=>{
        let pass = joi.number().strict().integer().min(0).validate(id);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    memberIdValidator:(key:String,id:Number)=>{
        let pass = joi.number().strict().integer().min(0).validate(id);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    linkValidator:(key:String,link:String)=>{
        let pass = joi.string().allow(null).uri({
            scheme: ['https']
        }).validate(link);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    booleanValidator:(key:String,value:Boolean)=>{
        let pass = joi.boolean().strict().validate(value);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    referralLinkValidator:(key:String,link: String)=>{
        let pass = joi.string().regex(/^https:\/\/super\.one(\/[^\s\/]+)*(\/)?$/).required().validate(link);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    timestampValidator:(key:String,value:String)=>{
        let pass = joi.date().strict().timestamp().validate(value);
        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    },

    stringValidator:(key:String,value:String, required:Boolean, min:number, max:number)=>{
        let pass:any;

        if(required){
            pass = joi.string().allow(null).required().validate(value);
        }
        if(min){
            pass = joi.string().allow(null).min(min).validate(value);
        }
        if(max){
            pass = joi.string().allow(null).max(max).validate(value);
        }

        if(pass.error){
            console.error(`KEY:::::::${key}`,pass)
            return false
        }
        return true
    }
}
