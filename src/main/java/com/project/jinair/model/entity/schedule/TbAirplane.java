package com.project.jinair.model.entity.schedule;

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
        name ="seq_airplane_idx",
        sequenceName = "seq_airplane_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbAirplane {   // 비행기 정보

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_airplane_idx")
    private Long apIndex;
    private String apName;
    private String apId;
    private Long apSeat;
}
