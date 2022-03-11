package com.project.jinair.model.network.response.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PointApiResponse {
    private Long poIndex;
    private Long poPoint;
    private String poMemo;
    private Long poUserindex;

}
