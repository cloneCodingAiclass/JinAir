package com.project.jinair.service.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.enumclass.CouponStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.payment.UsercouponApiRequest;
import com.project.jinair.model.network.response.payment.UsercouponApiResponse;
import com.project.jinair.repository.MemberRepository;
import com.project.jinair.repository.TbPointRepository;
import com.project.jinair.repository.TbUsercouponRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserCouponApiService implements CrudInterface<UsercouponApiRequest, UsercouponApiResponse> {

    private final TbUsercouponRepository tbUsercouponRepository;
    private final TbPointRepository tbPointRepository;
    private final PointApiService pointApiService;
    private final MemberRepository memberRepository;
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

}
