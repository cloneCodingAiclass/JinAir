package com.project.jinair.model.entity.payment;

import com.project.jinair.model.entity.member.TbMember;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
        name="seq_point_idx",
        sequenceName="seq_point_idx",
        initialValue = 1,
        allocationSize = 1
)
@Entity
@Builder
public class TbPoint {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_point_idx")
    private Long pIndex;
    private Long pPoint;
    private String pMemo;
//    private String pUserindex;

    @ManyToOne
    private TbMember tbMember;

}
