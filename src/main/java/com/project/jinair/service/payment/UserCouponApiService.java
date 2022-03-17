package com.project.jinair.service.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.enumclass.CouponStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.payment.UsercouponApiRequest;
import com.project.jinair.model.network.response.payment.KakaoPayReadyVO;
import com.project.jinair.model.network.response.payment.UsercouponApiResponse;
import com.project.jinair.repository.MemberRepository;
import com.project.jinair.repository.TbCouponRegistRepository;
import com.project.jinair.repository.TbUsercouponRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.net.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Log
@Service
@RequiredArgsConstructor
public class UserCouponApiService implements CrudInterface<UsercouponApiRequest, UsercouponApiResponse> {

    private final TbUsercouponRepository tbUsercouponRepository;
    private final MemberRepository memberRepository;
    private final TbCouponRegistRepository tbCouponRegistRepository;
    private static final String HOST = "https://kapi.kakao.com/";
    private KakaoPayReadyVO kakaoPayReadyVO;
    @PersistenceContext
    private EntityManager em;


    //일반 쿠폰 생성
    @Override
    public Header<UsercouponApiResponse> create(Header<UsercouponApiRequest> request) {

        UsercouponApiRequest usercouponApiRequest = request.getData();
        TbMember tbMember = memberRepository.findByMemIndex(usercouponApiRequest.getUcUserindex());
        Long price = usercouponApiRequest.getUcPrice();

        Long result = (Long) em.createQuery("select sum(p.poPoint) from TbPoint p where p.poUserindex = p.tbMember.memIndex").getSingleResult();

        if (result > price){
            TbUsercoupon tbUsercoupon = TbUsercoupon.builder()
                    .ucType(usercouponApiRequest.getUcType())
                    .ucPrice(usercouponApiRequest.getUcPrice())
                    .ucDesc(usercouponApiRequest.getUcDesc())
                    .ucCode(usercouponApiRequest.getUcCode())
                    .ucDiscount(usercouponApiRequest.getUcDiscount())
                    .ucStartday(LocalDateTime.parse(usercouponApiRequest.getUcStartday()))
                    .ucEndday(LocalDateTime.parse(usercouponApiRequest.getUcEndday()))
                    .ucIsUse(usercouponApiRequest.getUcIsUse())
                    .ucTotcoupon(usercouponApiRequest.getUcTotcoupon())
                    .ucUserindex(tbMember.getMemIndex())
                    .build();

            TbUsercoupon tbUsercoupon1 = tbUsercouponRepository.save(tbUsercoupon);

            return response(tbUsercoupon1);
        }else{
            Header.ERROR("포인트 부족");
            return null;
        }
    }

    @Override
    public Header<UsercouponApiResponse> read(Long id) {

        return null;
    }
    @Override
    public Header<UsercouponApiResponse> update(Header<UsercouponApiRequest> request) {
        UsercouponApiRequest usercouponApiRequest = request.getData();
        Optional<TbUsercoupon> tbUsercoupon = tbUsercouponRepository.findById(usercouponApiRequest.getUcIndex());

        return tbUsercoupon.map(coupon -> {
                    coupon.setUcType(usercouponApiRequest.getUcType());
                    coupon.setUcPrice(usercouponApiRequest.getUcPrice());
                    coupon.setUcDesc(usercouponApiRequest.getUcDesc());
                    coupon.setUcCode(usercouponApiRequest.getUcCode());
                    coupon.setUcDiscount(usercouponApiRequest.getUcDiscount());
                    coupon.setUcStartday(LocalDateTime.parse(usercouponApiRequest.getUcStartday()));
                    coupon.setUcEndday(LocalDateTime.parse(usercouponApiRequest.getUcEndday()));
                    coupon.setUcIsUse(usercouponApiRequest.getUcIsUse());
                    coupon.setUcTotcoupon(usercouponApiRequest.getUcTotcoupon());

                    return coupon;
                }).map(coupon -> tbUsercouponRepository.save(coupon))
                .map(coupon -> response(coupon))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbUsercoupon> tbUsercoupon = tbUsercouponRepository.findById(id);

        return tbUsercoupon.map(couponRegist ->{
            tbUsercouponRepository.delete(couponRegist);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<UsercouponApiResponse> response(TbUsercoupon tbUsercoupon){
        UsercouponApiResponse usercouponApiResponse = UsercouponApiResponse.builder()
                .ucIndex(tbUsercoupon.getUcIndex())
                .ucType(tbUsercoupon.getUcType())
                .ucPrice(tbUsercoupon.getUcPrice())
                .ucDesc(tbUsercoupon.getUcDesc())
                .ucCode(tbUsercoupon.getUcCode())
                .ucDiscount(tbUsercoupon.getUcDiscount())
                .ucStartday(tbUsercoupon.getUcStartday())
                .ucEndday(tbUsercoupon.getUcEndday())
                .ucIsUse(tbUsercoupon.getUcIsUse())
                .ucTotcoupon(tbUsercoupon.getUcTotcoupon())
                .build();
        return Header.OK(usercouponApiResponse);
    }
    private UsercouponApiResponse responseCoupon(TbUsercoupon tbUsercoupon) {
        UsercouponApiResponse usercouponApiResponse = UsercouponApiResponse.builder()
                .ucIndex(tbUsercoupon.getUcIndex())
                .ucType(tbUsercoupon.getUcType())
                .ucPrice(tbUsercoupon.getUcPrice())
                .ucDesc(tbUsercoupon.getUcDesc())
                .ucCode(tbUsercoupon.getUcCode())
                .ucDiscount(tbUsercoupon.getUcDiscount())
                .ucStartday(tbUsercoupon.getUcStartday())
                .ucEndday(tbUsercoupon.getUcEndday())
                .ucIsUse(tbUsercoupon.getUcIsUse())
                .ucTotcoupon(tbUsercoupon.getUcTotcoupon())
                .build();
        return usercouponApiResponse;
    }
    public Header<List<UsercouponApiResponse>> searchList(Long id, CouponStatus enumid, String startDate, String endDate, Pageable pageable) {
        Page<TbUsercoupon> tbUsercoupons = tbUsercouponRepository.findByUcUserindexAndUcIsUseAndUcEnddayBetween(id, enumid, LocalDateTime.parse(startDate), LocalDateTime.parse(endDate), pageable);
        List<UsercouponApiResponse> usercouponApiResponseList = tbUsercoupons.stream()
                .map(coupon -> responseCoupon(coupon))
                .collect(Collectors.toList());

        System.out.println(usercouponApiResponseList);

        Pagination pagination = Pagination.builder()
                .totalPages(tbUsercoupons.getTotalPages())
                .totalElements(tbUsercoupons.getTotalElements())
                .currentPage(tbUsercoupons.getNumber())
                .currentElements(tbUsercoupons.getNumberOfElements())
                .build();
        return Header.OK(usercouponApiResponseList, pagination);
    }

    public Header<UsercouponApiResponse> promotionCoupon(Header<UsercouponApiRequest> request){
        UsercouponApiRequest usercouponApiRequest = request.getData();
        List<TbUsercoupon> tbUsercoupons = tbUsercouponRepository.findByUcCode(usercouponApiRequest.getUcCode());

        if(tbUsercoupons.isEmpty()){
            TbMember tbMember = memberRepository.findByMemIndex(usercouponApiRequest.getUcUserindex());

            TbUsercoupon tbUsercoupon = TbUsercoupon.builder()
                    .ucType(usercouponApiRequest.getUcType())
                    .ucPrice(usercouponApiRequest.getUcPrice())
                    .ucDesc(usercouponApiRequest.getUcDesc())
                    .ucCode(usercouponApiRequest.getUcCode())
                    .ucDiscount(usercouponApiRequest.getUcDiscount())
                    .ucStartday(LocalDateTime.parse(usercouponApiRequest.getUcStartday()))
                    .ucEndday(LocalDateTime.parse(usercouponApiRequest.getUcEndday()))
                    .ucIsUse(usercouponApiRequest.getUcIsUse())
                    .ucTotcoupon(usercouponApiRequest.getUcTotcoupon())
                    .ucUserindex(tbMember.getMemIndex())
                    .build();
            TbUsercoupon tbUsercoupon1 = tbUsercouponRepository.save(tbUsercoupon);
            return response(tbUsercoupon1);
        }else{
            return null;
        }
    }

    public String buy(Map<String, String> request) {

        RestTemplate restTemplate = new RestTemplate();
        // 서버로 요청할 Header
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "KakaoAK " + "aee851af0c31999dd6849384e906bb0d");
        headers.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8");
        // 서버로 요청할 Body
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>();
        params.add("cid", "TC0ONETIME");
        params.add("partner_order_id", "partner_order_id");
        params.add("partner_user_id", "partner_user_id");
        params.add("item_name", "갤럭시S9");
        params.add("quantity", "1");
        params.add("total_amount", "2100");
        params.add("vat_amount", "100");
        params.add("tax_free_amount", "100");
        params.add("approval_url", "http://localhost:8080/pages/complete");
        params.add("cancel_url", "http://localhost:8080/pages/cancel/complete");
        params.add("fail_url", "http://localhost:8080/pages/index");
        System.out.println(params);

        HttpEntity<MultiValueMap<String, String>> body = new HttpEntity<MultiValueMap<String, String>>(params, headers);
        System.out.println(headers);

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

    }