package app.netlify.aslanidis.librarymanagementsystem;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class LibraryManagementSystemApplication extends Application {

	private static ConfigurableApplicationContext springContext;

	public static void main(String[] args) {
		// SpringApplication.run(LibraryManagementSystemApplication.class, args);
		// Start Spring Boot
		springContext = SpringApplication.run(LibraryManagementSystemApplication.class, args);

		// Start JavaFX UI
		launch(args);
	}

	@Override
	public void start(Stage primaryStage) throws Exception {
		// Add a little delay to give time to the web server to start
		Thread.sleep(3000);

		// Configure WebView to load Angular frontend
		WebView webView = new WebView();
		WebEngine webEngine = webView.getEngine();

		// Load Angular from embedded Spring Boot (localhost)
		webEngine.load("http://localhost:8080");

		// Set scene and show window
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
