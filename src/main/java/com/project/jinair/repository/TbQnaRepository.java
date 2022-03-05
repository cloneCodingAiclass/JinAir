package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.enumclass.QnaType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TbQnaRepository extends JpaRepository<TbQna, Long> {
    Optional<TbQna> findByQnaIndex(Long id);
    List<TbQna> findByQnaType(QnaType qnaType);
    List<TbQna> findByQnaTitleContaining(String qnaType);
}
