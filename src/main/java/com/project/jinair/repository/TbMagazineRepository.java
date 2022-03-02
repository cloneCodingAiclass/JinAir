package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbMagazine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbMagazineRepository extends JpaRepository<TbMagazine, Long> {
}
