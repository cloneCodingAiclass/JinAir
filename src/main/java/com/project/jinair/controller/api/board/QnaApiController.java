package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.service.board.QnaApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/qna")
@RequiredArgsConstructor
public class QnaApiController implements CrudInterface<QnaApiRequest, QnaApiResponse> {

    private final QnaApiLogicService qnaApiLogicService;

    @GetMapping("/list")
    public List<TbQna> list() {
        return qnaApiLogicService.getQnaList();
    }

    @Override
    @PostMapping("")
    public Header<QnaApiResponse> create(@RequestBody Header<QnaApiRequest> request) {
        return qnaApiLogicService.create(request);
    }

    @Override
    public Header<QnaApiResponse> read(@PathVariable(name = "id") Long id) {
        return qnaApiLogicService.read(id);
    }

    @Override
    public Header<QnaApiResponse> update(@RequestBody Header<QnaApiRequest> request) {
        return qnaApiLogicService.update(request);
    }

    @Override
    public Header<QnaApiResponse> delete(@PathVariable(name = "id") Long id) {
        return qnaApiLogicService.delete(id);
    }
}
