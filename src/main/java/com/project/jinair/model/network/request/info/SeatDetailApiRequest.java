package com.project.jinair.model.network.request.info;

import com.project.jinair.model.enumclass.AirplaneSeatStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SeatDetailApiRequest {
    private Long sdIndex;
    private String sdId;
    private AirplaneSeatStatus sdStatus;
    private Long sdSeatcnt;
    private Long sdPrice;

}
