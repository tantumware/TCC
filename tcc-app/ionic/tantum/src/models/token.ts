import {Buffer} from 'buffer';

declare var System: any;

export class TokenHelper {

    static encodeToken(plainMessage: string): any {
        let aux;
        let hex = Buffer(plainMessage).toString('hex');
        System.import('hashids')
            .then(x => aux = x.encodeHex(hex));

        return aux;
    }

    static decodeToken(hashedMessage: string): any {
        let decodedHex;
        System.import('hashids')
            .then(x => decodedHex = x.decodeHex(hashedMessage));

        return Buffer(decodedHex, 'hex').toString('utf8');;
    }

}