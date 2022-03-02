package com.project.jinair.model.network.request.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventApiRequest {
    private Long evIndex;
    private String evContent;
    private String evFile;
    private LocalDateTime evStartDay;
    private LocalDateTime evEndDay;
    private LocalDateTime evRegdate;
    private String ev_status;

}