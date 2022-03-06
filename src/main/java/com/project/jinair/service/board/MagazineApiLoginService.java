package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbMagazine;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.MagazineApiRequest;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.MagazineApiResponse;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.repository.TbMagazineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MagazineApiLoginService implements CrudInterface<MagazineApiRequest, MagazineApiResponse> {

    private final TbMagazineRepository tbMagazineRepository;

    public List<TbMagazine> getFiles(){
        return tbMagazineRepository.findAll();
    }

    public TbMagazine saveFile(String mzTitle, MultipartFile file1, MultipartFile file2, MultipartFile file3){
        String mzImg = file1.getOriginalFilename();
        String mzAnswer = file2.getOriginalFilename();
        String mzPdf = file3.getOriginalFilename();
        TbMagazine tbMagazine = TbMagazine.builder()
                .mzTitle(mzTitle)
                .mzImg(mzImg)
                .mzAnswer(mzAnswer)
                .mzPdf(mzPdf)
                .build();
        return tbMagazineRepository.save(tbMagazine);
    }



    // 게시판 리스트
    public Header<List<MagazineApiResponse>> getQnaList() {
        List<TbMagazine> tbMagazines = tbMagazineRepository.findAll(Sort.by(Sort.Direction.DESC, "mzIndex"));
        List<MagazineApiResponse> magazineApiResponseList = tbMagazines.stream()
                .map(user -> responseMaz(user))
                .collect(Collectors.toList());
        return Header.OK(magazineApiResponseList);
    }

    @Override
    public Header<MagazineApiResponse> create(Header<MagazineApiRequest> request) {
        MagazineApiRequest magazineApiRequest = request.getData();
        TbMagazine tbMagazine = TbMagazine.builder()
                .mzTitle(magazineApiRequest.getMzTitle())
                .mzImg(magazineApiRequest.getMzImg())
                .mzAnswer(magazineApiRequest.getMzAnswer())
                .mzPdf(magazineApiRequest.getMzPdf())
                .build();
        TbMagazine newTbMagazine = tbMagazineRepository.save(tbMagazine);
        return response(newTbMagazine);
    }

    @Override
    public Header<MagazineApiResponse> read(Long id) {
        return tbMagazineRepository.findById(id)
                .map(tbMagazine -> response(tbMagazine))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<MagazineApiResponse> update(Header<MagazineApiRequest> request) {
        MagazineApiRequest magazineApiRequest = request.getData();
        Optional<TbMagazine> tbMagazine = tbMagazineRepository.findById(magazineApiRequest.getMzIndex());

        return tbMagazine.map(maz -> {
                    maz.setMzTitle(magazineApiRequest.getMzTitle());
                    maz.setMzImg(magazineApiRequest.getMzImg());
                    maz.setMzAnswer(magazineApiRequest.getMzAnswer());
                    maz.setMzPdf(magazineApiRequest.getMzPdf());

                    return maz;
                }).map(maz -> tbMagazineRepository.save(maz))
                .map(maz -> response(maz))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbMagazine> tbMagazine = tbMagazineRepository.findById(id);
        return tbMagazine.map(maz -> {
            tbMagazineRepository.delete(maz);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<MagazineApiResponse> response(TbMagazine tbMagazine) {
        MagazineApiResponse magazineApiResponse = MagazineApiResponse.builder()
                .mzIndex(tbMagazine.getMzIndex())
                .mzTitle(tbMagazine.getMzTitle())
                .mzImg(tbMagazine.getMzImg())
                .mzAnswer(tbMagazine.getMzAnswer())
                .mzPdf(tbMagazine.getMzPdf())
                .mzRegdate(tbMagazine.getMzRegdate())
                .build();
        return Header.OK(magazineApiResponse);
    }

    private MagazineApiResponse responseMaz(TbMagazine tbMagazine){
        MagazineApiResponse magazineApiResponse = MagazineApiResponse.builder()
                .mzIndex(tbMagazine.getMzIndex())
                .mzTitle(tbMagazine.getMzTitle())
                .mzImg(tbMagazine.getMzImg())
                .mzAnswer(tbMagazine.getMzAnswer())
                .mzPdf(tbMagazine.getMzPdf())
                .mzRegdate(tbMagazine.getMzRegdate())
                .build();
        return magazineApiResponse;
    }

}
