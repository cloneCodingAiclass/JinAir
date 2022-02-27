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

    // faq 메인
    @RequestMapping("/admin/faq_main")
    public ModelAndView faqMain() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main")
                .addObject("code", "faq_main");
    }
    @RequestMapping("/admin/faq_main1")
    public ModelAndView faqMain1() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main1")
                .addObject("code", "faq_main1");
    }
    @RequestMapping("/admin/faq_main2")
    public ModelAndView faqMain2() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main2")
                .addObject("code", "faq_main2");
    }
    @RequestMapping("/admin/faq_main3")
    public ModelAndView faqMain3() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main3")
                .addObject("code", "faq_main3");
    }
    @RequestMapping("/admin/faq_main4")
    public ModelAndView faqMain4() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main4")
                .addObject("code", "faq_main4");
    }
    @RequestMapping("/admin/faq_main5")
    public ModelAndView faqMain5() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main5")
                .addObject("code", "faq_main5");
    }

    // faq 수정
    @RequestMapping("/admin/faq_edit")
    public ModelAndView faqEdit() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_edit")
                .addObject("code", "faq_edit");
    }

    // faq 작성
    @RequestMapping("/admin/faq_write")
    public ModelAndView faqWrite() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_write")
                .addObject("code", "faq_write");
    }

    // qna 메인
    @RequestMapping("/admin/qna_main")
    public ModelAndView qnaMain() {
        return new ModelAndView("/adminpage/pages/inquiry/qna_main")
                .addObject("code", "qna_main");
    }

    // qna 댓글
    @RequestMapping("/admin/qna_reply")
    public ModelAndView qnaReply() {
        return new ModelAndView("/adminpage/pages/inquiry/qna_reply")
                .addObject("code", "qna_reply");
    }

    // qna 뷰
    @RequestMapping("/admin/qna_view")
    public ModelAndView qnaView() {
        return new ModelAndView("/adminpage/pages/inquiry/qna_view")
                .addObject("code", "qna_view");
    }




}
