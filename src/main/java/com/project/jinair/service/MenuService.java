package com.project.jinair.service;

import com.project.jinair.model.front.Menu;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class MenuService {

    public List<Menu> getMenu(){
        return Arrays.asList(
                Menu.builder().title("메인 페이지").url("/pages/admin_index").code("admin_index").build(),
                Menu.builder().title("운항 스케줄").url("/pages/admin/scheduleList").code("sc_list").build(),
                Menu.builder().title("예약 조회").url("/pages/admin/rsIndex").code("rs_index").build(),
                Menu.builder().title("고객 관리").url("/pages/admin/cmList").code("cm_list").build(),
                Menu.builder().title("유실물 관리").url("/pages/admin/item").code("item").build(),
                Menu.builder().title("공지사항").url("/pages/admin/notice").code("notice").build(),
                Menu.builder().title("문의").url("/admin/qna_main").code("qna_main").build(),
                Menu.builder().title("이벤트").url("/pages/admin/evn_ing").code("evn_ing").build(),
                Menu.builder().title("나비포인트").url("/pages/admin/usepointlist").code("usepointlist").build(),
                Menu.builder().title("지니 쿠폰").url("/pages/admin/usecouponlist").code("useCouponList").build(),
                Menu.builder().title("지니매거진").url("/pages/admin/genielist").code("genieList").build()
        );
    }
}
