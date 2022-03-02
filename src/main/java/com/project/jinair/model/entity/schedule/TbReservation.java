package com.project.jinair.model.entity.schedule;

import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.PaymentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@SequenceGenerator(
        name ="seq_reservation_idx",
        sequenceName = "seq_reservation_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbReservation {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_reservation_idx")
    private Long rIndex;
//    private Long rUserindex;
    private Long rPercentpoint;
    @Enumerated(EnumType.STRING)
    private PaymentStatus rStatus;
    // 이넘 클래스 없음
    private String rUserStatus;
    private String rReserNum;
    private String rPayment;
    private Long rPetsidx;
    private Long rBaggageidx;
    private Long rInsuranceidx;
    private Long rScheduleidx;
    private Long rTotal;

    @ManyToOne
    private TbMember tbMember;
}
