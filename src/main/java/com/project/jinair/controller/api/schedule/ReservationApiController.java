package com.project.jinair.controller.api.schedule;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.schedule.TbReservation;
import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ReserveApiRequest;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import com.project.jinair.model.network.response.schedule.ScheduleApiResponse;
import com.project.jinair.service.reservation.ReservationApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

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
    @PersistenceContext
    private EntityManager em;

    public Long searchperson(){
        List date = em.createQuery("select count(r.reIndex) from TbReservation r where (r.reSchStartTime, 'yyyy-mm-dd') = today").getResultList();

        return null;
    }

    @GetMapping("/list/{startIdx}/{endIdx}") // http://localhost:8080/api/reservation/list
    public Header<List<ReserveApiResponse>> findAll(
            @PathVariable(name = "startIdx") Long startIdx, @PathVariable(name = "endIdx") Long endIdx) {
        return reservationApiLogicService.find(startIdx, endIdx);
    }

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

    @GetMapping("/{id}/{enum}")
    public Header<ReserveApiResponse> readPayment(@PathVariable(name = "id") Long id, @PathVariable(name = "paymentStatus") PaymentStatus paymentStatus) {
        return reservationApiLogicService.readPayment(id, paymentStatus);
    }

    @PutMapping("/paymentsUpdate")
    public ReserveApiResponse paymentsUpdate(@RequestBody List<ReserveApiRequest> request) {
        System.out.println(request);
        return reservationApiLogicService.paymentsUpdate(request);
    }

    @GetMapping("/member/{reIndex}/{userid}")
    public void member(@PathVariable(name = "reIndex") Long reIndex, @PathVariable(name = "userid") Long userid) {
        reservationApiLogicService.member(reIndex, userid);
    }

    // 탑승자 정보 입력
    @PutMapping("/updating")
    public void updating(@RequestBody Header<ReserveApiRequest> request) {
        reservationApiLogicService.updating(request);
    }
    @PutMapping("/updating1")
    public void updating1(@RequestBody Header<ReserveApiRequest> request) {
        reservationApiLogicService.updating1(request);
    }
    @PutMapping("/updating2")
    public void updating2(@RequestBody Header<ReserveApiRequest> request) {
        reservationApiLogicService.updating2(request);
    }


    // 출발지, 도착지, 가는날 조회
    @PostMapping("/go") // http://localhost:8080/api/reservation/go
    public Header<List<ReserveApiResponse>> go(
            @RequestParam(value = "schDeparturePoint") String schDeparturePoint,
            @RequestParam(value = "schArrivalPoint") String schArrivalPoint,
            @RequestParam(value = "goDateSelectOptt") String goDateSelectOptt
    ) {
        return reservationApiLogicService.go(schDeparturePoint, schArrivalPoint, goDateSelectOptt);
    }




}
