package com.project.jinair.model.network.response.schedule;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScheduleApiResponse {
    private Long sch_index;
    private LocalDateTime schDepartureDate;
    private LocalDateTime schArrivalDate;
    private String schDeparturePoint;
    private String schArrivalPoint;
    private Long schBasicPrice;
    // 이넘 클래스 없음
    private String schAirplaneType;
    private Long schAirplaneIdex;
    private Long schAreaIndex;
}
