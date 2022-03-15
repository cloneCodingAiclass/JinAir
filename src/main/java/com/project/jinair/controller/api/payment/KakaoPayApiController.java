package com.project.jinair.controller.api.payment;

import com.project.jinair.service.payment.KakaoPay;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api/coupon")
@RequiredArgsConstructor
public class KakaoPayApiController {

//    @Autowired
//    private KakaoPay kakaoPay;
//
//    @PostMapping("/kakaopay")
//    public String kakaoPay(){
//
//        return "redirect:" + kakaoPay.kakaoPayReady();
//    }

}
