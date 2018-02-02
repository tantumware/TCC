import { Buffer } from 'buffer';
import { Hashids } from 'hashids/dist/hashids';

declare var System: any;

export class TokenHelper {

    static encodeToken(plainMessage: string): any {
        var hashids = new Hashids("this is my salt", 16);
        // let aux;
        // let hex = Buffer.from(plainMessage).toString('hex');
        // aux = hash.encodeHex(hex)

        return "aux";
    }

    static decodeToken(hashedMessage: string): any {
        let decodedHex;
        // decodedHex = Buffer.from(hash.decodeHex(hashedMessage), 'hex').toString('utf8')

        return "decodedHex";
    }

}