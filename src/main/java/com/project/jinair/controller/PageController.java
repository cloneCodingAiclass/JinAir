package com.project.jinair.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/pages")
public class PageController {

    @RequestMapping("/admin_index")
    public ModelAndView adminIndex() {
        return new ModelAndView("/adminpage/pages/admin_index")
                .addObject("code", "admin_index");
    }
}
