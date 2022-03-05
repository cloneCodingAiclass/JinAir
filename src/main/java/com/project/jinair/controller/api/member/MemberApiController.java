package com.project.jinair.controller.api.member;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.member.MemberApiRequest;
import com.project.jinair.model.network.response.member.MemberApiResponse;
import com.project.jinair.service.member.MemberApiLogicService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class MemberApiController implements CrudInterface<MemberApiRequest, MemberApiResponse> {

    private final MemberApiLogicService memberApiLogicService;

    @Override
    @PostMapping("")
    public Header<MemberApiResponse> create(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.create(request);
    }

    @Override
    @GetMapping("{id}")
    public Header<MemberApiResponse> read(@PathVariable(name = "id") Long id) {
        return memberApiLogicService.read(id);
    }

    @Override
    @PutMapping("")
    public Header<MemberApiResponse> update(@RequestBody Header<MemberApiRequest> request) {
        return memberApiLogicService.update(request);
    }

    @Override
    @DeleteMapping("{id}")
    public Header<MemberApiResponse> delete(@PathVariable(name = "id") Long id) {
        return memberApiLogicService.delete(id);
    }

    // 회원 리스트
    @GetMapping("")
    public Header<List<MemberApiResponse>> list(@PageableDefault(sort = {"memIndex"}, direction = Sort.Direction.DESC)Pageable pageable){
        return memberApiLogicService.list(pageable);
    }

    // 회원 검색
    @GetMapping("{userid}")
    public Header<MemberApiResponse> search(@PathVariable(value = "userid") String userid){
        return memberApiLogicService.search(userid);
    }

}
