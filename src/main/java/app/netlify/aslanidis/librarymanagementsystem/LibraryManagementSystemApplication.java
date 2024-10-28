package app.netlify.aslanidis.librarymanagementsystem;

import app.netlify.aslanidis.librarymanagementsystem.javafx.LocalAuthenticationDialog;
import app.netlify.aslanidis.librarymanagementsystem.javafx.LocalAuthenticationService;
import app.netlify.aslanidis.librarymanagementsystem.javafx.MainView;
import app.netlify.aslanidis.librarymanagementsystem.util.ServerChecker;
import javafx.application.Application;
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
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class LibraryManagementSystemApplication extends Application {

	private static ConfigurableApplicationContext springContext;
	private final LocalAuthenticationService localAuthService = new LocalAuthenticationService();
	private final LocalAuthenticationDialog localAuthDialog = new LocalAuthenticationDialog();
	private final ServerChecker serverChecker = new ServerChecker();

	public static void main(String[] args) {
		// Start JavaFX UI - Spring Boot application will be started after successful authentication
		launch(args);
	}
	@Override
	public void start(Stage primaryStage) {
		String savedPasswordHash = localAuthService.readPasswordHash();

		if (savedPasswordHash == null) {
			String newPassword = localAuthDialog.promptForNewPassword();
			if (newPassword != null && !newPassword.isEmpty()) {
				localAuthService.savePasswordHash(localAuthService.hasPassword(newPassword));
				savedPasswordHash = localAuthService.readPasswordHash();
			} else {
				localAuthDialog.showAlert("Password setup failed. Application will close.");
				System.exit(0);
			}
		}

		String password = localAuthDialog.promptForPassword();
		if (password != null && localAuthService.verifyPassword(password, savedPasswordHash)) {
			System.setProperty("DB_PASSWORD", password);

			Thread springThread = new Thread(() -> {
				springContext = SpringApplication.run(LibraryManagementSystemApplication.class);
			});
			springThread.setDaemon(true);
			springThread.start();

			MainView mainView = new MainView();
			mainView.showMainStage(primaryStage);
		} else {
			localAuthDialog.showAlert("Incorrect password. Application will close.");
			System.exit(0);
		}
	}

	@Override
	public void stop() throws Exception {
		if (springContext != null) {
			springContext.close();
		}
		super.stop();
	}
}
