package com.project.jinair.model.network.request.info;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AirplaneApiRequest {
    private Long apIndex;
    private String apName;
    private String apId;
    private Long apSeatSum;
    private Long apSeatBiz;
    private Long apSeatPlus;

}
