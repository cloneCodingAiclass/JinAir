package com.project.jinair.controller.api.info;

import com.fasterxml.jackson.annotation.JsonFormat;
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

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/schedule")
@RequiredArgsConstructor
public class ScListApiController implements CrudInterface<ScheduleApiRequest, ScheduleApiResponse> {

    private final ScListApiService scListApiService;

    @Override
    @PostMapping("")        // http:localhost:8080/api/airplane(post)
    public Header<ScheduleApiResponse> create(@RequestBody Header<ScheduleApiRequest> request) {
        return scListApiService.create(request);
    }

    @Override
    @GetMapping("{id}")               // http:localhost:8080/api/airplane/1(get) 인덱스 x
    public Header<ScheduleApiResponse> read(@PathVariable(name = "id") Long id) {
        return scListApiService.read(id);
    }

    @Override
    public Header<ScheduleApiResponse> update(@RequestBody Header<ScheduleApiRequest> request) {
        return scListApiService.update(request);
    }

    @Override
    @DeleteMapping("{id}")               // http:localhost:8080/api/airplane/1(delete) 인덱스 x
    public Header<ScheduleApiResponse> delete(@PathVariable(name = "id") Long id) {
        return scListApiService.delete(id);
    }

    @GetMapping("/list") // http://localhost:8080/api/airplane
    public Header<List<ScheduleApiResponse>> findAll(@PageableDefault(sort = {"schIndex"}, direction = Sort.Direction.DESC) Pageable pageable) {
        return scListApiService.search(pageable);
    }

//    @GetMapping("/list/{schAirplaneId}")
//    public Header<List<ScheduleApiResponse>> find(@PathVariable(name = "schAirplaneId") String schAirplaneId) {
//        return scListApiService.find(schAirplaneId);
//    }
//    @PostMapping("/list/find")
//    public Header<List<ScheduleApiResponse>> find(@RequestParam(value = "schAirplaneId", required=false) String schAirplaneId,
//                                                  @RequestParam(value = "schDepartureDate", required=false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime schDepartureDate,
//                                                  @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
//                                                  @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint) {
//        System.out.println(schAirplaneId);
//        System.out.println(schDepartureDate);
//        System.out.println(schDeparturePoint);
//        System.out.println(schArrivalPoint);
//        return scListApiService.find(schAirplaneId, schDepartureDate, schDeparturePoint, schArrivalPoint);
//    }
    @PostMapping("/list/find")
    public Header<List<ScheduleApiResponse>> find(@RequestParam(value = "schAirplaneId", required=false) String schAirplaneId,
                                                  @RequestParam(value = "schDepartureDate", required=false) String schDepartureDate,
                                                  @RequestParam(value = "schDeparturePoint", required=false) String schDeparturePoint,
                                                  @RequestParam(value = "schArrivalPoint", required=false) String schArrivalPoint) {

        return scListApiService.find(schAirplaneId, schDepartureDate, schDeparturePoint, schArrivalPoint);
    }
}
