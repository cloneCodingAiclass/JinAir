package com.project.jinair.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbFaqRepository extends JpaRepository<TbFaqRepository, Long> {
}
