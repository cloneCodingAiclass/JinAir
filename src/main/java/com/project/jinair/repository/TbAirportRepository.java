package com.project.jinair.repository;

import com.project.jinair.model.entity.info.TbAirport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbAirportRepository extends JpaRepository<TbAirport, Long> {
}
