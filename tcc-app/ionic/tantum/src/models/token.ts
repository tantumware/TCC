import { SHA256, AES } from "crypto-js";

export class TokenHelper {

    static encodeToken(plainMessage: string): any {
        return SHA256(plainMessage);
    }

    static decodeToken(hashedMessage: string): any {
        let decodedHex;

        return "decodedHex";
    }

}