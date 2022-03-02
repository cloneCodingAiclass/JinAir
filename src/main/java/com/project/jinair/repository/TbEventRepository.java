package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbEvent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbEventRepository extends JpaRepository<TbEvent, Long> {
}