package com.project.jinair.model.network.response.board;

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
    // 이넘클래스 없음
    private String ev_status;
}
