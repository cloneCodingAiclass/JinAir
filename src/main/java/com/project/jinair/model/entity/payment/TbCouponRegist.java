package com.project.jinair.model.entity.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
        name="seq_couponregist_idx",
        sequenceName="seq_couponregist_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@Builder
public class TbCouponRegist {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_couponregist_idx")
    private Long crIndex;
    private String crType;
    private Long crPrice;
    private String crDesc;
    private String crCode;
    private String crStatus;
    private Integer crDiscount;
    private LocalDateTime crIssuanceDay;
    private LocalDateTime crEndDay;
    private Integer crTotCoupon;
    private Integer crStockCoupon;
    private LocalDateTime crRegdate;
}
