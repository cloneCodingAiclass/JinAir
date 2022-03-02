package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbUsercoupon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbUsercouponRepository extends JpaRepository<TbUsercoupon, Long> {

}
