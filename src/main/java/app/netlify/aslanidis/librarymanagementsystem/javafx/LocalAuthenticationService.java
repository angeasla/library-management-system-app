package app.netlify.aslanidis.librarymanagementsystem.javafx;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.io.*;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.security.spec.KeySpec;
import java.util.Base64;

public class LocalAuthenticationService {
    private static final File PASSWORD_FILE = new File("user_password.dat");

    public String hasPassword(String password) {
        try {
            byte[] salt = new byte[16];
            new SecureRandom().nextBytes(salt);
            KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 128);
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            byte[] hash = factory.generateSecret(spec).getEncoded();
            return Base64.getEncoder().encodeToString(salt) + ":" + Base64.getEncoder().encodeToString(hash);
        } catch (Exception e) {
            throw new RuntimeException("Error while hashing password", e);
        }
    }

    public boolean verifyPassword(String password, String storedHash) {
        try {
            String[] parts = storedHash.split(":");
            byte[] salt = Base64.getDecoder().decode(parts[0]);
            byte[] storedHashBytes = Base64.getDecoder().decode(parts[1]);

            KeySpec spec = new PBEKeySpec(password.toCharArray(), salt, 65536, 128);
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
            byte[] testHash = factory.generateSecret(spec).getEncoded();

            return MessageDigest.isEqual(storedHashBytes, testHash);
        } catch (Exception e) {
            return false;
        }
    }

    public void savePasswordHash(String passwordHash) {
        try (FileWriter writer = new FileWriter(PASSWORD_FILE)) {
            writer.write(passwordHash);
        } catch (IOException e) {
            throw new RuntimeException("Could not save password", e);
        }
    }

    public String readPasswordHash() {
        if (!PASSWORD_FILE.exists()) {
            return null;
        }
        try (BufferedReader reader = new BufferedReader(new FileReader(PASSWORD_FILE))) {
            return reader.readLine();
        } catch (IOException e) {
            throw new RuntimeException("Could not read password", e);
        }
    }
}
