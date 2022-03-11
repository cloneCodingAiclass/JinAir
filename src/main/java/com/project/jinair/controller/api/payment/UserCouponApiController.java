package com.project.jinair.controller.api.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.payment.UsercouponApiRequest;
import com.project.jinair.model.network.response.payment.UsercouponApiResponse;
import com.project.jinair.service.payment.UserCouponApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/userCoupon")
@RequiredArgsConstructor
public class UserCouponApiController implements CrudInterface<UsercouponApiRequest, UsercouponApiResponse> {

    private final UserCouponApiService userCouponApiService;

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

}
