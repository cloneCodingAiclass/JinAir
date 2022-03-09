package com.project.jinair.model.network.response.board;

import com.project.jinair.model.enumclass.EventStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EventApiResponse {
    private Long evIndex;
    private String evContent;
    private String evFile;
    private LocalDateTime evStartDay;
    private LocalDateTime evEndDay;
    private LocalDateTime evRegdate;
    private EventStatus evStatus;
}
