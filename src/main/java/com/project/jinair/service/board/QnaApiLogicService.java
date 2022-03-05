package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbQna;
import com.project.jinair.model.enumclass.QnaStatus;
import com.project.jinair.model.enumclass.QnaType;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaApiRequest;
import com.project.jinair.model.network.response.board.QnaApiResponse;
import com.project.jinair.repository.TbQnaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QnaApiLogicService implements CrudInterface<QnaApiRequest, QnaApiResponse> {

    private final TbQnaRepository tbQnaRepository;

    // 게시판 리스트
    public Header<List<QnaApiResponse>> getQnaList() {
        List<TbQna> tbQna = tbQnaRepository.findAll();
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        return Header.OK(qnaApiResponseList);
    }

    public Header<List<QnaApiResponse>> getQnaList(QnaType a) {
        List<TbQna> tbQna = tbQnaRepository.findByQnaType(a);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        return Header.OK(qnaApiResponseList);
    }

    public Header<List<QnaApiResponse>> getQnaList(String a) {
        List<TbQna> tbQna = tbQnaRepository.findByQnaTitleContaining(a);
        List<QnaApiResponse> qnaApiResponseList = tbQna.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        return Header.OK(qnaApiResponseList);
    }

    @Override
    public Header<QnaApiResponse> create(Header<QnaApiRequest> request) {
        QnaApiRequest qnaApiRequest = request.getData();
        TbQna tbQna = TbQna.builder()
                .qnaType(qnaApiRequest.getQnaType())
                .qnaTitle(qnaApiRequest.getQnaTitle())
                .qnaContent(qnaApiRequest.getQnaContent())
                .qnaIsans(QnaStatus.NotComplete)
                .build();
        TbQna newTbQna = tbQnaRepository.save(tbQna);
        return response(newTbQna);
    }

    @Override
    public Header<QnaApiResponse> read(Long id) {
        return tbQnaRepository.findById(id)
                .map(tbQna -> response(tbQna))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<QnaApiResponse> update(Header<QnaApiRequest> request) {
        QnaApiRequest qnaApiRequest = request.getData();
        Optional<TbQna> tbQna = tbQnaRepository.findById(qnaApiRequest.getQnaIndex());

        return tbQna.map(qna -> {
                    qna.setQnaIndex(qnaApiRequest.getQnaIndex());
                    qna.setQnaType(qnaApiRequest.getQnaType());
                    qna.setQnaTitle(qnaApiRequest.getQnaTitle());
                    qna.setQnaContent(qnaApiRequest.getQnaContent());

                    return qna;
                }).map(qna -> tbQnaRepository.save(qna))
                .map(qna -> response(qna))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbQna> tbQna = tbQnaRepository.findByQnaIndex(id);
        return tbQna.map(qna -> {
            tbQnaRepository.delete(qna);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<QnaApiResponse> response(TbQna tbQna) {
        QnaApiResponse qnaApiResponse = QnaApiResponse.builder()
                .qnaIndex(tbQna.getQnaIndex())
                .qnaType(tbQna.getQnaType())
                .qnaTitle(tbQna.getQnaTitle())
                .qnaContent(tbQna.getQnaContent())
                .qnaIsans(tbQna.getQnaIsans())
                .qnaAnsdate(tbQna.getQnaAnsdate())
                .qnaRegdate(tbQna.getQnaRegdate())
                .qnaUserindex(tbQna.getTbMember().getMemIndex())
                .qnaUserName(tbQna.getTbMember().getMemKorFirstName()+tbQna.getTbMember().getMemKorLastName())
                .qnaUserId(tbQna.getTbMember().getMemUserid())
                .qnaUserHp(tbQna.getTbMember().getMemHp())
                .qnaUserEmail(tbQna.getTbMember().getMemEmail())
                .qnaUserEmailIsagree(tbQna.getTbMember().getMemEmailIsagree())
                .qnaUserSnsIsagree(tbQna.getTbMember().getMemSnsIsagree())
                .build();
        return Header.OK(qnaApiResponse);
    }

    private QnaApiResponse responseQna(TbQna tbQna){
        QnaApiResponse qnaApiResponse = QnaApiResponse.builder()
                .qnaIndex(tbQna.getQnaIndex())
                .qnaType(tbQna.getQnaType())
                .qnaTitle(tbQna.getQnaTitle())
                .qnaContent(tbQna.getQnaContent())
                .qnaIsans(tbQna.getQnaIsans())
                .qnaAnsdate(tbQna.getQnaAnsdate())
                .qnaRegdate(tbQna.getQnaRegdate())
                .qnaUserindex(tbQna.getTbMember().getMemIndex())
                .qnaUserName(tbQna.getTbMember().getMemKorFirstName()+tbQna.getTbMember().getMemKorLastName())
                .build();
        return qnaApiResponse;
    }
}
