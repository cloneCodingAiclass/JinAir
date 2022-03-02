package com.project.jinair.model.network.response.info;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AirportApiResponse {
    private Long aptIndex;
    private String aptNation;
    private String aptAirport;
    private String aptRevType;
    private String aptTypeDetail;
}
