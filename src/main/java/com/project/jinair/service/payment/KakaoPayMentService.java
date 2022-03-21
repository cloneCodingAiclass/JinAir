package com.project.jinair.service.payment;

import com.project.jinair.model.network.response.payment.KakaoPayApprovalVO;
import com.project.jinair.model.network.response.payment.KakaoPayReadyVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

@Log
@Service
@RequiredArgsConstructor
public class KakaoPayMentService {

    private static final String HOST = "https://kapi.kakao.com/";
    private KakaoPayReadyVO kakaoPayReadyVO;
    private KakaoPayApprovalVO kakaoPayApprovalVO;

    public String buy(Map<String, String> request) {
        RestTemplate restTemplate = new RestTemplate();
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", "KakaoAK " + "aee851af0c31999dd6849384e906bb0d");
            headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
            headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
            params.add("cid", "TC0ONETIME");
            params.add("partner_order_id", "partner_order_id");
            params.add("partner_user_id", "partner_user_id");
            params.add("item_name", "항공권");
            params.add("quantity", "1");
            params.add("total_amount", "3000000");
            params.add("vat_amount", "10000");
            params.add("tax_free_amount", "10000");
            params.add("approval_url", "http://localhost:8080/pages/complete");
            params.add("cancel_url", "http://localhost:8080/pages/payment");
            params.add("fail_url", "http://localhost:8080/pages/payment");

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        try {

            kakaoPayReadyVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/ready"), body, KakaoPayReadyVO.class);
            log.info("" + kakaoPayReadyVO);
            return kakaoPayReadyVO.getNext_redirect_pc_url();

        } catch (RestClientException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
        return "/pay";
    }


    public KakaoPayApprovalVO kakaoPayInfo(String pg_token) {

        log.info("KakaoPayInfoVO............................................");
        log.info("-----------------------------");

        RestTemplate restTemplate = new RestTemplate();

        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
            headers.add("Authorization", "KakaoAK " + "aee851af0c31999dd6849384e906bb0d");
            headers.add("Accept", MediaType.APPLICATION_JSON_UTF8_VALUE);
            headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");

        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
            params.add("cid", "TC0ONETIME");
            params.add("tid", kakaoPayReadyVO.getTid());
            params.add("partner_order_id", "partner_order_id");
            params.add("partner_user_id", "partner_user_id");
            params.add("pg_token", pg_token);
            params.add("total_amount", "3000000");

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);

        try {
            kakaoPayApprovalVO = restTemplate.postForObject(new URI(HOST + "/v1/payment/approve"), body, KakaoPayApprovalVO.class);
            log.info("" + kakaoPayApprovalVO);

            return kakaoPayApprovalVO;

        } catch (RestClientException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }

        return null;
    }
}
