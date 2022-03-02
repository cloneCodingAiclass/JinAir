package com.project.jinair.model.enumclass;


import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum AirplaneSeatStatus {

    JiniPl(0,"지니 플러스", "Plus"),
    JiniSt(1,"지니 스트레치", "Stretch"),
    JiniFs(2,"지니 패스트", "Fast"),
    JinuEE(3,"비상구열", "Emergency Exit"),
    JinuSA(4,"스탠다드 A", "Standard A"),
    JinuSB(5,"스탠다드 B", "Standard B");


    private Integer id;
    private String title;
    private String description;
}