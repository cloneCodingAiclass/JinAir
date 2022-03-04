package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbQnaAnswer;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaAnswerApiRequest;
import com.project.jinair.model.network.response.board.QnaAnswerApiResponse;
import com.project.jinair.repository.TbQnaAnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QnaAnswerApiLogicService implements CrudInterface<QnaAnswerApiRequest, QnaAnswerApiResponse> {

    private final TbQnaAnswerRepository tbQnaAnswerRepository;

    @Override
    public Header<QnaAnswerApiResponse> create(Header<QnaAnswerApiRequest> request) {
        QnaAnswerApiRequest qnaAnswerApiRequest = request.getData();
        TbQnaAnswer tbQnaAnswer = TbQnaAnswer.builder()
                .qaType(qnaAnswerApiRequest.getQaType())
                .qaTitle(qnaAnswerApiRequest.getQaTitle())
                .qaContent(qnaAnswerApiRequest.getQaContent())
                .build();
        TbQnaAnswer newTbQnaAnswer = tbQnaAnswerRepository.save(tbQnaAnswer);
        return response(newTbQnaAnswer);
    }

    @Override
    public Header<QnaAnswerApiResponse> read(Long id) {
        return tbQnaAnswerRepository.findByQaIndex(id)
                .map(tbQnaAnswer -> response(tbQnaAnswer))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<QnaAnswerApiResponse> update(Header<QnaAnswerApiRequest> request) {
        return null;
    }

    @Override
    public Header<QnaAnswerApiResponse> delete(Long id) {
        return null;
    }


    public Header<QnaAnswerApiResponse> response(TbQnaAnswer tbQnaAnswer) {
        QnaAnswerApiResponse qnaAnswerApiResponse = QnaAnswerApiResponse.builder()
                .qaIndex(tbQnaAnswer.getQaIndex())
                .qaType(tbQnaAnswer.getQaType())
                .qaTitle(tbQnaAnswer.getQaTitle())
                .qaContent(tbQnaAnswer.getQaContent())
                .qaRegdate(tbQnaAnswer.getQaRegdate())
                .build();
        return Header.OK(qnaAnswerApiResponse);
    }

}
