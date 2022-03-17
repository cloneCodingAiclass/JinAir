package com.project.jinair.controller.api.payment;

import com.project.jinair.service.payment.KakaoPayMentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Log
@RestController
@RequestMapping("/api/kakao")
@RequiredArgsConstructor
public class KakaoPayController {

    private final KakaoPayMentService kakaoPayMentService;

    @PostMapping("/create")
    public String buy(@RequestParam Map<String, String> request) {
        return kakaoPayMentService.buy(request);
    }

    @GetMapping("/kakaoPaySuccess")
    public void kakaoPaySuccess(@RequestParam("pg_token") String pg_token, Model model) {
        log.info("kakaoPaySuccess get............................................");
        log.info("kakaoPaySuccess pg_token : " + pg_token);
        System.out.println(pg_token);

    }


}
