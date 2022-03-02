package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum PaymentStatus {

    PaymentFinished(0,"결제 완료", "결제 완료 상태"),
    Canceled(1,"결제 취소", "결제 취소 상태"),
    Paying(2,"결제중", "결제 진행중");


    private Integer id;
    private String title;
    private String description;
}
