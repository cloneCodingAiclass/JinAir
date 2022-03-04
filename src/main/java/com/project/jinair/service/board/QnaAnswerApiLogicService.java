package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbQnaAnswer;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.board.QnaAnswerApiRequest;
import com.project.jinair.model.network.response.board.QnaAnswerApiResponse;
import com.project.jinair.repository.TbQnaAnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QnaAnswerApiLogicService implements CrudInterface<QnaAnswerApiRequest, QnaAnswerApiResponse> {

    private final TbQnaAnswerRepository tbQnaAnswerRepository;

    public Header<List<QnaAnswerApiResponse>> getQnaList(Long id) {
        List<TbQnaAnswer> tbQnaAnswer = tbQnaAnswerRepository.findByQaQnaindex(id);
        List<QnaAnswerApiResponse> qnaAnswerApiResponseList = tbQnaAnswer.stream()
                .map(user -> responseQna(user))
                .collect(Collectors.toList());
        return Header.OK(qnaAnswerApiResponseList);
    }

    private QnaAnswerApiResponse responseQna(TbQnaAnswer tbQnaAnswer){
        QnaAnswerApiResponse qnaAnswerApiResponse = QnaAnswerApiResponse.builder()
                .qaIndex(tbQnaAnswer.getQaIndex())
                .qaType(tbQnaAnswer.getQaType())
                .qaTitle(tbQnaAnswer.getQaTitle())
                .qaContent(tbQnaAnswer.getQaContent())
                .qaRegdate(tbQnaAnswer.getQaRegdate())
                .build();
        return qnaAnswerApiResponse;
    }


    @Override
    public Header<QnaAnswerApiResponse> create(Header<QnaAnswerApiRequest> request) {
        QnaAnswerApiRequest qnaAnswerApiRequest = request.getData();
        TbQnaAnswer tbQnaAnswer = TbQnaAnswer.builder()
                .qaType(qnaAnswerApiRequest.getQaType())
                .qaTitle(qnaAnswerApiRequest.getQaTitle())
                .qaContent(qnaAnswerApiRequest.getQaContent())
                .qaQnaindex(qnaAnswerApiRequest.getQaQnaindex())
                .build();

        TbQnaAnswer newTbQnaAnswer = tbQnaAnswerRepository.save(tbQnaAnswer);
        return response(newTbQnaAnswer);
    }

    @Override
    public Header<QnaAnswerApiResponse> read(Long id) {
        return tbQnaAnswerRepository.findById(id)
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
                .qaQnaindex(tbQnaAnswer.getQaQnaindex())
                .build();
        return Header.OK(qnaAnswerApiResponse);
    }

}
