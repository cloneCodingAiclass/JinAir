package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbFaq;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.FaqApiRequest;
import com.project.jinair.model.network.response.board.FaqApiResponse;
import com.project.jinair.repository.TbFaqRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FaqApiLogicService implements CrudInterface<FaqApiRequest, FaqApiResponse> {

    private final TbFaqRepository tbFaqRepository;


    // 게시판 리스트
    public Header<List<FaqApiResponse>> search() {
        List<TbFaq> tbFaq = tbFaqRepository.findAll();
        List<FaqApiResponse> faqList = tbFaq.stream()
                .map(users -> responseFaq(users))
                .collect(Collectors.toList());

        return Header.OK(faqList);
    }

    // 게시판 글작성
    @Override
    public Header<FaqApiResponse> create(Header<FaqApiRequest> request) {
        FaqApiRequest faqApiRequest = request.getData();
        TbFaq tbFaq = TbFaq.builder()
                .faqIndex(faqApiRequest.getFaqIndex())
                .faqType(faqApiRequest.getFaqType())
                .faqTitle(faqApiRequest.getFaqTitle())
                .faqContent(faqApiRequest.getFaqContent())
                .faqRegdate(faqApiRequest.getFaqRegdate())
                .build();
        TbFaq newTbFaq = tbFaqRepository.save(tbFaq);
        return response(newTbFaq);
    }

    // 게시판 글보기
    @Override
    public Header<FaqApiResponse> read(Long id) {
        return tbFaqRepository.findById(id)
            .map(tbFaq -> response(tbFaq))
            .orElseGet(
                    () -> Header.ERROR("데이터 없음")
            );
    }

    // 게시판 글수정
    @Override
    public Header<FaqApiResponse> update(Header<FaqApiRequest> request) {
        FaqApiRequest faqApiRequest = request.getData();
        Optional<TbFaq> tbFaq = tbFaqRepository.findById(faqApiRequest.getFaqIndex());

        return tbFaq.map(faq -> {
            faq.setFaqIndex(faqApiRequest.getFaqIndex());
            faq.setFaqType(faqApiRequest.getFaqType());
            faq.setFaqTitle(faqApiRequest.getFaqTitle());
            faq.setFaqRegdate(faqApiRequest.getFaqRegdate());

            return faq;
        }).map(faq -> tbFaqRepository.save(faq))
        .map(faq -> response(faq))
        .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    // 게시판 글삭제
    @Override
    public Header delete(Long id) {
        Optional<TbFaq> tbFaq = tbFaqRepository.findByFaqIndex(id);
        return tbFaq.map(faq -> {
            tbFaqRepository.delete(faq);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<FaqApiResponse> response(TbFaq tbFaq) {
        FaqApiResponse faqApiResponse = FaqApiResponse.builder()
                .faqIndex(tbFaq.getFaqIndex())
                .faqType(tbFaq.getFaqType())
                .faqTitle(tbFaq.getFaqTitle())
                .faqContent(tbFaq.getFaqContent())
                .faqRegdate(tbFaq.getFaqRegdate())
                .build();
        return Header.OK(faqApiResponse);
    }

    private FaqApiResponse responseFaq(TbFaq tbFaq){
        FaqApiResponse faqApiResponse = FaqApiResponse.builder()
                .faqIndex(tbFaq.getFaqIndex())
                .faqType(tbFaq.getFaqType())
                .faqTitle(tbFaq.getFaqTitle())
                .faqContent(tbFaq.getFaqContent())
                .faqRegdate(tbFaq.getFaqRegdate())
                .build();
        return faqApiResponse;
    }
}
