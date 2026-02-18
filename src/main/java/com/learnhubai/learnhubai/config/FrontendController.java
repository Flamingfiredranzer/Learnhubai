package com.learnhubai.learnhubai.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FrontendController {

    @GetMapping(value = {
            "/",
            "/blogs/**",
            "/ai-concepts/**",
            "/modern-tools/**",
            "/simple-learning/**",
            "/career-growth/**"
    })
    public String forwardReactRoutes() {
        return "forward:/index.html";
    }
}