package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbNotifi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbNotifiRepository extends JpaRepository<TbNotifi, Long> {
}
