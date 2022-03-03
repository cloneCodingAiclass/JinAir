package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.model.network.response.Optional.InsuranceApiResponse;
import com.project.jinair.model.network.response.Optional.PetsApiResponse;
import com.project.jinair.model.network.response.member.VisitApiresponse;
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
    private Long rIndex;
    private Long rPercentpoint;
    private PaymentStatus rStatus;
    // 회원 여부 이넘 클래스 없음
    private String rUserStatus;
    private String rReserNum;
    private String rPayment;
    private Long rPetsidx;
    private Long rBaggageidx;
    private Long rInsuranceidx;
    private Long rScheduleidx;
    private Long rTotal;
    private Long rUserindex;

    // 여러 좌석을 예매시
    private List<ScheduleApiResponse> scheduleApiResponseList;
    // 보험
    private List<InsuranceApiResponse> insuranceApiResponseList;
    // 수하물
    private List<BaggageApiResponse> baggageApiResponseList;
    // 애완동물
    private List<PetsApiResponse> petsApiResponseList;

    //비회원 정보
    private List<VisitApiresponse> visitApiresponseList;
}
