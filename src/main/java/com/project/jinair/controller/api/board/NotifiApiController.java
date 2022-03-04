package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbNotifi;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.NotifyApiRequest;
import com.project.jinair.model.network.response.board.NotifyApiResponse;
import com.project.jinair.service.board.NotifyApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // json 형식으로 데이터 주고 받음. 해당 url를 통해 접근하는 방식.
@RequestMapping("/api/notify")
@RequiredArgsConstructor
public class NotifiApiController implements CrudInterface<NotifyApiRequest, NotifyApiResponse> {

    private final NotifyApiLogicService notifyLogicService;

    @GetMapping("/list")
    public List<TbNotifi> list() {
        return notifyLogicService.getNotiList();
    }

    @Override
    @PostMapping("")
    public Header<NotifyApiResponse> create(@RequestBody Header<NotifyApiRequest> request) {
        return notifyLogicService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<NotifyApiResponse> read(@PathVariable(name = "id") Long id) {
        return notifyLogicService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<NotifyApiResponse> update(@RequestBody Header<NotifyApiRequest> request) {
        return notifyLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<NotifyApiResponse> delete(@PathVariable(name = "id") Long id) {
        return notifyLogicService.delete(id);
    }
}