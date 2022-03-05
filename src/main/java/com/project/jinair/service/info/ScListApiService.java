package com.project.jinair.service.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.info.TbAirplane;
import com.project.jinair.model.entity.schedule.TbSchedule;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ScheduleApiRequest;
import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.repository.TbAirplaneRepository;
import com.project.jinair.repository.TbScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScListApiService implements CrudInterface<ScheduleApiRequest, ScheduleApiResponse> {

    private final TbScheduleRepository tbScheduleRepository;

    @Override
    public Header<ScheduleApiResponse> create(Header<ScheduleApiRequest> request) {
        ScheduleApiRequest scheduleApiRequest = request.getData();
        TbSchedule tbSchedule = TbSchedule.builder()
                .schAirplaneId(scheduleApiRequest.getSchAirplaneId())
                .schAirplaneName(scheduleApiRequest.getSchAirplaneName())
                .schDepartureDate(scheduleApiRequest.getSchDepartureDate())
                .schDeparturePoint(scheduleApiRequest.getSchDeparturePoint())
                .schStartTime(scheduleApiRequest.getSchStartTime())
                .schArrivalPoint(scheduleApiRequest.getSchArrivalPoint())
                .schArrivalDate(scheduleApiRequest.getSchArrivalDate())
                .schAirplaneSeat(scheduleApiRequest.getSchAirplaneSeat())
                .schFlyingTime(scheduleApiRequest.getSchFlyingTime())
                .schBasicPrice(scheduleApiRequest.getSchBasicPrice())
                .schPoint(scheduleApiRequest.getSchPoint())
                .build();
        TbSchedule newSchedule = tbScheduleRepository.save(tbSchedule);
        return response(newSchedule);
    }

    @Override
    public Header<ScheduleApiResponse> read(Long id) {
        return tbScheduleRepository.findById(id)
            .map(schedule -> response(schedule))
            .orElseGet(
                    () -> Header.ERROR("NO DATA")
            );
    }

    // 스케줄 Update 기능 없음
    @Override
    public Header<ScheduleApiResponse> update(Header<ScheduleApiRequest> request) {
        return null;
    }

    @Override
    public Header delete(Long id) {
        Optional<TbSchedule> tbSchedule = tbScheduleRepository.findById(id);

        return tbSchedule.map(schedule ->{
            tbScheduleRepository.delete(schedule);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<ScheduleApiResponse> response(TbSchedule tbSchedule){
        ScheduleApiResponse scheduleApiResponse = ScheduleApiResponse.builder()
                .schAirplaneId(tbSchedule.getSchAirplaneId())
                .schAirplaneName(tbSchedule.getSchAirplaneName())
                .schDepartureDate(tbSchedule.getSchDepartureDate())
                .schDeparturePoint(tbSchedule.getSchDeparturePoint())
                .schStartTime(tbSchedule.getSchStartTime())
                .schArrivalPoint(tbSchedule.getSchArrivalPoint())
                .schArrivalDate(tbSchedule.getSchArrivalDate())
                .schAirplaneSeat(tbSchedule.getSchAirplaneSeat())
                .schFlyingTime(tbSchedule.getSchFlyingTime())
                .schBasicPrice(tbSchedule.getSchBasicPrice())
                .schPoint(tbSchedule.getSchPoint())
                .build();
        return Header.OK(scheduleApiResponse);
    }
    private ScheduleApiResponse responseSchedule(TbSchedule tbSchedule) {
        ScheduleApiResponse scheduleApiResponse = ScheduleApiResponse.builder()
                .schAirplaneId(tbSchedule.getSchAirplaneId())
                .schAirplaneName(tbSchedule.getSchAirplaneName())
                .schDepartureDate(tbSchedule.getSchDepartureDate())
                .schDeparturePoint(tbSchedule.getSchDeparturePoint())
                .schStartTime(tbSchedule.getSchStartTime())
                .schArrivalPoint(tbSchedule.getSchArrivalPoint())
                .schArrivalDate(tbSchedule.getSchArrivalDate())
                .schAirplaneSeat(tbSchedule.getSchAirplaneSeat())
                .schFlyingTime(tbSchedule.getSchFlyingTime())
                .schBasicPrice(tbSchedule.getSchBasicPrice())
                .schPoint(tbSchedule.getSchPoint())
                .build();
        return scheduleApiResponse;
    }

    public Header<List<ScheduleApiResponse>> search() {
        List<TbSchedule> tbSchedules = tbScheduleRepository.findAll();
        List<ScheduleApiResponse> scheduleApiResponseList = tbSchedules.stream()
                .map(users -> responseSchedule(users))
                .collect(Collectors.toList());

        return Header.OK(scheduleApiResponseList);
    }

}
