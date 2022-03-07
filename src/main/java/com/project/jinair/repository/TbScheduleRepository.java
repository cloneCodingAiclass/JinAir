package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TbScheduleRepository extends JpaRepository<TbSchedule, Long> {


    List<TbSchedule> findBySchAirplaneIdAndSchDepartureDateAndSchDeparturePointAndSchArrivalPoint(String schAirplaneId, LocalDateTime schDepartureDate, String schDeparturePoint, String schArrivalPoint);
    List<TbSchedule> findBySchAirplaneIdAndSchDepartureDate(String schAirplaneId, LocalDateTime schDepartureDate);
    List<TbSchedule> findBySchAirplaneId(String schAirplaneId);
    List<TbSchedule> findBySchAirplaneIdAndSchDeparturePointAndSchArrivalPoint(String schAirplaneId, String schDeparturePoint, String schArrivalPoint);

}
