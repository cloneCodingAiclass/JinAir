package com.project.jinair.model.entity.schedule;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.project.jinair.model.entity.info.TbAirplane;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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
    private Long schIndex;
    private String schNationType;
    private String schAirplaneId;
    private String schAirplaneName;
    private LocalDateTime schDepartureDate;
    private String schDeparturePoint;
    private LocalDateTime schStartTime;
    private String schArrivalPoint;
    private LocalDateTime schArrivalDate;
    private Long schAirplaneSeat;
    private LocalDateTime schFlyingTime;
    private Long schBasicPrice;
    private Long schPoint;


}