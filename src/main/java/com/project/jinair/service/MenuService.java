package com.project.jinair.service;

import com.project.jinair.model.front.Menu;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class MenuService {

    public List<Menu> getMenu() {
        return Arrays.asList(
                Menu.builder().title("메인 페이지").url("/pages/admin_index").code("admin_index").id("nav1").build(),
                Menu.builder().title("운항 스케줄").url("/pages/admin/scheduleList").code("sc_list").id("nav2").build(),
                Menu.builder().title("예약 조회").url("/pages/admin/rsIndex").code("rs_index").id("nav3").build(),
                Menu.builder().title("고객 조회").url("/pages/admin/cmList").code("cm_list").id("nav4").build(),
                Menu.builder().title("유실물 관리").url("/pages/admin/item").code("item").id("nav5").build(),
                Menu.builder().title("공지사항").url("/pages/admin/notice").code("notice").id("nav6").build(),
                Menu.builder().title("문의").url("/admin/qna_main").code("qna_main").id("nav7").build(),
                Menu.builder().title("이벤트").url("/pages/admin/evn_ing").code("evn_ing").id("nav8").build(),
                Menu.builder().title("나비포인트").url("/pages/admin/usepointlist").code("usepointlist").id("nav9").build(),
                Menu.builder().title("지니 쿠폰").url("/pages/admin/usecouponlist").code("useCouponList").id("nav10").build(),
                Menu.builder().title("지니매거진").url("/pages/admin/genielist").code("genieList").id("nav11").build()
        );
    }
    public List<Menu> scheduleMenu() {
        return Arrays.asList(
                Menu.builder().title("운항 스케줄 조회").url("/pages/admin/scheduleList").code("sc_list").build(),
                Menu.builder().title("운항 스케줄 등록").url("/pages/admin/scheduleRegist").code("sc_regist").build(),
                Menu.builder().title("항공기 정보 조회").url("/pages/admin/aircraftList").code("aircraft_list").build()
        );
    }
    public List<Menu> reservationMenu() {
        return Arrays.asList(
                Menu.builder().title("운항 별 예약자 조회").url("/admin/rsIndex").code("rs_index").build(),
                Menu.builder().title("예약자 명 조회").url("/admin/rs_sch_result").code("rs_sch_result").build()
        );
    }
    public List<Menu> itemMenu() {
        return Arrays.asList(
                Menu.builder().title("유실물 조회").url("/pages/admin/item").code("item").build(),
                Menu.builder().title("유실물 등록").url("/pages/admin/item/itemadd").code("itemadd").build()
        );
    }
    public List<Menu> qnaMenu() {
        return Arrays.asList(
                Menu.builder().title("Q&A 관리").url("/pages/admin/qna_main").code("qna_main").build(),
                Menu.builder().title("FAQ 등록").url("/pages/admin/faq_main").code("faq_main").build()
        );
    }
    public List<Menu> couponMenu() {
        return Arrays.asList(
                Menu.builder().title("지니쿠폰 조회").url("/pages/admin/usecouponlist").code("useCouponList").build(),
                Menu.builder().title("지니쿠폰 등록").url("/pages/admin/couponadd").code("couponAdd").build()
        );
    }
    public List<Menu> pointMenu() {
        return Arrays.asList(
                Menu.builder().title("지니포인트 조회").url("/pages/admin/usepointlist").code("usepointlist").build(),
                Menu.builder().title("지니포인트 등록").url("/pages/admin/admin/pointadd").code("pointadd").build()
        );
    }
}