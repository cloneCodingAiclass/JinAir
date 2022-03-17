package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import com.project.jinair.model.network.response.member.VisitApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    // 회원 여부 이넘 클래스 없음
    private String reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private Long reTotal;

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
