package com.project.jinair.controller.page;

import com.project.jinair.model.entity.board.TbMagazine;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.response.board.FaqApiResponse;
import com.project.jinair.model.network.response.board.MagazineApiResponse;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.repository.TbMagazineRepository;
import com.project.jinair.service.MenuService;
import com.project.jinair.service.board.FaqApiLogicService;
import com.project.jinair.service.board.MagazineApiLoginService;
import com.project.jinair.service.board.QnaAnswerApiLogicService;
import com.project.jinair.service.board.QnaApiLogicService;
import com.project.jinair.service.member.AdminApiLoginService;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/pages")
public class PageController {

    @Autowired
    private MenuService menuService;

    @Autowired
    AdminApiLoginService adminApiLoginService;

    @Autowired
    FaqApiLogicService faqApiLogicService;

    @Autowired
    QnaApiLogicService qnaApiLogicService;

    @Autowired
    QnaAnswerApiLogicService qnaAnswerApiLogicService;

    @Autowired
    MagazineApiLoginService magazineApiLoginService;

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
    @RequestMapping("/login")
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
    // admin_login
    @RequestMapping("/admin_login") // pages/admin_login
    public String adminLogin(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate(); // 세션 삭제
        return "/adminpage/pages/admin_login";
    }

    @PostMapping("/admin_enter")
    public ModelAndView adminLoginOk(HttpServletRequest request, String admin_id, String admin_pw, Model model) throws Exception{
        if(adminApiLoginService.IdPwRead(admin_id).getData() != null) {
            if (admin_id.equals(adminApiLoginService.IdPwRead(admin_id).getData().getAdminId()) &&
                    admin_pw.equals(adminApiLoginService.IdPwRead(admin_id).getData().getAdminPw())) {
                HttpSession session = request.getSession();
                String name = adminApiLoginService.IdPwRead(admin_id).getData().getAdminName();
                session.setAttribute("name", name); // 세션 생성
                model.addAttribute("str", (String) session.getAttribute("name"));
                return new ModelAndView("/adminpage/pages/admin_index")
                        .addObject("code", "admin_index")
                        .addObject("menuList", menuService.getadminMenu());
            } else {
                return new ModelAndView("/adminpage/pages/admin_login");
            }
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }


    // admin_index
    @GetMapping("/admin_index")
    public ModelAndView adminIndex(HttpServletRequest request, Model model) throws Exception{
        HttpSession session = request.getSession();
        if((String) session.getAttribute("name") != null) {
            model.addAttribute("str", (String) session.getAttribute("name"));
            return new ModelAndView("/adminpage/pages/admin_index")
                    .addObject("code", "admin_index")
                    .addObject("menuList", menuService.getadminMenu());
        }else{
            return new ModelAndView("/adminpage/pages/admin_login");
        }
    }

    // admin 스케줄 상세
    @RequestMapping("/admin/scheduleResultInfo/{id}")
    public ModelAndView scheduleResultInfo() {
        return new ModelAndView("/adminpage/pages/schedule/sc_resultinfo")
                .addObject("code", "sc_resultinfo")
                .addObject("menuList", menuService.getadminMenu());
    }
    // admin 스케줄 검색
    @RequestMapping("/admin/scheduleResult")
    public ModelAndView scheduleResult() {
        return new ModelAndView("/adminpage/pages/schedule/sc_result")
                .addObject("code", "sc_result")
                .addObject("menuList", menuService.getadminMenu());
    }
    // admin 스케줄 등록
    @RequestMapping("/admin/scheduleRegist")
    public ModelAndView scheduleRegist() {
        return new ModelAndView("/adminpage/pages/schedule/sc_regist")
                .addObject("code", "sc_regist")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("schedule", menuService.adminScheduleMenu());
    }
    // admin 스케줄 목록
    @RequestMapping("/admin/scheduleList")
    public ModelAndView scheduleList() {
        return new ModelAndView("/adminpage/pages/schedule/sc_list")
                .addObject("code", "sc_list")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("schedule", menuService.adminScheduleMenu());
    }
    // admin 항공기 등록
    @RequestMapping("/admin/aircraftRegist")
    public ModelAndView aircraftRegist() {
        return new ModelAndView("/adminpage/pages/schedule/aircraft_regist")
                .addObject("code", "aircraft_regist")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("schedule", menuService.adminScheduleMenu());
    }
    // admin 항공기 조회
    @RequestMapping("/admin/airplane")
    public ModelAndView aircraftList() {
        return new ModelAndView("/adminpage/pages/schedule/aircraft_list")
                .addObject("code", "aircraft_list")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("schedule", menuService.adminScheduleMenu());
    }
    //-------------------------------------------------------------------------------------------

    // reservation
    // 운항별 예약자 조회
    @RequestMapping("/admin/rsIndex")
    public ModelAndView rsIndex() {
        return new ModelAndView("/adminpage/pages/reservation/rs_index")
                .addObject("code", "rs_index")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("reservation", menuService.adminReservationMenu());
    }
    // 운항별 예약자 조회 결과
    @RequestMapping("/admin/rs_result")
    public ModelAndView rsResult() {
        return new ModelAndView("/adminpage/pages/reservation/rs_result")
                .addObject("code", "rs_result")
                .addObject("menuList", menuService.getadminMenu());
    }
    // 예약자 명 조회 결과
    @RequestMapping("/admin/rs_sch_result")
    public ModelAndView rsSchResult() {
        return new ModelAndView("/adminpage/pages/reservation/rs_sch_result")
                .addObject("code", "rs_sch_result")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("reservation", menuService.adminReservationMenu());
    }
    // 예약자 명 조회
    @RequestMapping("/admin/rs_sch")
    public ModelAndView rsSch() {
        return new ModelAndView("/adminpage/pages/reservation/rs_sch")
                .addObject("code", "rs_sch")
                .addObject("menuList", menuService.getadminMenu());
    }
    // 운항편(LJ438) 예약자 상세정보
    @RequestMapping("/admin/rs_user_info")
    public ModelAndView rsUserInfo() {
        return new ModelAndView("/adminpage/pages/reservation/rs_user_info")
                .addObject("code", "rs_user_info")
                .addObject("menuList", menuService.getadminMenu());
    }
    // 운항편(LJ438) 예약자 조회
    @RequestMapping("/admin/rs_user")
    public ModelAndView rsUser() {
        return new ModelAndView("/adminpage/pages/reservation/rs_user")
                .addObject("code", "rs_user")
                .addObject("menuList", menuService.getadminMenu());
    }
    //-------------------------------------------------------------------------------------------

    // 고객관리
    // 고객관리 조회
    @RequestMapping("/admin/cmList")
    public ModelAndView cmList() {
        return new ModelAndView("/adminpage/pages/cm/cm_list")
                .addObject("code", "cm_list")
                .addObject("menuList", menuService.getadminMenu());
    }
    // 고객관리 상세상세
    @RequestMapping("/admin/cm_list/cm_detail/{id}")
    public ModelAndView cmDetail() {
        return new ModelAndView("/adminpage/pages/cm/cm_detail")
                .addObject("code", "cm_detail")
                .addObject("menuList", menuService.getadminMenu());
    }
    // 고객정보 수정
    @RequestMapping("/admin/cm_list/cm_modify/{id}")
    public ModelAndView cmModify() {
        return new ModelAndView("/adminpage/pages/cm/cm_modify")
                .addObject("code", "cm_modify")
                .addObject("menuList", menuService.getadminMenu());
    }
    //-------------------------------------------------------------------------------------------

    // 유실물
    // 유실물 조회
    @RequestMapping("/admin/item")
    public ModelAndView item() {
        return new ModelAndView("/adminpage/pages/item/item")
                .addObject("code", "item")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("item", menuService.adminItemMenu());
    }
    // 유실물 상세내용
    @RequestMapping("/admin/item/detail/{id}")
    public ModelAndView itemDetail() {
        return new ModelAndView("/adminpage/pages/item/itemDetail")
                .addObject("code", "itemDetail")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("item", menuService.adminItemMenu());
    }
    // 유실물 추가
    @RequestMapping("/admin/item/itemadd")
    public ModelAndView itemAdd() {
        return new ModelAndView("/adminpage/pages/item/itemadd")
                .addObject("code", "itemadd")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("item", menuService.adminItemMenu());
    }
    //-------------------------------------------------------------------------------------------

    // 공지사항
    @RequestMapping("/admin/notice")
    @Transactional
    public ModelAndView notice(){
        return new ModelAndView("/adminpage/pages/notice/notice")
                .addObject("code", "notice")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/nt_modify/{id}")
    public ModelAndView ntModify(){
        return new ModelAndView("/adminpage/pages/notice/nt_modify")
                .addObject("code", "ntModify")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/nt_view/{id}")
    @Transactional
    public ModelAndView ntView(){
        return new ModelAndView("/adminpage/pages/notice/nt_view")
                .addObject("code", "ntView")
                .addObject("menuList", menuService.getadminMenu());
    }
    //-------------------------------------------------------------------------------------------

    /* 이벤트 */
    @RequestMapping("/admin/evn_ing")
    public ModelAndView evn_ing() {
        return new ModelAndView("/adminpage/pages/event/evn_ing")
                .addObject("code", "evn_ing")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/evn_end")
    public ModelAndView evn_end() {
        return new ModelAndView("/adminpage/pages/event/evn_end")
                .addObject("code", "evn_end")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/evn_view")
    public ModelAndView evn_view() {
        return new ModelAndView("/adminpage/pages/event/evn_view")
                .addObject("code", "evn_view")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/evn_edit")
    public ModelAndView evn_edit() {
        return new ModelAndView("/adminpage/pages/event/evn_edit")
                .addObject("code", "evn_edit")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/evn_win")
    public ModelAndView evn_win() {
        return new ModelAndView("/adminpage/pages/event/evn_win")
                .addObject("code", "evn_win")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/evn_write")
    public ModelAndView evn_write() {
        return new ModelAndView("/adminpage/pages/event/evn_write")
                .addObject("code", "evn_write")
                .addObject("menuList", menuService.getadminMenu());
    }
    //-------------------------------------------------------------------------------------------

    /* 포인트 */
    @RequestMapping("/admin/usepointlist")
    public ModelAndView usepointlist() {
        return new ModelAndView("/adminpage/pages/point/usepointlist")
                .addObject("code", "usepointlist")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("point", menuService.adminPointMenu());
    }
    @RequestMapping("/admin/pointadd")
    public ModelAndView pointadd() {
        return new ModelAndView("/adminpage/pages/point/pointadd")
                .addObject("code", "pointadd")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("point", menuService.adminPointMenu());
    }
    //-------------------------------------------------------------------------------------------

    // faq 메인
    @RequestMapping("/admin/faq_main")
    public ModelAndView faqMain() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main")
                .addObject("code", "faq_main")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("inquiry", menuService.adminQnaMenu());
    }
    @RequestMapping("/admin/faq_main1")
    public ModelAndView faqMain1() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main1")
                .addObject("code", "faq_main1")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/faq_main2")
    public ModelAndView faqMain2() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main2")
                .addObject("code", "faq_main2")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/faq_main3")
    public ModelAndView faqMain3() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main3")
                .addObject("code", "faq_main3")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/faq_main4")
    public ModelAndView faqMain4() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main4")
                .addObject("code", "faq_main4")
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/faq_main5")
    public ModelAndView faqMain5() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_main5")
                .addObject("code", "faq_main5")
                .addObject("menuList", menuService.getadminMenu());
    }
    // faq 수정
    @RequestMapping("/admin/faq_edit/{id}")
    public ModelAndView faqEdit() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_edit")
                .addObject("code", "faq_edit")
                .addObject("menuList", menuService.getadminMenu());
    }
    // faq 작성
    @RequestMapping("/admin/faq_write")
    public ModelAndView faqWrite() {
        return new ModelAndView("/adminpage/pages/inquiry/faq_write")
                .addObject("code", "faq_write")
                .addObject("menuList", menuService.getadminMenu());
    }
    // qna 뷰
    @GetMapping("/admin/faq_view/{id}")
    public ModelAndView faqView(Model model, @PathVariable(name = "id") Long id) throws Exception{
        Header<FaqApiResponse> faqApiResponses = faqApiLogicService.read(id);
        model.addAttribute("faqApiResponses", faqApiResponses.getData());
        return new ModelAndView("/adminpage/pages/inquiry/faq_view")
                .addObject("code", "faq_view")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("inquiry", menuService.adminQnaMenu());
    }
    // qna 메인
    @RequestMapping("/admin/qna_main")
    public ModelAndView qnaMain(Model model) {
        Header<List<QnaApiResponse>> qnaApiResponsesList = qnaApiLogicService.getQnaList();
        model.addAttribute("qnaApiResponsesList", qnaApiResponsesList.getData());
        return new ModelAndView("/adminpage/pages/inquiry/qna_main")
                .addObject("code", "qna_main")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("inquiry", menuService.adminQnaMenu());
    }
    // qna 뷰
    @GetMapping("/admin/qna_view/{id}")
    public ModelAndView qnaView(Model model, @PathVariable(name = "id") Long id) throws Exception{
        Header<QnaApiResponse> qnaApiResponses = qnaApiLogicService.read(id);
        model.addAttribute("qnaApiResponses", qnaApiResponses.getData());
        return new ModelAndView("/adminpage/pages/inquiry/qna_view")
                .addObject("code", "qna_view")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("inquiry", menuService.adminQnaMenu());
    }
    // qna 댓글
    @GetMapping("/admin/qna_reply/{id}")
    public ModelAndView qnaReply() throws Exception{
        return new ModelAndView("/adminpage/pages/inquiry/qna_reply")
                .addObject("code", "qna_reply")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("inquiry", menuService.adminQnaMenu());
    }

    // 공지 작성
    @RequestMapping("/admin/nt_write")
    @Transactional
    public ModelAndView ntWrite() {
        return new ModelAndView("/adminpage/pages/notice/nt_write")
                .addObject("code", "nt_write")
                .addObject("menuList", menuService.getadminMenu());
    }
    //-------------------------------------------------------------------------------------------

    /* 지니 쿠폰 */
    @RequestMapping("/admin/couponadd")
    public ModelAndView couponAdd() {
        return new ModelAndView("/adminpage/pages/coupon/couponadd")
                .addObject("code", "couponAdd")
                .addObject("coupon", menuService.adminCouponMenu())
                .addObject("menuList", menuService.getadminMenu());
    }
    @RequestMapping("/admin/usecouponlist")
    public ModelAndView useCouponList() {
        return new ModelAndView("/adminpage/pages/coupon/usecouponlist")
                .addObject("code", "useCouponList")
                .addObject("menuList", menuService.getadminMenu())
                .addObject("coupon", menuService.adminCouponMenu());
    }
    //-------------------------------------------------------------------------------------------


    /* 지니 매거진 */
    @RequestMapping("/admin/genielist")
    public ModelAndView genieList(Model model) {
        return new ModelAndView("/adminpage/pages/magazine/genieList")
                .addObject("code", "genieList")
                .addObject("menuList", menuService.getadminMenu());
    }

    @GetMapping("/admin/genielist_view/{id}")
    public ModelAndView genieListView(@PathVariable(name = "id") Long id) {
        return new ModelAndView("/adminpage/pages/magazine/genieList_view")
                .addObject("code", "genieListView")
                .addObject("menuList", menuService.getadminMenu());
    }

    @GetMapping("/admin/genielist_edit/{id}")
    public ModelAndView genieListEdit(@PathVariable(name = "id") Long id, Model model) {
        MagazineApiResponse magazineApiResponse = magazineApiLoginService.read(id).getData();
        model.addAttribute("images", magazineApiResponse);
        return new ModelAndView("/adminpage/pages/magazine/genieList_edit")
                .addObject("code", "genieListEdit")
                .addObject("menuList", menuService.getadminMenu());
    }

    @RequestMapping("/admin/genielist_add")
    public ModelAndView genieListAdd() {
        return new ModelAndView("/adminpage/pages/magazine/genieList_add")
                .addObject("code", "genieListAdd")
                .addObject("menuList", menuService.getadminMenu());
    }


    @PostMapping("/admin/genielist_add/upload")
    public String uploadFile(@RequestPart(value = "mzTitle") String mzTitle,
                             @RequestPart(value = "imgs", required = false) MultipartFile imgs,
                             @RequestPart(value = "answers", required = false) MultipartFile answers,
                             @RequestPart(value = "pdfs", required = false) MultipartFile pdfs
    ) throws IOException {
        TbMagazine tbMagazine = new TbMagazine();
// 제목
        tbMagazine.setMzTitle(mzTitle);
// 이미지
        String sourceImgName = imgs.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        imgs.transferTo(destinationImg);

        tbMagazine.setMzImgName(destinationImgName);
        tbMagazine.setMzImgOriname(sourceImgName);
        tbMagazine.setMzImgUrl(imgUrl);

// 답지
        String sourceAnsName = answers.getOriginalFilename();
        String sourceAnsNameExtension = FilenameUtils.getExtension(sourceAnsName).toLowerCase();
        FilenameUtils.removeExtension(sourceAnsName);

        File destinationAns;
        String destinationAnsName;
        String ansUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationAnsName = RandomStringUtils.randomAlphabetic(32)+"."+sourceAnsNameExtension;
            destinationAns = new File(ansUrl + destinationAnsName);
        }while(destinationAns.exists());

        destinationAns.getParentFile().mkdir();
        answers.transferTo(destinationAns);

        tbMagazine.setMzAnswerName(destinationAnsName);
        tbMagazine.setMzAnswerOriname(sourceAnsName);
        tbMagazine.setMzAnswerUrl(ansUrl);

// pdf
        String sourcePdfName = pdfs.getOriginalFilename();
        String sourcePdfNameExtension = FilenameUtils.getExtension(sourcePdfName).toLowerCase();
        FilenameUtils.removeExtension(sourcePdfName);

        File destinationPdf;
        String destinationPdfName;
        String pdfUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationPdfName = RandomStringUtils.randomAlphabetic(32)+"."+sourcePdfNameExtension;
            destinationPdf = new File(pdfUrl + destinationPdfName);
        }while(destinationPdf.exists());

        destinationPdf.getParentFile().mkdir();
        pdfs.transferTo(destinationPdf);

        tbMagazine.setMzPdfName(destinationPdfName);
        tbMagazine.setMzPdfOriname(sourcePdfName);
        tbMagazine.setMzPdfUrl(pdfUrl);

        magazineApiLoginService.save(tbMagazine);
        return "redirect:/pages/admin/genielist";
    }


    @Autowired
    TbMagazineRepository tbMagazineRepository;

    // 수정
    @PostMapping("/admin/genielist_edit/update")
    public String uploadFile(@RequestPart(value = "id") Long id,
                             @RequestPart(value = "imgs") MultipartFile imgs,
                             @RequestPart(value = "answers") MultipartFile answers,
                             @RequestPart(value = "pdfs") MultipartFile pdfs
    ) throws IOException {

        TbMagazine tbMagazine = tbMagazineRepository.findById(id).get();

// 이미지
        String sourceImgName = imgs.getOriginalFilename();
        String sourceFileNameExtension = FilenameUtils.getExtension(sourceImgName).toLowerCase();
        FilenameUtils.removeExtension(sourceImgName);

        File destinationImg;
        String destinationImgName;
        String imgUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationImgName = RandomStringUtils.randomAlphabetic(32)+"."+sourceFileNameExtension;
            destinationImg = new File(imgUrl + destinationImgName);
        }while(destinationImg.exists());

        destinationImg.getParentFile().mkdir();
        imgs.transferTo(destinationImg);

        tbMagazine.setMzImgName(destinationImgName);
        tbMagazine.setMzImgOriname(sourceImgName);
        tbMagazine.setMzImgUrl(imgUrl);

// 답지
        String sourceAnsName = answers.getOriginalFilename();
        String sourceAnsNameExtension = FilenameUtils.getExtension(sourceAnsName).toLowerCase();
        FilenameUtils.removeExtension(sourceAnsName);

        File destinationAns;
        String destinationAnsName;
        String ansUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationAnsName = RandomStringUtils.randomAlphabetic(32)+"."+sourceAnsNameExtension;
            destinationAns = new File(ansUrl + destinationAnsName);
        }while(destinationAns.exists());

        destinationAns.getParentFile().mkdir();
        answers.transferTo(destinationAns);

        tbMagazine.setMzAnswerName(destinationAnsName);
        tbMagazine.setMzAnswerOriname(sourceAnsName);
        tbMagazine.setMzAnswerUrl(ansUrl);

// pdf
        String sourcePdfName = pdfs.getOriginalFilename();
        String sourcePdfNameExtension = FilenameUtils.getExtension(sourcePdfName).toLowerCase();
        FilenameUtils.removeExtension(sourcePdfName);

        File destinationPdf;
        String destinationPdfName;
        String pdfUrl = "C:\\github_blog\\JinAir\\src\\main\\resources\\static\\upload\\";

        do{
            destinationPdfName = RandomStringUtils.randomAlphabetic(32)+"."+sourcePdfNameExtension;
            destinationPdf = new File(pdfUrl + destinationPdfName);
        }while(destinationPdf.exists());

        destinationPdf.getParentFile().mkdir();
        pdfs.transferTo(destinationPdf);

        tbMagazine.setMzPdfName(destinationPdfName);
        tbMagazine.setMzPdfOriname(sourcePdfName);
        tbMagazine.setMzPdfUrl(pdfUrl);

        tbMagazineRepository.save(tbMagazine);
        return "redirect:/pages/admin/genielist_view/"+id;
    }
}
