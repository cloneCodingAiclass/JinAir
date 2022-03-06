package com.project.jinair.model.network.response.board;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MagazineApiResponse {
    private Long mzIndex;
    private String mzTitle;
    private String mzImg;
    private String mzAnswer;
    private String mzPdf;
    private LocalDateTime mzRegdate;
}
