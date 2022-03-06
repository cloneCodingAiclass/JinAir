package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.LostApiRequest;
import com.project.jinair.model.network.response.board.LostApiResponse;
import com.project.jinair.service.board.LostApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lost")
@RequiredArgsConstructor
public class LostApiController implements CrudInterface<LostApiRequest, LostApiResponse> {

    private final LostApiLogicService lostApiLogicService;

    @Override
    @PostMapping("")
    public Header<LostApiResponse> create(@RequestBody Header<LostApiRequest> request) {
        return lostApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<LostApiResponse> read(@PathVariable(name = "id") Long id) {
        return lostApiLogicService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<LostApiResponse> update(@RequestBody Header<LostApiRequest> request) {
        return lostApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<LostApiResponse> delete(@PathVariable(name = "id") Long id) {
        return lostApiLogicService.delete(id);
    }

    @GetMapping("")
    public Header<List<LostApiResponse>> list(@PageableDefault(sort = {"losIndex"}, direction = Sort.Direction.DESC, size = 3)Pageable pageable){
        return lostApiLogicService.list(pageable);
    }
}
