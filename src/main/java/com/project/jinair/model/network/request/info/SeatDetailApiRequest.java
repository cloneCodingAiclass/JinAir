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
    private String sd_id;
    private AirplaneSeatStatus sd_status;
    private Long sd_seatcnt;
    private Long sd_price;
    private Long as_index;
}
