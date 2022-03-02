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
public class NotifyApiRequest {
    private Long noIndex;
    private String noTitle;
    private String noContents;
    private String noFile;
    private LocalDateTime noRegdate;
}
