package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TbPointRepository extends JpaRepository<TbPoint, Long> {
    List<TbPoint> findByPoUserindex(Long id);
}
