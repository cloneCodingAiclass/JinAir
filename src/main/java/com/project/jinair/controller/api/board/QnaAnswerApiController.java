package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaAnswerApiRequest;
import com.project.jinair.model.network.response.board.QnaAnswerApiResponse;
import com.project.jinair.service.board.QnaAnswerApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/qnaAns")
@RequiredArgsConstructor
public class QnaAnswerApiController implements CrudInterface<QnaAnswerApiRequest, QnaAnswerApiResponse> {

    private final QnaAnswerApiLogicService qnaAnswerApiLogicService;

    @GetMapping("/list/{id}")
    public Header<List<QnaAnswerApiResponse>> List(@PathVariable(name = "id") Long id) {
        return qnaAnswerApiLogicService.getQnaList(id);
    }


    @Override
    @PostMapping("")
    public Header<QnaAnswerApiResponse> create(@RequestBody Header<QnaAnswerApiRequest> request) {
        return qnaAnswerApiLogicService.create(request);
    }

    @Override
//    @GetMapping("/list/{id}")
    public Header<QnaAnswerApiResponse> read(@PathVariable(name = "id") Long id) {
        return qnaAnswerApiLogicService.read(id);
    }

    @Override
    public Header<QnaAnswerApiResponse> update(Header<QnaAnswerApiRequest> request) {
        return null;
    }

    @Override
    public Header<QnaAnswerApiResponse> delete(Long id) {
        return null;
    }

}
