package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbScheduleRepository extends JpaRepository<TbSchedule, Long> {
}
