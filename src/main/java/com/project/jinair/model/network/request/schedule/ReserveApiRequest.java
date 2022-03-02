package com.project.jinair.model.network.request.schedule;

import com.project.jinair.model.enumclass.PaymentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReserveApiRequest {
    private Long rIndex;
    private Long rPercentpoint;
    private PaymentStatus rStatus;

    private String rUserStatus;
    private String rReserNum;
    private String rPayment;
    private Long rPetsidx;
    private Long rBaggageidx;
    private Long rInsuranceidx;
    private Long rScheduleidx;
    private Long rTotal;

}
