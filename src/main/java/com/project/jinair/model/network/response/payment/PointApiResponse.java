package com.project.jinair.model.network.response.payment;

import com.project.jinair.model.entity.member.TbMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PointApiResponse {
    private Long pIndex;
    private Long pPoint;
    private String pMemo;
    private String pUserindex;

}
