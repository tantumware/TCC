package com.tantum.app.tantum.helper;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.tomcat.util.buf.HexUtils;
import org.hashids.Hashids;

public class TokenHelper {

	private static final String initVector = "xS5Qm39GG@MWFa86"; // 16 bytes IV
	private static final String key = "p0fp#Tn5y8732O!L";

	public static synchronized boolean validateToken(String token) {
		try {
			String Key = "Something";
			byte[] KeyData = Key.getBytes();
			SecretKeySpec KS = new SecretKeySpec(KeyData, "Blowfish");
			Cipher cipher;
			cipher = Cipher.getInstance("Blowfish");
			cipher.init(Cipher.ENCRYPT_MODE, KS);
		} catch (NoSuchAlgorithmException | NoSuchPaddingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvalidKeyException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public static String encrypt(String value) {
		try {
			/* Derive the key, given password and salt. */
			// SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
			// KeySpec spec = new PBEKeySpec(password.toCharArray(), salt2, 65536, 256);
			// SecretKey tmp = factory.generateSecret(spec);
			// SecretKey secret = new SecretKeySpec(tmp.getEncoded(), "AES");

			SecretKeySpec secret = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));

			/* Encrypt the message. */
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.ENCRYPT_MODE, secret, iv);

			byte[] encrypted = cipher.doFinal(value.getBytes());
			for (byte b : encrypted) {
				System.out.print(Integer.toHexString(b));
			}
			System.out.println("####");

			return Base64.getEncoder().encodeToString(encrypted);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return null;
	}

	public static String decrypt(String encrypted) {
		try {
			// /* Derive the key, given password and salt. */
			// SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
			// KeySpec spec = new PBEKeySpec(password.toCharArray(), salt2, 65536, 256);
			// SecretKey tmp = factory.generateSecret(spec);
			// SecretKey secret = new SecretKeySpec(tmp.getEncoded(), "AES");
			IvParameterSpec iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
			SecretKeySpec secret = new SecretKeySpec(key.getBytes("UTF-8"), "AES");

			/* Decrypt the message, given derived key and initialization vector. */
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			cipher.init(Cipher.DECRYPT_MODE, secret, iv);
			byte[] original = cipher.doFinal(Base64.getDecoder().decode(encrypted));

			return new String(original);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return null;

	}

	public static String hashidEncode(String message) {
		return new Hashids(key).encode(Long.valueOf(message));
	}

	public static String hashidDecode(String message) {
		return String.valueOf(new Hashids(key).decode(message));
	}

	private final static char[] hexArray = "0123456789ABCDEF".toCharArray();

	public static String bytesToHex(byte[] bytes) {
		char[] hexChars = new char[bytes.length * 2];
		for (int j = 0; j < bytes.length; j++) {
			int v = bytes[j] & 0xFF;
			hexChars[j * 2] = hexArray[v >>> 4];
			hexChars[j * 2 + 1] = hexArray[v & 0x0F];
		}
		return new String(hexChars);
	}

	public static void main(String[] args) {
		// String criptografado = encrypt("TextMustBe16Byte");
		// System.out.println(criptografado);
		// System.out.println("-----");
		// System.out.println(decrypt(criptografado));
		String messgae = HexUtils.toHexString("testeeeeeeeeeeeeee".getBytes());
		String decodeHex = new Hashids(key).encodeHex(messgae);
		System.out.println(decodeHex);
		String result = new String(HexUtils.fromHexString(new Hashids(key).decodeHex(decodeHex)));

		System.out.println(result);
	}

}
