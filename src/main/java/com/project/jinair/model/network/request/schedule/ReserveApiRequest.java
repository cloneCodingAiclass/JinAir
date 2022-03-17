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
    private Long reIndex;
    private Long reUserindex;
    private Long rePercentpoint;
    private PaymentStatus reStatus;
    private String reUserStatus;
    private String reReserNum;
    private String rePayment;
    private Long rePetsidx;
    private Long reBaggageidx;
    private Long reInsuranceidx;
    private Long reScheduleidx;
    private Long reTotal;
}
