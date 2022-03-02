package com.project.jinair.model.entity.payment;

import com.project.jinair.model.entity.member.TbMember;
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
        name="seq_usercoupon_idx",
        sequenceName="seq_usercoupon_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@Builder
public class TbUsercoupon {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_usercoupon_idx")
    private Long ucIndex;
    private String ucType;
    private Long ucPrice;
    private String ucDesc;
    private String ucCode;
//    private Long ucUserindex;
    private Integer ucDiscount;
    private LocalDateTime ucStartday;
    private LocalDateTime ucEndday;
    private String ucIsUse;
    private String ucTotcoupon;

    @ManyToOne
    private TbMember tbMember;

}
