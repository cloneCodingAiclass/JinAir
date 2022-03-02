package com.project.jinair.model.entity.optional;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name = "seq_pt_idx",
        sequenceName = "seq_pt_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbPets {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_pt_idx")
    private Long ptIndex;
    private BigDecimal ptPrice;
    private String ptStatus;

    private Long aptIndex;
}