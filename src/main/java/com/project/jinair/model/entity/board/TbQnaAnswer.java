package com.project.jinair.model.entity.board;

import com.project.jinair.model.entity.member.TbMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
        name="seq_qnaanswer_idx",
        sequenceName="seq_qnaanswer_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@Builder
public class TbQnaAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_qnaanswer_idx")
    private Long qaIndex;
    private String qaType;
    private String qaTitle;
    private String qaContent;
    @CreatedDate
    private LocalDateTime qaRegdate;
//    private String qaQnaindex;


    @ManyToOne
    private TbQna tbQna;


}
