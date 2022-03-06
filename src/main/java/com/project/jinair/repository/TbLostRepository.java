package com.project.jinair.repository;

import com.project.jinair.model.entity.board.TbLost;
import com.project.jinair.model.network.request.board.LostApiRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TbLostRepository extends JpaRepository<TbLost, Long> {

    List<TbLost> findByLosAirplaneAndLosAirportAreaAndLosTypeAndAndLosRegdate(String airplane, String airport, String type, LocalDateTime regdate);

}
