package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
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

/*
    {
    "transactionTime": "2022-03-04T11:01:36.9120232",
    "resultCode": "OK",
    "description": "OK",
    "data": {
        "qnaIndex": 1,
        "qnaType": "HomeShopping",
        "qnaTitle": "테스트하고싶어요",
        "qnaContent": "스프링이고 나발이고 그냥 일단 진행해보는게 어떨지 싶습니다만",
        "qnaIsans": "NotComplete",
        "qnaRegdate": "2022-03-04T01:49:24",
        "qnaAnsdate": "2022-03-04T01:49:24",
        "qnaUserindex": 1,
        "qnaAnswerApiResponseList": null
    }
*/

    @GetMapping("/list")
    public Header<List<QnaApiResponse>> List() {
        return qnaApiLogicService.getQnaList();
    }

    @Override
    @PostMapping("")
    public Header<QnaApiResponse> create(@RequestBody Header<QnaApiRequest> request) {
        return qnaApiLogicService.create(request);
    }

    @Override
    @GetMapping("/list/{id}")
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
