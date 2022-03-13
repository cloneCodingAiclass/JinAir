package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbUsercoupon;
import com.project.jinair.model.enumclass.CouponStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;


@Repository
public interface TbUsercouponRepository extends JpaRepository<TbUsercoupon, Long> {

    Page<TbUsercoupon> findByUcUserindex(Long id, Pageable pageable);
    Page<TbUsercoupon> findByUcUserindexAndUcIsUseAndUcEnddayBetween(Long id, CouponStatus enumid, LocalDateTime startDate, LocalDateTime endDate, Pageable pageable);

    List<TbUsercoupon> findFirstByUcCode(String code);


}
