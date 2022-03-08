package com.project.jinair.controller.api.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.payment.CouponRegistApiRequest;
import com.project.jinair.model.network.response.payment.CouponRegistApiResponse;
import com.project.jinair.service.payment.CouponRegistApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/coupon")
@RequiredArgsConstructor
public class CouponAdd implements CrudInterface<CouponRegistApiRequest, CouponRegistApiResponse> {

    private final CouponRegistApiService couponRegistApiService;

    @Override
    @PostMapping("")
    public Header<CouponRegistApiResponse> create(@RequestBody Header<CouponRegistApiRequest> request) {
        return couponRegistApiService.create(request);
    }

    @Override
    @GetMapping("id")
    public Header<CouponRegistApiResponse> read(@PathVariable(name = "id") Long id) {
        return couponRegistApiService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<CouponRegistApiResponse> update(@RequestBody Header<CouponRegistApiRequest> request) {
        return couponRegistApiService.update(request);
    }

    @Override
    @DeleteMapping("id")
    public Header<CouponRegistApiResponse> delete(@PathVariable(name = "id") Long id) {
        return couponRegistApiService.delete(id);
    }
}
