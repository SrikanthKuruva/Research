import {getAccessToken} from './sfAuth.js'

getAccessToken()
.then( oAuthResponse => {
    console.log('oAuthResponse::');
    console.log(oAuthResponse);
})
.catch(error =>{console.log(error)});
