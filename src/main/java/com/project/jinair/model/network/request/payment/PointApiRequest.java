package com.project.jinair.model.network.request.payment;

import com.project.jinair.model.entity.member.TbMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PointApiRequest {
    private Long pIndex;
    private Long pPoint;
    private String pMemo;

}
