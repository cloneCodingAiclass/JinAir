package com.project.jinair.model.entity.payment;

import com.project.jinair.model.enumclass.CouponStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

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
@EntityListeners(AuditingEntityListener.class)
public class TbCouponRegist {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_couponregist_idx")
    private Long crIndex;
    private String crType;
    private Long crPrice;
    private String crDesc;
    private String crCode;
    @Enumerated(EnumType.STRING)
    private CouponStatus crStatus;
    private Integer crDiscount;
    private LocalDateTime crIssuanceDay;
    private LocalDateTime crEndDay;
    private Integer crTotCoupon;
    private Integer crStockCoupon;
    @CreatedDate
    private LocalDateTime crRegdate;
}
