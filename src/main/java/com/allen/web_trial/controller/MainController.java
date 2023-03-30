package com.allen.web_trial.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {

    @GetMapping("/controller")
    public String controller(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "controller";
    }
}
