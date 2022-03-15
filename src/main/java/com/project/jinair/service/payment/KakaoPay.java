package com.project.jinair.service.payment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class KakaoPay {

    private static final String host = "https://kapi.kakao.com";
    private Date created_at;

}
