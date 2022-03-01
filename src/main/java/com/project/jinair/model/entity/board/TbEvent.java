package com.project.jinair.model.entity.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@SequenceGenerator(
        name="seq_event_idx",
        sequenceName = "seq_event_idx",
        initialValue = 1,
        allocationSize = 1
)
@Builder
@EntityListeners(AuditingEntityListener.class)
public class TbEvent { // 이벤트 테이블
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_event_idx")
    private Long evIndex;
    private String evContent;
    private String evFile;
    private LocalDateTime evStartDay;
    private LocalDateTime evEndDay;
    @CreatedDate
    private LocalDateTime evRegdate;
    private String ev_status;
}
