package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbFaq;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbFaqRepository extends JpaRepository<TbFaq, Long> {
}
