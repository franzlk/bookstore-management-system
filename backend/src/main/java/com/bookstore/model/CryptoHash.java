package com.bookstore.model;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class CryptoHash {
    public static byte[] getSHA(String input) throws NoSuchAlgorithmException
    {
        // Static getInstance method is called with hashing SHA
        MessageDigest md = MessageDigest.getInstance("SHA-256");

        // digest() method called
        // to calculate message digest of an input
        // and return array of byte
        return md.digest(input.getBytes(StandardCharsets.UTF_8));
    }

    public static String toHexString(byte[] hash)
    {
        // Convert byte array into signum representation
        BigInteger number = new BigInteger(1, hash);

        // Convert message digest into hex value
        StringBuilder hexString = new StringBuilder(number.toString(16));

        // Pad with leading zeros
        while (hexString.length() < 32)
        {
            hexString.insert(0, '0');
        }

        return hexString.toString();
    }

    public static String cryptoProtect(String x){
        String convertedString = "";
        try
        {
            convertedString = toHexString(getSHA(x));
        }
        // For specifying wrong message digest algorithms
        catch (NoSuchAlgorithmException e) {
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }
        return convertedString;
    }

    public static void generateTestPasswords(){
        try{
            System.out.println(CryptoHash.toHexString(CryptoHash.getSHA( "password1")));
            System.out.println(CryptoHash.toHexString(CryptoHash.getSHA( "password2")));
            System.out.println(CryptoHash.toHexString(CryptoHash.getSHA( "password3")));
            System.out.println(CryptoHash.toHexString(CryptoHash.getSHA( "password4")));
            System.out.println(CryptoHash.toHexString(CryptoHash.getSHA( "password5")));
        }
        catch (NoSuchAlgorithmException e){
            System.out.println("Exception thrown for incorrect algorithm: " + e);
        }

    }
}