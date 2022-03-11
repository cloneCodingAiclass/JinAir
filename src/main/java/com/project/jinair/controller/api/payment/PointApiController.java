package com.project.jinair.controller.api.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.payment.PointApiRequest;
import com.project.jinair.model.network.response.payment.PointApiResponse;
import com.project.jinair.repository.TbPointRepository;
import com.project.jinair.service.payment.PointApiService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/point")
@RequiredArgsConstructor
public class PointApiController implements CrudInterface<PointApiRequest, PointApiResponse> {

    private final PointApiService pointApiService;

    @Override
    @PostMapping("")
    public Header<PointApiResponse> create(@RequestBody Header<PointApiRequest> request) {
        System.out.println(request);
        return pointApiService.create(request);
    }

    @Override
    @GetMapping("/{id}")
    public Header<PointApiResponse> read(@PathVariable(name = "id") Long id) {
        return pointApiService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<PointApiResponse> update(@RequestBody Header<PointApiRequest> request) {
        return pointApiService.update(request);
    }

    @Override
    @DeleteMapping("/{id}")
    public Header<PointApiResponse> delete(@PathVariable(name = "id")Long id) {
        return pointApiService.delete(id);
    }

}
