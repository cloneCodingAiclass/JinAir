package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.enumclass.UserStatus;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import com.project.jinair.model.network.response.member.VisitApiResponse;
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
public class ReserveApiResponse {
    private Long reIndex;
    private Long reUserindex;
    private Long rePercentpoint;
    private PaymentStatus reStatus;
    private UserStatus reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private Long reTotal;           // 전체 금액
    private Long reSchBasicPrice;   // 기본 금액
    private String reSchDepPoint;   // 출발지
    private String reSchArrPoint;   // 도착지
    private LocalDateTime reSchStartTime;   // 출발 시간
    private LocalDateTime reSchEndTime;   // 도착 시간
    private String reAirplainType;  // 비행기 기종
    private String reSchName;       // 운항편 이름

    // 여러 좌석을 예매시
    private List<ScheduleApiResponse> scheduleApiResponseList;
    // 보험
    private List<InsuranceApiResponse> insuranceApiResponseList;
    // 수하물
    private List<BaggageApiResponse> baggageApiResponseList;
    // 애완동물
    private List<PetsApiResponse> petsApiResponseList;
    //비회원 정보
    private List<VisitApiResponse> visitApiResponseList;
}
