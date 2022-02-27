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

    /* 이벤트 */
    @RequestMapping("/admin/evn_ing")
    public ModelAndView evn_ing() {
        return new ModelAndView("/adminpage/pages/event/evn_ing")
                .addObject("code", "evn_ing");
    }
    @RequestMapping("/admin/evn_end")
    public ModelAndView evn_end() {
        return new ModelAndView("/adminpage/pages/event/evn_end")
                .addObject("code", "evn_end");
    }
    @RequestMapping("/admin/evn_view")
    public ModelAndView evn_view() {
        return new ModelAndView("/adminpage/pages/event/evn_view")
                .addObject("code", "evn_view");
    }
    @RequestMapping("/admin/evn_edit")
    public ModelAndView evn_edit() {
        return new ModelAndView("/adminpage/pages/event/evn_edit")
                .addObject("code", "evn_edit");
    }
    @RequestMapping("/admin/evn_win")
    public ModelAndView evn_win() {
        return new ModelAndView("/adminpage/pages/event/evn_win")
                .addObject("code", "evn_win");
    }
    @RequestMapping("/admin/evn_write")
    public ModelAndView evn_write() {
        return new ModelAndView("/adminpage/pages/event/evn_write")
                .addObject("code", "evn_write");
    }

    /* 포인트 */
    @RequestMapping("/admin/usepointlist")
    public ModelAndView usepointlist() {
        return new ModelAndView("/adminpage/pages/point/usepointlist")
                .addObject("code", "usepointlist");
    }
    @RequestMapping("/admin/pointadd")
    public ModelAndView pointadd() {
        return new ModelAndView("/adminpage/pages/point/pointadd")
                .addObject("code", "pointadd");
    }
}
