package com.project.jinair.model.network.response.payment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class AmountVO {

   private Integer total, tax_free, vat, point, discount;

}
