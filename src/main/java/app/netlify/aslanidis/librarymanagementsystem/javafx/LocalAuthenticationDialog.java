package app.netlify.aslanidis.librarymanagementsystem.javafx;

import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.VBox;
import javafx.scene.text.Font;
import javafx.stage.Modality;
import javafx.stage.Stage;

public class LocalAuthenticationDialog {

    public String promptForNewPassword() {
        TextInputDialog dialog = new TextInputDialog();
        dialog.setTitle("Set Password");
        dialog.setHeaderText("Please set your application password");
        dialog.setContentText("New Password:");
        return dialog.showAndWait().orElse(null);
    }

    public String promptForPassword() {
        Stage dialog = new Stage();
        dialog.initModality(Modality.APPLICATION_MODAL);
        dialog.setTitle("Library Management System");
        dialog.getIcons().add(new javafx.scene.image.Image(getClass().getResource("/static/assets/logo-no-background.png").toExternalForm()));

        Label label = new Label("Enter your password:");
        label.setFont(new Font("Arial", 16));
        label.setStyle("-fx-font-weight: bold; -fx-text-fill: #333;");
        label.setAlignment(Pos.CENTER);

        PasswordField passwordField = new PasswordField();

        Button submitButton = new Button("Submit");
        submitButton.setStyle(
                "-fx-background-color: #4CAF50; -fx-text-fill: white; -fx-font-size: 14px; " +
                        "-fx-background-radius: 5; -fx-padding: 8 16 8 16;"
        );
        submitButton.setOnAction(e -> dialog.close());

        VBox vbox = new VBox(15, label, passwordField, submitButton);
        vbox.setAlignment(Pos.CENTER);
        vbox.setStyle("-fx-padding: 30; -fx-background-color: #F0F0F0; -fx-border-color: #ccc; -fx-border-radius: 8;");

        Scene scene = new Scene(vbox, 400, 300);
        dialog.setScene(scene);
        dialog.showAndWait();

        return passwordField.getText();
    }

    public void showAlert(String message) {
        Alert alert = new Alert(Alert.AlertType.ERROR, message, ButtonType.OK);
        alert.showAndWait();
    }
}
