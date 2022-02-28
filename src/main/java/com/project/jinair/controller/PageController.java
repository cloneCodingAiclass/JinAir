package com.project.jinair.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/pages")
public class PageController {


    // 마이페이지
    @RequestMapping("/index/addQna")
    public ModelAndView addQna() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/add_qna")
                .addObject("code", "add_qna");
    }
    @RequestMapping("/index/faqList")
    public ModelAndView faqList() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/faq_list")
                .addObject("code", "faq_list");
    }
    @RequestMapping("/index/mypageCancelService")
    public ModelAndView mypageCancelService() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_cancel_service")
                .addObject("code", "Mypage_cancel_service");
    }
    @RequestMapping("/index/mypageCoupons")
    public ModelAndView mypageCoupons() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_coupons")
                .addObject("code", "Mypage_coupons");
    }
    @RequestMapping("/index/mypageEdit")
    public ModelAndView mypageEdit() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_edit")
                .addObject("code", "Mypage_edit");
    }
    @RequestMapping("/index/mypageGetReservationDetail")
    public ModelAndView mypageGetReservationDetail() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_getReservationDetail")
                .addObject("code", "Mypage_getReservationDetail");
    }
    @RequestMapping("/index/mypageMain")
    public ModelAndView mypageMain() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_main")
                .addObject("code", "Mypage_main");
    }
    @RequestMapping("/index/mypagePoint")
    public ModelAndView mypagePoint() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_point")
                .addObject("code", "Mypage_point");
    }
    @RequestMapping("/index/mypageQna")
    public ModelAndView mypageQna() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/Mypage_qna")
                .addObject("code", "Mypage_qna");
    }
    @RequestMapping("/index/passwordEdit")
    public ModelAndView passwordEdit() {
        return new ModelAndView("/userpage/pages/mypage/mypageDetail/password_edit")
                .addObject("code", "password_edit");
    }

    // 조인
    @RequestMapping("/index/joinConfirm")
    public ModelAndView joinConfirm() {
        return new ModelAndView("/userpage/pages/mypage/join/join_confirm")
                .addObject("code", "join_confirm");
    }
    @RequestMapping("/index/joinForm")
    public ModelAndView joinForm() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm")
                .addObject("code", "joinForm");
    }
    @RequestMapping("/index/joinGate")
    public ModelAndView joinGate() {
        return new ModelAndView("/userpage/pages/mypage/join/joinGate")
                .addObject("code", "joinGate");
    }
    @RequestMapping("/index/termsAgree")
    public ModelAndView termsAgree() {
        return new ModelAndView("/userpage/pages/mypage/join/termsAgree")
                .addObject("code", "termsAgree");
    }
    // 아이프레임 joinForm_popup
    @RequestMapping("/index/termsAgree/popup1")
    public ModelAndView popup1() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm_popup1")
                .addObject("code", "joinForm_popup1");
    }
    @RequestMapping("/index/termsAgree/popup2")
    public ModelAndView popup2() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm_popup2")
                .addObject("code", "joinForm_popup2");
    }
    @RequestMapping("/index/termsAgree/popup3")
    public ModelAndView popup3() {
        return new ModelAndView("/userpage/pages/mypage/join/joinForm_popup3")
                .addObject("code", "joinForm_popup3");
    }

    // 사용자 인덱스
    @RequestMapping("/index")
    public ModelAndView index() {
        return new ModelAndView("/userpage/pages/index/index")
                .addObject("code", "index");
    }
    // 왕복달력
    @RequestMapping("/index/cal")
    public ModelAndView Cal() {
        return new ModelAndView("/userpage/pages/cal/cal")
                .addObject("code", "cal");
    }
    // 다구간달력
    @RequestMapping("/index/multical")
    public ModelAndView multiCal() {
        return new ModelAndView("/userpage/pages/cal/multical")
                .addObject("code", "multical");
    }
    // 편도달력
    @RequestMapping("/index/onewaycal")
    public ModelAndView oneWayCal() {
        return new ModelAndView("/userpage/pages/cal/onewaycal")
                .addObject("code", "onewaycal");
    }

    @RequestMapping("/admin_index")
    public ModelAndView adminIndex() {
        return new ModelAndView("/adminpage/pages/admin_index")
                .addObject("code", "admin_index");
    }

    // admin 스케줄 상세
    @RequestMapping("/admin/scheduleResultInfo")
    public ModelAndView scheduleResultInfo() {
        return new ModelAndView("/adminpage/pages/schedule/sc_resultinfo")
                .addObject("code", "sc_resultinfo");
    }
    // admin 스케줄 검색
    @RequestMapping("/admin/scheduleResult")
    public ModelAndView scheduleResult() {
        return new ModelAndView("/adminpage/pages/schedule/sc_result")
                .addObject("code", "sc_result");
    }
    // admin 스케줄 등록
    @RequestMapping("/admin/scheduleRegist")
    public ModelAndView scheduleRegist() {
        return new ModelAndView("/adminpage/pages/schedule/sc_regist")
                .addObject("code", "sc_regist");
    }
    // admin 스케줄 목록
    @RequestMapping("/admin/scheduleList")
    public ModelAndView scheduleList() {
        return new ModelAndView("/adminpage/pages/schedule/sc_list")
                .addObject("code", "sc_list");
    }
    // admin 항공기 등록
    @RequestMapping("/admin/aircraftRegist")
    public ModelAndView aircraftRegist() {
        return new ModelAndView("/adminpage/pages/schedule/aircraft_regist")
                .addObject("code", "aircraft_regist");
    }
    // admin 항공기 조회
    @RequestMapping("/admin/aircraftList")
    public ModelAndView aircraftList() {
        return new ModelAndView("/adminpage/pages/schedule/aircraft_list")
                .addObject("code", "aircraft_list");
    }


    // reservation
    // 운항별 예약자 조회
    @RequestMapping("/admin/rs_index")
    public ModelAndView rsIndex() {
        return new ModelAndView("/adminpage/pages/reservation/rs_index")
                .addObject("code", "rs_index");
    }
    // 운항별 예약자 조회 결과
    @RequestMapping("/admin/rs_result")
    public ModelAndView rsResult() {
        return new ModelAndView("/adminpage/pages/reservation/rs_result")
                .addObject("code", "rs_result");
    }
    // 예약자 명 조회 결과
    @RequestMapping("/admin/rs_sch_result")
    public ModelAndView rsSchResult() {
        return new ModelAndView("/adminpage/pages/reservation/rs_sch_result")
                .addObject("code", "rs_sch_result");
    }
    // 예약자 명 조회
    @RequestMapping("/admin/rs_sch")
    public ModelAndView rsSch() {
        return new ModelAndView("/adminpage/pages/reservation/rs_sch")
                .addObject("code", "rs_sch");
    }
    // 운항편(LJ438) 예약자 상세정보
    @RequestMapping("/admin/rs_user_info")
    public ModelAndView rsUserInfo() {
        return new ModelAndView("/adminpage/pages/reservation/rs_user_info")
                .addObject("code", "rs_user_info");
    }
    // 운항편(LJ438) 예약자 조회
    @RequestMapping("/admin/rs_user")
    public ModelAndView rsUser() {
        return new ModelAndView("/adminpage/pages/reservation/rs_user")
                .addObject("code", "rs_user");
    }


    // 고객관리
    // 고객관리 조회
    @RequestMapping("/admin/cm_list")
    public ModelAndView cmList() {
        return new ModelAndView("/adminpage/pages/cm/cm_list")
                .addObject("code", "cm_list");
    }
    // 고객관리 상세상세
    @RequestMapping("/admin/cm_list/cm_detail")
    public ModelAndView cmDetail() {
        return new ModelAndView("/adminpage/pages/cm/cm_detail")
                .addObject("code", "cm_list");
    }
    // 고객정보 수정
    @RequestMapping("/admin/cm_list/cm_modify")
    public ModelAndView cmModify() {
        return new ModelAndView("/adminpage/pages/cm/cm_modify")
                .addObject("code", "cm_modify");
    }


    // 유실물
    // 유실물 조회
    @RequestMapping("/admin/item")
    public ModelAndView item() {
        return new ModelAndView("/adminpage/pages/item/item")
                .addObject("code", "item");
    }
    // 유실물 추가
    @RequestMapping("/admin/item/itemadd")
    public ModelAndView itemAdd() {
        return new ModelAndView("/adminpage/pages/item/itemadd")
                .addObject("code", "itemadd");
    }


    // 공지사항
    @RequestMapping("/admin/notice")
    public ModelAndView notice(){
        return new ModelAndView("/adminpage/pages/notice/notice")
                .addObject("code", "notice");
    }
    @RequestMapping("/admin/nt_modify")
    public ModelAndView ntModify(){
        return new ModelAndView("/adminpage/pages/notice/nt_modify")
                .addObject("code", "ntModify");
    }
    @RequestMapping("/admin/nt_view")
    public ModelAndView ntView(){
        return new ModelAndView("/adminpage/pages/notice/nt_view")
                .addObject("code", "ntView");
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
    // 공지 작성
    @RequestMapping("/admin/nt_write")
    public ModelAndView ntWrite() {
        return new ModelAndView("/adminpage/pages/notice/nt_write")
                .addObject("code", "nt_write");
    }


    /* 지니 쿠폰 */
    @RequestMapping("/admin/couponadd")
    public ModelAndView couponAdd() {
        return new ModelAndView("/adminpage/pages/coupon/couponadd")
                .addObject("code", "couponAdd");
    }
    @RequestMapping("/admin/usecouponlist")
    public ModelAndView useCouponList() {
        return new ModelAndView("/adminpage/pages/coupon/usecouponlist")
                .addObject("code", "useCouponList");
    }


    /* 지니 매거진 */
    @RequestMapping("/admin/genielist")
    public ModelAndView genieList() {
        return new ModelAndView("/adminpage/pages/magazine/genieList")
                .addObject("code", "genieList");
    }
    @RequestMapping("/admin/genielist_add")
    public ModelAndView genieListAdd() {
        return new ModelAndView("/adminpage/pages/magazine/genieList_add")
                .addObject("code", "genieListAdd");
    }
    @RequestMapping("/admin/genielist_edit")
    public ModelAndView genieListEdit() {
        return new ModelAndView("/adminpage/pages/magazine/genieList_edit")
                .addObject("code", "genieListEdit");
    }
    @RequestMapping("/admin/genielist_view")
    public ModelAndView genieListView() {
        return new ModelAndView("/adminpage/pages/magazine/genieList_view")
                .addObject("code", "genieListView");
    }



}
