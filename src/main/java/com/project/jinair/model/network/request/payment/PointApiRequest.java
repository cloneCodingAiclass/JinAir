package com.project.jinair.model.network.request.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PointApiRequest {
    private Long poIndex;
    private Long poPoint;
    private String poMemo;
    private Long poUserindex;

}
