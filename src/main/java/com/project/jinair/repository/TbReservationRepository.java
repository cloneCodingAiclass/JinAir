package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbReservationRepository extends JpaRepository<TbReservation, Long> {
}
