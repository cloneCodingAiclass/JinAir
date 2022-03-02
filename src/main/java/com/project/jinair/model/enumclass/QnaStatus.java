package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public enum QnaStatus {

    AnswerComplete(0,"완료", "답변 완료"),
    AnswerNotComplete(1,"미완료", "답변 미완료");

    private Integer id;
    private String title;
    private String description;
}
