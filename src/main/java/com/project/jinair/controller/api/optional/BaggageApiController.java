package com.project.jinair.controller.api.optional;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.Optional.BaggageApiRequest;
import com.project.jinair.model.network.response.Optional.BaggageApiResponse;
import com.project.jinair.service.BaggageApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/optional/baggage")
@RequiredArgsConstructor
public class BaggageApiController implements CrudInterface<BaggageApiRequest, BaggageApiResponse> {

    private final BaggageApiLogicService baggageApiLogicService;

/*
{
    "transaction_time":"2022-03-03",
    "resultCode":"ok",
    "description":"ok",
    "data":{
         "bgType": 20000,
         "bgPrice": 40000,
         "bgStatus" : "Apply"
    }
}
*/

    @Override
    @PostMapping("")
    public Header<BaggageApiResponse> create(@RequestBody Header<BaggageApiRequest> request) {
        System.out.println(request);
        return baggageApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}") // http://localhost:8080/api/optional/baggage/{id} (get)
    public Header<BaggageApiResponse> read(@PathVariable(name = "id") Long id) {
        return baggageApiLogicService.read(id);
    }

/*
{
    "transaction_time":"2022-03-03",
    "resultCode":"ok",
    "description":"ok",
    "data":{
         "bgIndex" : 2,
         "bgType": 44000,
         "bgPrice": 20000,
         "bgStatus": "Apply"
    }
}
*/

    @Override
    @PutMapping("")
    public Header<BaggageApiResponse> update(@RequestBody Header<BaggageApiRequest> request) {
        return baggageApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<BaggageApiResponse> delete(@PathVariable(name="id") Long id) {
        return baggageApiLogicService.delete(id);
    }
}
