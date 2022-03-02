package com.project.jinair.model.network.response.board;

import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.network.response.board.QnaAnswerApiResponse;
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
public class QnaApiResponse {
    private Long qnaIndex;
    private String qnaType;
    private String qnaTitle;
    private String qnaContent;
    private QnaStatus qnaIsans;
    private LocalDateTime qnaRegdate;
    private LocalDateTime qnaAnsdate;

    private List<QnaAnswerApiResponse> qnaAnswerApiResponseList;
}
