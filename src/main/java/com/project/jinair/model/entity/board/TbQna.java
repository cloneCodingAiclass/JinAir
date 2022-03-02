package com.project.jinair.model.entity.board;

import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.enumclass.QnaStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
        name="seq_qna_idx",
        sequenceName="seq_qna_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@Builder
public class TbQna {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_qna_idx")
    private Long qnaIndex;
    private String qnaType;
//    private Long qnaUserindex;
    private String qnaTitle;
    private String qnaContent;
    @Enumerated(EnumType.STRING)
    private QnaStatus qnaIsans;
    @CreatedDate
    private LocalDateTime qnaRegdate;
    private LocalDateTime qnaAnsdate;

    @ManyToOne
    private TbMember tbMember;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tbQna") // 하나의 카테고리에 여러게의 파트너가 연결
    private List<TbQnaAnswer> tbQnaAnswerList;
}
