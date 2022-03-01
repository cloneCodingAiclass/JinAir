package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbCouponRegist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
public interface TbCouponRegistRepository extends JpaRepository<TbCouponRegist, Long> {
    // 쿠폰코드
    Optional<TbCouponRegist> findByCrCode(String CrCode);

    // 쿠폰 타이틀
    Optional<TbCouponRegist> findByCrRegdate(LocalDateTime regDate);


}
