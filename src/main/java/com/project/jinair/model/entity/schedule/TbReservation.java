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
    private Long reIndex;
    private Long reUserindex;
    private Long rePercentpoint;
    @Enumerated(EnumType.STRING)
    private PaymentStatus reStatus;
    // 이넘 클래스 없음
    private String reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private Long reTotal;

    @ManyToOne
    @JoinColumn(name= "reUserindex", referencedColumnName = "memIndex", insertable = false, updatable = false)
    private TbMember tbMember;
}
