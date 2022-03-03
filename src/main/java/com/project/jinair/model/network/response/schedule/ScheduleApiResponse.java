package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.info.AirportApiResponse;
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

    // 공항 리스트
    private List<AirportApiResponse> airportApiResponseList;
    // 항공기 리스트
    private List<AirplaneApiResponse> airplaneApiResponseList;

}
