package com.project.jinair.model.enumclass;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter

public enum LostStatus {

    NotReceived(0,"미수령", "수령 미완료"),
    ToBeReceived(1,"수령중", "수령 예정"),
    Receipt(2,"수령", "수령 완료"),
    Delivery(3,"배송", "배송 수령");


    private Integer id;
    private String title;
    private String description;
}