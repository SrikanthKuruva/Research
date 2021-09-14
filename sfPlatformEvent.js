import {sfAuth} from './sfAuth.js'
import https from 'https';

class PlatformEventUtility{
    constructor(){}
    fireEvent(){
        sfAuth.getAccessToken()
        .then(oAuthResponse => {
            //console.log(oAuthResponse);
            let instance_url = new URL(oAuthResponse.instance_url);
            let options = {
                method: 'POST',
                hostname: instance_url.hostname,
                //port: 443, //not necessary
                path: '/services/data/v52.0/sobjects/sensor_information__e',
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': `${oAuthResponse.token_type} ${oAuthResponse.access_token}`
                }
            };
            let data = {
              "temperature__c": 78.98,
            };

            let oRequest = new https.request(options, oResponse =>{
                console.log(oResponse.statusCode);
                let responseBody='';
                oResponse.on('data', dataChunk => responseBody += dataChunk);
                oResponse.on('end', () => {
                    console.log(responseBody);
                })
            });
            oRequest.write(JSON.stringify(data));
            oRequest.end();
        })
        .catch(error =>{
            console.log(error);
            throw new Error(error);
        });
    }
}

let oPlatformEventUtility = new PlatformEventUtility();
oPlatformEventUtility.fireEvent();

