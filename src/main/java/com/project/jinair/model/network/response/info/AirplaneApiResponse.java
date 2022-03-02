package com.project.jinair.model.network.response.info;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AirplaneApiResponse {
    private Long apIndex;
    private String apName;
    private String apId;
    // 좌석수
    private Long apSeat;

    private List<AirplaneSeatApiResponse> airplaneSeatApiResponseList;
}
