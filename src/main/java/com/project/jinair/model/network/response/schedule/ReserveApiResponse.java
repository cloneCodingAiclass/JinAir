package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.enumclass.PaymentStatus;
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
}
