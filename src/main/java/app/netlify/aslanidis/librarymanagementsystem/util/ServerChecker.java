package app.netlify.aslanidis.librarymanagementsystem.util;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class ServerChecker {

    public static boolean isServerAvailable(String url) {
        try {
            HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
            connection.setRequestMethod("HEAD");
            connection.setConnectTimeout(2000);
            connection.connect();
            return connection.getResponseCode() == HttpURLConnection.HTTP_OK;
        } catch (IOException e) {
            return false;
        }
    }
}
