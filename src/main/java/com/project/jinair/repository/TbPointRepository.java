package com.project.jinair.repository;

import com.project.jinair.model.entity.payment.TbPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbPointRepository extends JpaRepository<TbPoint, Long> {

}
