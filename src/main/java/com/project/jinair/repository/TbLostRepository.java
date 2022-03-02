package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbLost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbLostRepository extends JpaRepository<TbLost, Long> {
}
