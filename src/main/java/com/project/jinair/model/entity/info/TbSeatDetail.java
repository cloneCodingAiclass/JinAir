package com.project.jinair.model.entity.info;

import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.AirplaneSeatStatus;
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
        name ="seq_airport_idx",
        sequenceName = "seq_airport_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbSeatDetail { // 비행기 좌석 디테일
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_airport_idx")
    private Long sdIndex;
    private String sdId;
    @Enumerated(EnumType.STRING)
    private AirplaneSeatStatus sdStatus;
    private Long sdSeatcnt;
    private Long sdPrice;
//    private Long as_index;


    @ManyToOne
    private TbAirplaneSeat tbAirplaneSeat;
}
