package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbFaq;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.FaqApiRequest;
import com.project.jinair.model.network.response.board.FaqApiResponse;
import com.project.jinair.service.board.FaqApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // json 형식으로 데이터 주고 받음. 해당 url를 통해 접근하는 방식.
@RequestMapping("/api/faq")
@RequiredArgsConstructor
public class FaqApiController implements CrudInterface<FaqApiRequest, FaqApiResponse> {
    private final FaqApiLogicService faqApiLogicService;

    // 게시판 리스트
    @GetMapping("/list")
    public Header<List<FaqApiResponse>> list() {
        return faqApiLogicService.getFaqList();
    }

    // 게시판 글작성
    @Override
    @PostMapping("")
    public Header<FaqApiResponse> create(@RequestBody Header<FaqApiRequest> request) {
        return faqApiLogicService.create(request);
    }

    // 게시판 글보기
    @Override
    @GetMapping("{id}")
    public Header<FaqApiResponse> read(@PathVariable(name = "id") Long id) {
        return faqApiLogicService.read(id);
    }

    // 게시판 글수정
    @Override
    @PutMapping("")
    public Header<FaqApiResponse> update(@RequestBody Header<FaqApiRequest> request) {
        return faqApiLogicService.update(request);
    }

    // 게시판 글삭제
    @Override
    @DeleteMapping("{id}")
    public Header<FaqApiResponse> delete(@PathVariable(name = "id") Long id) {
        return faqApiLogicService.delete(id);
    }
}
