package com.project.jinair.model.network.response.schedule;

import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.info.AirportApiResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScheduleApiResponse {
    private Long schIndex;
    private String schAirplaneId;
    private String schAirplaneName;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime schDepartureDate;
    private String schDeparturePoint;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime schStartTime;
    private String schArrivalPoint;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime schArrivalDate;
    private Long schAirplaneSeat;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime schFlyingTime;
    private Long schBasicPrice;
    private Long schPoint;

    // 공항 리스트
    private List<AirportApiResponse> airportApiResponseList;
    // 항공기 리스트
    private List<AirplaneApiResponse> airplaneApiResponseList;

}
