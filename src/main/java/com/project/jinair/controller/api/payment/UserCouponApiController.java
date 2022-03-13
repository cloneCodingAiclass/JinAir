package com.project.jinair.controller.api.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.payment.UsercouponApiRequest;
import com.project.jinair.model.network.response.payment.CouponRegistApiResponse;
import com.project.jinair.model.network.response.payment.UsercouponApiResponse;
import com.project.jinair.service.payment.UserCouponApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@RestController
@RequestMapping("/api/userCoupon")
@RequiredArgsConstructor
public class UserCouponApiController implements CrudInterface<UsercouponApiRequest, UsercouponApiResponse> {

    private final UserCouponApiService userCouponApiService;
    @PersistenceContext
    private EntityManager em;

    @Override
    @PostMapping("")
    public Header<UsercouponApiResponse> create(@RequestBody Header<UsercouponApiRequest> request) {
        return userCouponApiService.create(request);
    }

    @Override
    @GetMapping("/{id}")
    public Header<UsercouponApiResponse> read(@PathVariable(name = "id") Long id) {
        return userCouponApiService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<UsercouponApiResponse> update(@RequestBody Header<UsercouponApiRequest> request) {
        return userCouponApiService.update(request);
    }

    @Override
    @DeleteMapping("/{id}")
    public Header<UsercouponApiResponse> delete(@PathVariable(name = "id") Long id) {
        return userCouponApiService.delete(id);
    }

    @GetMapping("/list/{id}")
    public Long readCoupon(@PathVariable(name = "id") Long id) {
        return sumCoupon(id);
    }


    @GetMapping("/couponList/{id}")
    public Header<List<UsercouponApiResponse>> searchList(@PathVariable(name = "id") Long id, @PageableDefault(size = 5, sort = {"ucUserindex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return userCouponApiService.searchList(id, pageable);
    }

    // 쿠폰 합계 전달
    private Long sumCoupon(Long id) {
        String sumCoupon = "select sum(u.ucTotcoupon) from TbUsercoupon u where u.ucUserindex = :id";
        Long result = (Long) em.createQuery(sumCoupon).setParameter("id", id).getSingleResult();
        return result;
    }
}
