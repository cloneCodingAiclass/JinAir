package com.project.jinair.model.entity.schedule;

import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.enumclass.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

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
    @Enumerated(EnumType.STRING)
    private UserStatus reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private Long reTotal;           // 전체 금액
    private Long reSchBasicPrice;   // 기본 금액
    private String reSchDepPoint;   // 출발지
    private String reSchArrPoint;   // 도착지
    private LocalDateTime reSchStartTime;   // 출발 시간
    private LocalDateTime reSchEndTime;   // 도착 시간
    private String reAirplainType;  // 비행기 기종
    private String reSchName;       // 운항편 이름

    @ManyToOne
    @JoinColumn(name= "reUserindex", referencedColumnName = "memIndex", insertable = false, updatable = false)
    private TbMember tbMember;
}
