import https from 'https';
import dotenv from 'dotenv';
const e = dotenv.config();

class Authentication {

    constructor(){
    }
    getAccessToken(){
        return new Promise((resolve, reject) =>{
            let requestBody = `grant_type=password&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&username=${process.env.username}&password=${process.env.password}${process.env.securitytoken}`;
            let options = {
                method: 'POST',
                hostname: 'login.salesforce.com',
                // port: 443, //not necessary
                path: '/services/oauth2/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            let oRequest = new https.request(options, oResponse => {
                let responseBody='';
                oResponse.on('data', responseData =>{
                    responseBody += responseData;
                });
                oResponse.on('end', ()=>{
                    let oResponseBody = JSON.parse(responseBody);
                    oResponseBody.statusCode = oResponse.statusCode;
                    resolve(oResponseBody);
                });
            });
            oRequest.on('error', errorResponse => {
                console.log(`Error response is ${errorResponse}`);
                reject(JSON.parse(errorResponse));
            });
            oRequest.write(requestBody);
            oRequest.end();
        });
    }
    introspectAccessToken(){}
    refreshAcessToken(){}
}
let oAuthentication = new Authentication();
export {oAuthentication as sfAuth};