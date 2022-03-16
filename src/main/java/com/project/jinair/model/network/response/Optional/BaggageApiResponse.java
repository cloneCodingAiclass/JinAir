package com.project.jinair.model.network.response.Optional;

import com.project.jinair.model.enumclass.ApplyStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BaggageApiResponse {
    private Long bgIndex;
    private String bgType;
    private BigDecimal bgPrice;
    private String bgNation;
    private String bgStandard;
//    @Enumerated(EnumType.STRING)
//    private ApplyStatus bgStatus;
}
