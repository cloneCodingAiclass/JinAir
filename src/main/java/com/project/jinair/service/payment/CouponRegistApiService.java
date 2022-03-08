package com.project.jinair.service.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbAirplane;
import com.project.jinair.model.entity.payment.TbCouponRegist;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.info.AirplaneApiRequest;
import com.project.jinair.model.network.request.payment.CouponRegistApiRequest;
import com.project.jinair.model.network.response.payment.CouponRegistApiResponse;
import com.project.jinair.repository.TbCouponRegistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CouponRegistApiService implements CrudInterface<CouponRegistApiRequest, CouponRegistApiResponse> {

    private final TbCouponRegistRepository tbCouponRegistRepository;

    @Override
    public Header<CouponRegistApiResponse> create(Header<CouponRegistApiRequest> request) {

        CouponRegistApiRequest couponRegistApiRequest = request.getData();

        TbCouponRegist tbCouponRegist = TbCouponRegist.builder()
                .crType(couponRegistApiRequest.getCrType())
                .crPrice(couponRegistApiRequest.getCrPrice())
                .crDesc(couponRegistApiRequest.getCrDesc())
                .crStatus(couponRegistApiRequest.getCrStatus())
                .crDiscount(couponRegistApiRequest.getCrDiscount())
                .crIssuanceDay(couponRegistApiRequest.getCrIssuanceDay())
                .crEndDay(couponRegistApiRequest.getCrEndDay())
                .crTotCoupon(couponRegistApiRequest.getCrTotCoupon())
                .crStockCoupon(couponRegistApiRequest.getCrStockCoupon())
                .crStockCoupon(couponRegistApiRequest.getCrStockCoupon())
                .crRegdate(couponRegistApiRequest.getCrRegdate())
                .build();
        TbCouponRegist newCouponRegist = tbCouponRegistRepository.save(tbCouponRegist);
        return response(newCouponRegist);
    }

    @Override
    public Header<CouponRegistApiResponse> read(Long id) {
        return tbCouponRegistRepository.findById(id)
                .map(coupon -> response(coupon))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<CouponRegistApiResponse> update(Header<CouponRegistApiRequest> request) {
        CouponRegistApiRequest couponRegistApiRequest = request.getData();
        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findById(couponRegistApiRequest.getCrIndex());

        return tbCouponRegist.map(coupon -> {
                    coupon.setCrType(couponRegistApiRequest.getCrType());
                    coupon.setCrPrice(couponRegistApiRequest.getCrPrice());
                    coupon.setCrDesc(couponRegistApiRequest.getCrDesc());
                    coupon.setCrCode(couponRegistApiRequest.getCrCode());
                    coupon.setCrStatus(couponRegistApiRequest.getCrStatus());
                    coupon.setCrDiscount(couponRegistApiRequest.getCrDiscount());
                    coupon.setCrIssuanceDay(couponRegistApiRequest.getCrIssuanceDay());
                    coupon.setCrEndDay(couponRegistApiRequest.getCrEndDay());
                    coupon.setCrTotCoupon(couponRegistApiRequest.getCrTotCoupon());
                    coupon.setCrStockCoupon(couponRegistApiRequest.getCrStockCoupon());
                    coupon.setCrRegdate(couponRegistApiRequest.getCrRegdate());

                    return coupon;
                }).map(coupon -> tbCouponRegistRepository.save(coupon))
                .map(coupon -> response(coupon))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbCouponRegist> tbCouponRegist = tbCouponRegistRepository.findById(id);

        return tbCouponRegist.map(couponRegist ->{
            tbCouponRegistRepository.delete(couponRegist);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }
    private Header<CouponRegistApiResponse> response(TbCouponRegist tbCouponRegist){
        CouponRegistApiResponse couponRegistApiResponse = CouponRegistApiResponse.builder()
                .crIndex(tbCouponRegist.getCrIndex())
                .crType(tbCouponRegist.getCrType())
                .crPrice(tbCouponRegist.getCrPrice())
                .crDesc(tbCouponRegist.getCrDesc())
                .crStatus(tbCouponRegist.getCrStatus())
                .crDiscount(tbCouponRegist.getCrDiscount())
                .crIssuanceDay(tbCouponRegist.getCrIssuanceDay())
                .crEndDay(tbCouponRegist.getCrEndDay())
                .crTotCoupon(tbCouponRegist.getCrTotCoupon())
                .crStockCoupon(tbCouponRegist.getCrStockCoupon())
                .crRegdate(tbCouponRegist.getCrRegdate())
                .build();
        return Header.OK(couponRegistApiResponse);
    }
    private CouponRegistApiResponse responseCoupon(TbCouponRegist tbCouponRegist) {
        CouponRegistApiResponse couponRegistApiResponse = CouponRegistApiResponse.builder()
                .crIndex(tbCouponRegist.getCrIndex())
                .crType(tbCouponRegist.getCrType())
                .crPrice(tbCouponRegist.getCrPrice())
                .crDesc(tbCouponRegist.getCrDesc())
                .crStatus(tbCouponRegist.getCrStatus())
                .crDiscount(tbCouponRegist.getCrDiscount())
                .crIssuanceDay(tbCouponRegist.getCrIssuanceDay())
                .crEndDay(tbCouponRegist.getCrEndDay())
                .crTotCoupon(tbCouponRegist.getCrTotCoupon())
                .crStockCoupon(tbCouponRegist.getCrStockCoupon())
                .crRegdate(tbCouponRegist.getCrRegdate())
                .build();
        return couponRegistApiResponse;
    }
}
