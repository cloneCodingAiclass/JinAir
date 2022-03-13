package com.project.jinair.controller.api.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ScheduleApiRequest;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.service.info.ScListApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schedule")
@RequiredArgsConstructor
public class ScListApiController implements CrudInterface<ScheduleApiRequest, ScheduleApiResponse> {

    private final ScListApiService scListApiService;

    @Override
    @PostMapping("")        // http:localhost:8080/api/schedule(post)
    public Header<ScheduleApiResponse> create(@RequestBody Header<ScheduleApiRequest> request) {
        return scListApiService.create(request);
    }

    @Override
    @GetMapping("{id}")               // http:localhost:8080/api/schedule/1(get) 인덱스 x
    public Header<ScheduleApiResponse> read(@PathVariable(name = "id") Long id) {
        return scListApiService.read(id);
    }

    @Override
    public Header<ScheduleApiResponse> update(@RequestBody Header<ScheduleApiRequest> request) {
        return scListApiService.update(request);
    }

    @Override
    @DeleteMapping("{id}")               // http:localhost:8080/api/schedule/1(delete) 인덱스 x
    public Header<ScheduleApiResponse> delete(@PathVariable(name = "id") Long id) {
        return scListApiService.delete(id);
    }

    @GetMapping("/list") // http://localhost:8080/api/schedule/list
    public Header<List<ScheduleApiResponse>> findAll(@PageableDefault(sort = {"schIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return scListApiService.search(pageable);
    }


    @PostMapping("/list/find")
    public Header<List<ScheduleApiResponse>> find(@RequestParam(value = "schAirplaneId", required=false) String schAirplaneId,
                                                  @RequestParam(value = "schDepartureDate", required=false) String schDepartureDate,
                                                  @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
                                                  @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint) {

        return scListApiService.find(schAirplaneId, schDepartureDate, schDeparturePoint, schArrivalPoint);
    }



    // 출발지 공항에 따른 스케줄 검색
    @PostMapping("/Departure") // http://localhost:8080/api/schedule/Departure
    public Header<List<ScheduleApiResponse>> Departure(@RequestParam(value = "schDeparturePoint") String schDeparturePoint) {
        return scListApiService.Departure(schDeparturePoint);
    }

    // 출발지, 도착지 공항에 따른 스케줄 검색
    @PostMapping("/DepAri") // http://localhost:8080/api/schedule/DepAri
    public Header<List<ScheduleApiResponse>> All(
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint") String schArrivalPoint
    ) {
        return scListApiService.DepAri(schDeparturePoint, schArrivalPoint);
    }

}
