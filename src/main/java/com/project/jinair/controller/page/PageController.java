package com.project.jinair.controller.page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/pages")
public class PageController {

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
    // 코로나
    @RequestMapping("/index/covid19Info")
    public ModelAndView covid19Info() {
        return new ModelAndView("/userpage/pages/index/covid19Info")
                .addObject("code", "covid19Info");
    }
    //-------------------------------------------------------------------------------------------

    // 로그인
    @RequestMapping("/mypage/login")
    public ModelAndView login() {
        return new ModelAndView("/userpage/pages/mypage/login/login")
                .addObject("code", "login");
    }

    // 아이디/비밀번호 찾기
    @RequestMapping("/mypage/find_info")
    public ModelAndView findInfo() {
        return new ModelAndView("/userpage/pages/mypage/login/find_info")
                .addObject("code", "findInfo");
    }

    // 아이디 찾기
    @RequestMapping("/mypage/find_id")
    public ModelAndView findId() {
        return new ModelAndView("/userpage/pages/mypage/login/findId")
                .addObject("code", "findId");
    }
    // 비밀번호 찾기
    @RequestMapping("/mypage/find_pw")
    public ModelAndView findPw() {
        return new ModelAndView("/userpage/pages/mypage/login/findPw")
                .addObject("code", "findPw");
    }
    // 일치하는 회원정보 없음
    @RequestMapping("/mypage/noResult")
    public ModelAndView noResult() {
        return new ModelAndView("/userpage/pages/mypage/login/noResult")
                .addObject("code", "noResult");
    }

    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------
    // 예약
    // 사용자 항공권 예약 getAvailabilityList
    @RequestMapping("/getAvailabilityList")
    public ModelAndView getAvailabilityList(){
        return new ModelAndView("/userpage/pages/payment/getAvailabilityList")
                .addObject("code", "getAvailabilityList");
    }
    // 사용자 항공권 예약 registerPassenger
    @RequestMapping("/registerPassenger")
    public ModelAndView registerPassenger(){
        return new ModelAndView("/userpage/pages/payment/registerPassenger")
                .addObject("code", "registerPassenger");
    }
    // 사용자 엑스트라 페이지
    @RequestMapping("/extras")
    public ModelAndView extra() {
        return new ModelAndView("/userpage/pages/payment/extras")
                .addObject("code", "extra");
    }
    // 엑스트라 보험 인수 제한 국가
    @RequestMapping("/extras/restricted")
    public ModelAndView restrictedCountry() {
        return new ModelAndView("/userpage/pages/payment/restrictedCountry")
                .addObject("code", "restrictedCountry");
    }
    // 사용자 예약 취소
    @RequestMapping("/cancel")
    public ModelAndView cancel(){
        return new ModelAndView("/userpage/pages/payment/cancel_booking")
                .addObject("code", "cancel_booking");
    }
    // 사용자 예약 취소 완료
    @RequestMapping("/cancel/complete")
    public ModelAndView cancelComplete() {
        return new ModelAndView("/userpage/pages/payment/completePayment")
                .addObject("code", "completePayment");
    }
    // 사용자 결제 완료
    @RequestMapping("/complete")
    public ModelAndView complete() {
        return new ModelAndView("/userpage/pages/payment/complete")
                .addObject("code", "complete");
    }

    // 최저가 항공권
    @RequestMapping("/reservation/lcc")
    public ModelAndView nowMoment() {
        return new ModelAndView("/userpage/pages/reservation/lccpage/lcc")
                .addObject("code", "pointList");
    }
    // 운항정보
    @RequestMapping("/reservation/flight")
    public ModelAndView flight() {
        return new ModelAndView("/userpage/pages/reservation/flight_info/flight")
                .addObject("code", "flight");
    }
    // 운항정보 결과
    @RequestMapping("/reservation/iframe")
    public ModelAndView iframe() {
        return new ModelAndView("/userpage/pages/reservation/flight_info/iframe")
                .addObject("code", "iframe");
    }
    // 운임안내
    @RequestMapping("/reservation/fareRule")
    public ModelAndView fareRule() {
        return new ModelAndView("/userpage/pages/reservation/freight_info/fareRule")
                .addObject("code", "fareRule");
    }
    // 운임안내 -> 법적고지문
    @RequestMapping("/reservation/fareRule/eTicket")
    public ModelAndView eTicket() {
        return new ModelAndView("/userpage/pages/reservation/freight_info/eTicket")
                .addObject("code", "eTicket");
    }
    // 할인안내
    @RequestMapping("/reservation/discount")
    public ModelAndView discount() {
        return new ModelAndView("/userpage/pages/reservation/discount_info/discount")
                .addObject("code", "discount");
    }
    //-------------------------------------------------------------------------------------------

    /* 서비스카운트 */
    // aircraft
    // cabinShopping
    @RequestMapping("/index/cabinShopping")
    public ModelAndView cabinShopping() {
        return new ModelAndView("/Userpage/pages/serviceCount/aircraft/cabinShopping")
                .addObject("code", "cabinShopping");
    }
    // eventflight
    @RequestMapping("/index/eventflight")
    public ModelAndView eventflight() {
        return new ModelAndView("/Userpage/pages/serviceCount/aircraft/eventflight")
                .addObject("code", "eventflight");
    }
    // guide
    @RequestMapping("/index/guide")
    public ModelAndView guide() {
        return new ModelAndView("/Userpage/pages/serviceCount/aircraft/guide")
                .addObject("code", "guide");
    }
    // jiniInsight
    @RequestMapping("/index/jiniInsight")
    public ModelAndView jiniInsight() {
        return new ModelAndView("/Userpage/pages/serviceCount/aircraft/jiniInsight")
                .addObject("code", "jiniInsight");
    }
    // taxFree
    @RequestMapping("/index/taxFree")
    public ModelAndView taxFree() {
        return new ModelAndView("/Userpage/pages/serviceCount/aircraft/taxFree")
                .addObject("code", "taxFree");
    }

    // airport
    // arrivalcard
    @RequestMapping("/index/arrivalcard")
    public ModelAndView arrivalcard() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/arrivalcard")
                .addObject("code", "arrivalcard");
    }
    // baggage
    @RequestMapping("/index/baggage")
    public ModelAndView baggage() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/baggage")
                .addObject("code", "baggage");
    }
    // checkin_login
    @RequestMapping("/index/checkin_login")
    public ModelAndView checkin_login() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/checkin_login")
                .addObject("code", "checkin_login");
    }
    // checkinfo
    @RequestMapping("/index/checkinfo")
    public ModelAndView checkinfo() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/checkinfo")
                .addObject("code", "checkinfo");
    }
    // checkinfo_list
    @RequestMapping("/index/checkinfo_list")
    public ModelAndView checkinfo_list() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/checkinfo_list")
                .addObject("code", "checkinfo_list");
    }
    // counter
    @RequestMapping("/index/counter")
    public ModelAndView counter() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/counter")
                .addObject("code", "counter");
    }
    // help
    @RequestMapping("/index/help")
    public ModelAndView help() {
        return new ModelAndView("/Userpage/pages/serviceCount/airport/help")
                .addObject("code", "help");
    }

    // optional

    // airlineFood
    @RequestMapping("/index/airlineFood")
    public ModelAndView airlineFood() {
        return new ModelAndView("/Userpage/pages/serviceCount/optional/airlineFood")
                .addObject("code", "airlineFood");
    }
    // bundle
    @RequestMapping("/index/bundle")
    public ModelAndView bundle() {
        return new ModelAndView("/Userpage/pages/serviceCount/optional/bundle")
                .addObject("code", "bundle");
    }
    // jiniPlay
    @RequestMapping("/index/jiniPlay")
    public ModelAndView jiniPlay() {
        return new ModelAndView("/Userpage/pages/serviceCount/optional/jiniPlay")
                .addObject("code", "jiniPlay");
    }
    // lounge
    @RequestMapping("/index/lounge")
    public ModelAndView lounge() {
        return new ModelAndView("/Userpage/pages/serviceCount/optional/lounge")
                .addObject("code", "lounge");
    }
    // lounge
    @RequestMapping("/index/seat")
    public ModelAndView seat() {
        return new ModelAndView("/Userpage/pages/serviceCount/optional/seat")
                .addObject("code", "seat");
    }
    /* 서비스 카운트 끝 */


    //-------------------------------------------------------------------------------------------

    // 나비포인트
    @RequestMapping("/point")
    public ModelAndView point() {
        return new ModelAndView("/userpage/pages/nabipoint/pointList")
                .addObject("code", "pointList");
    }
    //-------------------------------------------------------------------------------------------

    // 부가서비스 액티비티
    @RequestMapping("/optional/activity")
    public ModelAndView optional() {
        return new ModelAndView("/userpage/pages/optional/activity/activity")
                .addObject("code", "activity");
    }
    // 부가서비스 호텔
    @RequestMapping("/optional/hotel")
    public ModelAndView hotel() {
        return new ModelAndView("/userpage/pages/optional/hotel/hotel")
                .addObject("code", "hotel");
    }
    // 부가서비스 여행안심서비스
    @RequestMapping("/optional/insurance")
    public ModelAndView insurance() {
        return new ModelAndView("/userpage/pages/optional/insurance/insurance")
                .addObject("code", "insurance");
    }
    // 부가서비스 cubb 해외여행보험
    @RequestMapping("/optional/insurance2")
    public ModelAndView insurance2() {
        return new ModelAndView("/userpage/pages/optional/insurance/chubb")
                .addObject("code", "chubb");
    }
    // 부가서비스 Assistcard여행토탈케어
    @RequestMapping("/optional/insurance3")
    public ModelAndView insurance3() {
        return new ModelAndView("/userpage/pages/optional/insurance/insurance3")
                .addObject("code", "insurance3");
    }
    // 부가서비스 jinipass
    @RequestMapping("/optional/jinipass")
    public ModelAndView jinipass() {
        return new ModelAndView("/userpage/pages/optional/jinipass/jinipass")
                .addObject("code", "jinipass");
    }
    // 부가서비스 차량서비스
    @RequestMapping("/optional/rentcar")
    public ModelAndView rentcar() {
        return new ModelAndView("/userpage/pages/optional/rentcar/rentcar")
                .addObject("code", "rentcar");
    }
    // 프로모션 카드
    @RequestMapping("/promotion/card_exchange")
    public ModelAndView card() {
        return new ModelAndView("/userpage/pages/promotion/card_exchange/associatedCard")
                .addObject("code", "associatedCard");
    }
    // 프로모션 이벤트
    @RequestMapping("/promotion/event")
    public ModelAndView event() {
        return new ModelAndView("/userpage/pages/promotion/event/nowLeave")
                .addObject("code", "nowLeave");
    }
    // 프로모션 지니쿠폰
    @RequestMapping("/promotion/coupon")
    public ModelAndView jinicoupon() {
        return new ModelAndView("/userpage/pages/promotion/jinicoupon/jiniCoupon")
                .addObject("code", "jinicoupon");
    }





    //-------------------------------------------------------------------------------------------
    // admin_index
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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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
    //-------------------------------------------------------------------------------------------

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