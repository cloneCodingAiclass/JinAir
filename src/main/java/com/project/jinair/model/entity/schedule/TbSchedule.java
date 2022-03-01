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
    private LocalDateTime sch_departure_date;
    private LocalDateTime sch_arrival_date;
    private String sch_departure_point;
    private String sch_arrival_point;
    private Long sch_basic_price;
    private String sch_airplane_type;
    private Long sch_airplaneidex;
    private Long sch_areaindex;

}
