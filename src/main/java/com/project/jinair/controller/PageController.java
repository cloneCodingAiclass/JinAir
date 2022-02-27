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

    @RequestMapping("/admin/cm_list")
    public ModelAndView cm_list() {
        return new ModelAndView("/adminpage/pages/cm/cm_list")
                .addObject("code", "cm_list");
    }

    @RequestMapping("/admin/cm_list/cm_detail")
    public ModelAndView cm_detail() {
        return new ModelAndView("/adminpage/pages/cm/cm_detail")
                .addObject("code", "cm_detail");
    }

    @RequestMapping("/admin/cm_list/cm_modify")
    public ModelAndView cm_modify() {
        return new ModelAndView("/adminpage/pages/cm/cm_modify")
                .addObject("code", "cm_modify");
    }

    @RequestMapping("/admin/item")
    public ModelAndView item() {
        return new ModelAndView("/adminpage/pages/item/item")
                .addObject("code", "item");
    }

    @RequestMapping("/admin/item/itemadd")
    public ModelAndView itemadd() {
        return new ModelAndView("/adminpage/pages/item/itemadd")
                .addObject("code", "itemadd");
    }
}
