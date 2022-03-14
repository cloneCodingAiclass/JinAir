package com.project.jinair.repository;

import com.project.jinair.model.entity.info.TbAirplane;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TbAirplaneRepository extends JpaRepository<TbAirplane, Long> {

    List<TbAirplane> findByApType(String type);
}
