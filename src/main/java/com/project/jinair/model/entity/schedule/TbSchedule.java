package com.project.jinair.model.entity.schedule;


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
        name ="seq_schedule_idx",
        sequenceName = "seq_schedule_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbSchedule {   // 스케줄 테이블

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_schedule_idx")
    private Long sch_index;
    private LocalDateTime schDepartureDate;
    private LocalDateTime schArrivalDate;
    private String schDeparturePoint;
    private String schArrivalPoint;
    private Long schBasicPrice;
    private String schAirplaneType;
    private Long schAirplaneIdex;
    private Long schAreaIndex;

}
