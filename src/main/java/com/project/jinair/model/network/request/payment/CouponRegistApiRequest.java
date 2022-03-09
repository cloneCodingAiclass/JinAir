package com.project.jinair.model.network.request.payment;

import com.project.jinair.model.enumclass.CouponStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CouponRegistApiRequest {
    private Long crIndex;
    private String crType;
    private Long crPrice;
    private String crDesc;
    private Integer crDiscount;
    private LocalDateTime crIssuanceDay;
    private LocalDateTime crEndDay;
    private Integer crTotCoupon;
    private Integer crStockCoupon;
    private CouponStatus crStatus;
    private LocalDateTime crRegdate;
    private String crCode;
}