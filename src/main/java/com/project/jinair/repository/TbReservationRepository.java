package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbReservation;
import com.project.jinair.model.entity.schedule.TbSchedule;
import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.enumclass.UserStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TbReservationRepository extends JpaRepository<TbReservation, Long> {

    Optional<TbReservation> findByReUserindexAndReStatus(Long id, PaymentStatus paymentStatus);
    List<TbReservation> findAllByReUserindexAndReStatus(Long id, PaymentStatus paymentStatus);
    List<TbReservation> findAllByReIndexBetween(Long startIdx, Long endIdx);

}
