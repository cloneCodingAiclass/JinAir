package com.project.jinair.model.network.request.board;

import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QnaApiRequest {
    private Long qnaIndex;
    private QnaType qnaType;
    private String qnaTitle;
    private String qnaContent;
    private QnaStatus qnaIsans;
    private LocalDateTime qnaRegdate;
    private LocalDateTime qnaAnsdate;
    private Long qnaUserindex;

}
