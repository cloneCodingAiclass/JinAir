package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbAirplane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbAirplaneRepository extends JpaRepository<TbAirplane, Long> {
}