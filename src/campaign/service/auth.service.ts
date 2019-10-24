import * as jwt from 'jwt-simple';
import * as rp from 'request-promise';
const curl = new (require('curl-request' ))();

export class AuthService {
    public getJWTToken() : string {
        curl
            .setHeaders([
                'Content-Type: multipart/form-data',
            ])
            .setMultipartBody([{
                name: 'client_id',
                contents: process.env.apiKey,
            }, {
                name: 'client_secret',
                contents: process.env.clientSecret,
            }, {
                name: 'jwt_token',
                contents: process.env.jwtToken,
            }])
            .post('https://ims-na1.adobelogin.com/ims/exchange/jwt/')
            .then(({statusCode, body, headers}) => {
                return body.access_token;
            })
            .catch((e) => {
                console.log(e);
            });
    }

    public getAccessToken() : string {
        const jwtToken = this.getJWTToken();

        const options = {
            method: 'POST',
            uri: 'https://ims-na1.adobelogin.com/ims/exchange/jwt',
            body: {
                client_id: process.env.apiKey,
                client_secret: process.env.clientSecret,
                jwt_token: jwtToken,
            },
        };

        rp(options)
            .then((parsedBody) => {
                return parsedBody.access_token;
            })
            .catch((err) => {
                console.log('error getting access token', err);
            });
        return '';
    }
}
