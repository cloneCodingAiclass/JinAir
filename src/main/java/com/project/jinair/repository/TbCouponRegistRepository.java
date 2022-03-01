package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbCouponRegist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface TbCouponRegistRepository extends JpaRepository<TbCouponRegist, Long> {
    // 쿠폰코드
    Optional<TbCouponRegist> findByCrCode(String crCode);

    // 쿠폰 타입
    Optional<TbCouponRegist> findByCrType(String crType);


}
