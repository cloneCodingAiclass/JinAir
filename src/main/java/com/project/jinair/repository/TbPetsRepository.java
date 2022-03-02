package com.project.jinair.repository;

import com.project.jinair.model.entity.optional.TbPets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TbPetsRepository extends JpaRepository<TbPets, Long> {
}
