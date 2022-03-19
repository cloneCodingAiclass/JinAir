package com.project.jinair.controller.api.schedule;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ReserveApiRequest;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import com.project.jinair.service.reservation.ReservationApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reservation")
@RequiredArgsConstructor
public class ReservationApiController implements CrudInterface<ReserveApiRequest, ReserveApiResponse> {

/*
{
    "transactionTime": "2022-03-04T11:01:36.9120232",
    "resultCode": "OK",
    "description": "OK",
    "data": {
        "rUserindex":1,
        "rPercentpoint": 10000,
        "rStatus": "Progress",
        "rUserStatus": "Member",
        "rReserNum": "test",
        "rPayment": "test",
        "rPetsidx": 1,
        "rBaggageidx": 1,
        "rInsuranceidx": 1,
        "rScheduleidx": 1,
        "rTotal": 10000,
        "reSchBasicPrice" : 10000,
        "reSchDepPoint" : "test",
        "reSchArrPoint" : "test",
        "reSchStartTime" : "2022-04-12T00:00:00",
        "reAirplainType" : "test",
        "reSchName" : "test"
    }
}
*/

    private final ReservationApiLogicService reservationApiLogicService;

    @Override
    @PostMapping("")
    public Header<ReserveApiResponse> create(@RequestBody Header<ReserveApiRequest> request) {
        return reservationApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<ReserveApiResponse> read(@PathVariable(name = "id") Long id) {
        return reservationApiLogicService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<ReserveApiResponse> update(@RequestBody Header<ReserveApiRequest> request) {
        return reservationApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<ReserveApiResponse> delete(@PathVariable(name = "id") Long id) {
        return reservationApiLogicService.delete(id);
    }

    @PostMapping("/creating")
    public Long creating() {
        return reservationApiLogicService.creating();
    }
}
