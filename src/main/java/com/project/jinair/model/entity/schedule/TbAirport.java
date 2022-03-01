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
        name ="seq_airport_idx",
        sequenceName = "seq_airport_idx",
        initialValue = 1,
        allocationSize = 1
)
@EntityListeners(AuditingEntityListener.class)
@Builder
public class TbAirport {    // 항공 정보

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_airport_idx")
    private Long aptIndex;
    private String aptNation;
    private String aptAirport;
    private String aptRevType;
    private String aptTypeDetail;

}
