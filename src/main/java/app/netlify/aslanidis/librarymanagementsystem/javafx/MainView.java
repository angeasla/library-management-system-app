package app.netlify.aslanidis.librarymanagementsystem.javafx;

import app.netlify.aslanidis.librarymanagementsystem.util.ServerChecker;
import javafx.application.Platform;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.Priority;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class MainView {

    public void showMainStage(Stage primaryStage) {
        primaryStage.setTitle("Library Management System");
		primaryStage.getIcons().add(new Image(getClass().getResource("/static/assets/logo-no-background.png").toExternalForm()));

        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();
        VBox.setVgrow(webView, Priority.ALWAYS);

        ImageView loadingImageView = new ImageView(new Image(getClass().getResource("/loading.jpg").toExternalForm()));
        loadingImageView.setPreserveRatio(true);
        loadingImageView.setFitHeight(500);

        StackPane root = new StackPane(webView, loadingImageView);

        Scene scene = new Scene(root, 1400, 900);
        primaryStage.setScene(scene);
        primaryStage.show();

        new Thread(() -> {
            while (!ServerChecker.isServerAvailable("http://localhost:8080")) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    return;
                }
            }
            Platform.runLater(() -> {
                webEngine.load("http://localhost:8080");
                root.getChildren().remove(loadingImageView);
            });
        }).start();
    }
}
