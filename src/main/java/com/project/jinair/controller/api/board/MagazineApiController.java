package com.project.jinair.controller.api.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.MagazineApiRequest;
import com.project.jinair.model.network.response.board.MagazineApiResponse;
import com.project.jinair.service.board.MagazineApiLoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/magazine")
@RequiredArgsConstructor
public class MagazineApiController implements CrudInterface<MagazineApiRequest, MagazineApiResponse> {

    private final MagazineApiLoginService magazineApiLoginService;


    // 게시판 리스트
    @GetMapping("/list")
    public Header<List<MagazineApiResponse>> List() {
        return magazineApiLoginService.getQnaList();
    }

    @Override
    @PostMapping("")
    public Header<MagazineApiResponse> create(@RequestBody Header<MagazineApiRequest> request) {
        return magazineApiLoginService.create(request);
    }

    @Override
    @GetMapping("/view/{id}")
    public Header<MagazineApiResponse> read(@PathVariable(name = "id") Long id) {
        return magazineApiLoginService.read(id);
    }

    @Override
    @PutMapping("/edit")
    public Header<MagazineApiResponse> update(@RequestBody Header<MagazineApiRequest> request) {
        return magazineApiLoginService.update(request);
    }

    @Override
    @GetMapping("/delete/{id}")
    public Header<MagazineApiResponse> delete(@PathVariable(name = "id") Long id) {
        return magazineApiLoginService.delete(id);
    }


}
