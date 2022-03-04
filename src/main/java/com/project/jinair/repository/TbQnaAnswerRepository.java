package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbQnaAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TbQnaAnswerRepository extends JpaRepository<TbQnaAnswer, Long> {
    Optional<TbQnaAnswer> findByQaIndex(Long id);
    Optional<TbQnaAnswer> findById(Long id);
}
