package com.project.jinair.repository;

import com.project.jinair.model.entity.schedule.TbSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TbScheduleRepository extends JpaRepository<TbSchedule, Long> {


    List<TbSchedule> findBySchAirplaneNameAndSchDepartureDateAndSchDeparturePointAndSchArrivalPoint(String schAirplaneName, LocalDateTime schDepartureDate, String schDeparturePoint, String schArrivalPoint);
    List<TbSchedule> findBySchAirplaneNameAndSchDepartureDate(String schAirplaneName, LocalDateTime schDepartureDate);
    List<TbSchedule> findBySchAirplaneName(String schAirplaneName);
    List<TbSchedule> findBySchAirplaneNameAndSchDeparturePointAndSchArrivalPoint(String schAirplaneNAme, String schDeparturePoint, String schArrivalPoint);

}
