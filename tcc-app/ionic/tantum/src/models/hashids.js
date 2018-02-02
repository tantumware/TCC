const Hashids = require('hashids');
const hashids = new Hashids();

function encode(plainMessage) {
    var hex = Buffer(plainMessage).toString('hex');
    return hashids.encodeHex(hex);
}

function decode(hashedMessage) {
    var decodedHex = hashids.decodeHex(hashedMessage);
    return Buffer(decodedHex, 'hex').toString('utf8');
}