package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbUsercoupon;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TbUsercouponRepository extends JpaRepository<TbUsercoupon, Long> {

    Page<TbUsercoupon> findByUcUserindexContaining(Long id, Pageable pageable);

}
