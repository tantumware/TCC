var aesjs = require('aes-js');

// An example 128-bit key
var key = Uint8Array.from("p0fp#Tn5y8732O!L", (x)=>x.charCodeAt(0));

// The initialization vector (must be 16 bytes)
var iv = Uint8Array.from("xS5Qm39GG@MWFa86", (x)=>x.charCodeAt(0));

// Convert text to bytes (text must be a multiple of 16 bytes)
var text = 'TextMustBe16Byte';
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var encryptedBytes = aesCbc.encrypt(textBytes);

console.log()// fazer o base 64
// To print or store the binary data, you may convert it to hex
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log(encryptedHex);
// "104fb073f9a131f2cab49184bb864ca2"

// When ready to decrypt the hex string, convert it back to bytes
var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

// The cipher-block chaining mode of operation maintains internal
// state, so to decrypt a new instance must be instantiated.
var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);

// Convert our bytes back into text
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
console.log(decryptedText);
// "TextMustBe16Byte"