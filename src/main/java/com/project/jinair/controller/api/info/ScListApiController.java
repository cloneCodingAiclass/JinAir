package com.project.jinair.controller.api.info;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ScheduleApiRequest;
import com.project.jinair.model.network.response.info.AirplaneApiResponse;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.service.info.AirplaneApiService;
import com.project.jinair.service.info.ScListApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
    public Header<List<ScheduleApiResponse>> findAll() {
        return scListApiService.search();
    }

}
