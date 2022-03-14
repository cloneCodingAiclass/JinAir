package com.project.jinair.service.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.schedule.TbSchedule;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.schedule.ScheduleApiRequest;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.repository.TbScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
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
                .schNationType(scheduleApiRequest.getSchNationType())
                .schAirplaneType(scheduleApiRequest.getSchAirplaneType())
                .schAirplaneName(scheduleApiRequest.getSchAirplaneName())
                .schDepartureDate(LocalDateTime.parse(scheduleApiRequest.getSchDepartureDate()))
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
                .schIndex(tbSchedule.getSchIndex())
                .schNationType(tbSchedule.getSchNationType())
                .schAirplaneType(tbSchedule.getSchAirplaneType())
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
                .schIndex(tbSchedule.getSchIndex())
                .schNationType(tbSchedule.getSchNationType())
                .schAirplaneType(tbSchedule.getSchAirplaneType())
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

    public Header<List<ScheduleApiResponse>> search(Pageable pageable) {
        Page<TbSchedule> tbSchedules = tbScheduleRepository.findAll(pageable);
        List<ScheduleApiResponse> scheduleApiResponseList = tbSchedules.stream()
                .map(users -> responseSchedule(users))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbSchedules.getTotalPages())
                .totalElements(tbSchedules.getTotalElements())
                .currentPage(tbSchedules.getNumber())
                .currentElements(tbSchedules.getNumberOfElements())
                .build();
        return Header.OK(scheduleApiResponseList, pagination);
    }

    public Header<List<ScheduleApiResponse>> find(String schAirplaneType, String schAirplaneName, String schDepartureDate, String schDeparturePoint, String schArrivalPoint){
        List<TbSchedule> tbSchedule = tbScheduleRepository.findBySchAirplaneTypeAndSchAirplaneNameAndSchDepartureDateAndSchDeparturePointAndSchArrivalPoint(schAirplaneType, schAirplaneName, LocalDateTime.parse(schDepartureDate), schDeparturePoint, schArrivalPoint);
        List<ScheduleApiResponse> scheduleApiResponseList = tbSchedule.stream()
                .map(user -> responseSchedule(user))
                .collect(Collectors.toList());

        return Header.OK(scheduleApiResponseList);
    }



    public Header<List<ScheduleApiResponse>> Departure(String schDeparturePoint){
        List<TbSchedule> tbSchedule = tbScheduleRepository.findBySchDeparturePoint(schDeparturePoint);
        List<ScheduleApiResponse> scheduleApiResponseList = tbSchedule.stream()
                .map(user -> responseSchedule(user))
                .collect(Collectors.toList());

        return Header.OK(scheduleApiResponseList);
    }

    public Header<List<ScheduleApiResponse>> DepAri(String schDeparturePoint, String schArrivalPoint){
        LocalDateTime now = LocalDateTime.now();
        List<TbSchedule> tbSchedule = tbScheduleRepository.findFirstBySchDeparturePointAndSchArrivalPointAndSchDepartureDateGreaterThanOrderBySchBasicPriceAsc(schDeparturePoint, schArrivalPoint, LocalDateTime.parse(String.valueOf(now).substring(0,19)));
        List<ScheduleApiResponse> scheduleApiResponseList = tbSchedule.stream()
                .map(user -> responseSchedule(user))
                .collect(Collectors.toList());
        return Header.OK(scheduleApiResponseList);
    }

}
