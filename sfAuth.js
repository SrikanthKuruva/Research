import https from 'https';
import dotenv from 'dotenv';
const e = dotenv.config();

const getAccessToken = () => {return new Promise((resolve, reject) =>{
    let requestBody = `grant_type=password&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}&username=${process.env.username}&password=${process.env.password}${process.env.securitytoken}`;
    let options = {
        method: 'POST',
        hostname: 'login.salesforce.com',
        path: '/services/oauth2/token',
        port: 443,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    let oRequest = new https.request(options, oResponse => {
        console.log(`Status code is ${oResponse.statusCode}`);
        //console.log('Response Headers are '+JSON.stringify(oResponse.headers, null, 2));
        let responseBody='';
        oResponse.on('data', responseData =>{
            responseBody += responseData;
        });
        oResponse.on('end', ()=>{
            let oResponseBody = JSON.parse(responseBody);
            resolve(oResponseBody);
            // console.log(oResponseBody);
            // let issued_at = oResponseBody.issued_at;
            // let time = new Date().getTime();
            // console.log(typeof time);
            // console.log(typeof issued_at);
            // console.log(new Date(time));
            // console.log(new Date(parseInt(issued_at)));
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
export {getAccessToken as getAccessToken};