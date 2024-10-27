package app.netlify.aslanidis.librarymanagementsystem.webcontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/{path:[^\\\\.]*}")
    public String redirect() {
        return "forward:/index.html ";
    }
}
