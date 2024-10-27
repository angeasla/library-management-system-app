package app.netlify.aslanidis.librarymanagementsystem;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

import java.nio.file.Paths;

public class LibraryApp extends Application {

    private static ConfigurableApplicationContext springContext;

    public static void main(String[] args) {
        Thread serverThread = new Thread(() -> {
            springContext = new SpringApplicationBuilder(LibraryApp.class)
                    .web(WebApplicationType.SERVLET)  // Start web server
                    .run(args);
        });
        serverThread.start();

        // Start JavaFX application after the server has had time to start
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();
        webEngine.load("http://localhost:8080");  // Load Angular frontend

        Scene scene = new Scene(webView, 1200, 800);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    @Override
    public void stop() throws Exception {
        if (springContext != null) {
            springContext.close();
        }
        super.stop();
    }
}
