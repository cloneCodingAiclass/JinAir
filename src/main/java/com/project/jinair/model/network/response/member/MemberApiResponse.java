package com.project.jinair.model.network.response.member;

import com.project.jinair.model.enumclass.GenderStatus;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MemberApiResponse {
    private Long memIndex;
    private String memUserid;
    private String memUserpw;
    private String memKorFirstName;
    private String memKorLastName;
    private String memEngFirstName;
    private String memEngLastName;
    private String memHpNation;
    private String memHp;
    private String memEmail;
    private GenderStatus memGender;
    private String memBirth;
    private String memPassport;
    private String memNation;
    private String memZipcode;
    private String memAddress1;
    private String memAddress2;
    private String memAddress3;
    private String memEmailIsagree;
    private String memSnsIsagree;

    // 예약 리스트
    private List<ReserveApiResponse> reserveApiResponseList;

    // 쿠폰 리스트
}