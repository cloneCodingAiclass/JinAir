package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbLost;
import com.project.jinair.model.enumclass.LostStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.board.LostApiRequest;
import com.project.jinair.model.network.response.board.LostApiResponse;
import com.project.jinair.repository.TbLostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LostApiLogicService implements CrudInterface<LostApiRequest, LostApiResponse> {

    private final TbLostRepository tbLostRepository;

    @Override
    public Header<LostApiResponse> create(Header<LostApiRequest> request) {
        LostApiRequest lostApiRequest = request.getData();
        System.out.println(lostApiRequest.getLosArrivedate());
        System.out.println(lostApiRequest.getLosImg());
        System.out.println(lostApiRequest.getLosAirplane());
        TbLost tbLost = TbLost.builder()
                .losType(lostApiRequest.getLosType())
                .losImg(lostApiRequest.getLosImg())
                .losAirportArea(lostApiRequest.getLosAirportArea())
                .losAirplane(lostApiRequest.getLosAirplane())
                .losArrivedate(LocalDateTime.parse(lostApiRequest.getLosArrivedate()))
                .losIsfind(LostStatus.NotReceived)
                .build();
        TbLost newTbLost = tbLostRepository.save(tbLost);
        return response(newTbLost);
    }

    @Override
    public Header<LostApiResponse> read(Long id) {
        return tbLostRepository.findById(id)
                .map(tbLost -> response(tbLost))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header<LostApiResponse> update(Header<LostApiRequest> request) {
        LostApiRequest lostApiRequest = request.getData();
        Optional<TbLost> tbLost = tbLostRepository.findById(lostApiRequest.getLosIndex());

        return tbLost.map(lost -> {
            if(lostApiRequest.getLosIsfind() == LostStatus.Receipt){
                lost.setLosIsfind(LostStatus.Receipt);
            }else {
                lost.setLosIsfind(LostStatus.NotReceived);
            }

            return lost;
        }).map(lost -> tbLostRepository.save(lost))
        .map(lost -> response(lost))
        .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbLost> tbLost = tbLostRepository.findById(id);
        return tbLost.map(lost ->{
            tbLostRepository.delete(lost);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<List<LostApiResponse>> list(Pageable pageable){
        Page<TbLost> tbLostList = tbLostRepository.findAll(pageable);
        List<LostApiResponse> lostApiResponseList = tbLostList.stream()
                .map(lost -> responseLost(lost))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbLostList.getTotalPages())
                .totalElements(tbLostList.getTotalElements())
                .currentPage(tbLostList.getNumber())
                .currentElements(tbLostList.getNumberOfElements())
                .build();


        return Header.OK(lostApiResponseList, pagination);
    }

    public Header<List<LostApiResponse>> search(String airplane, String airport, String type, String start, String end, Pageable pageable){
        Page<TbLost> tbLostList = tbLostRepository.findAllByLosAirplaneAndLosAirportAreaAndLosTypeAndLosArrivedateBetween(airplane, airport, type, LocalDateTime.parse(start), LocalDateTime.parse(end), pageable);

        List<LostApiResponse> lostApiResponseList = tbLostList.stream()
                .map(lost -> responseLost(lost))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbLostList.getTotalPages())
                .totalElements(tbLostList.getTotalElements())
                .currentPage(tbLostList.getNumber())
                .currentElements(tbLostList.getNumberOfElements())
                .build();

        return Header.OK(lostApiResponseList, pagination);
    }

    public Header<LostApiResponse> response(TbLost tbLost) {
        LostApiResponse lostApiResponse = LostApiResponse.builder()
                .losIndex(tbLost.getLosIndex())
                .losType(tbLost.getLosType())
                .losImg(tbLost.getLosImg())
                .losAirportArea(tbLost.getLosAirportArea())
                .losAirplane(tbLost.getLosAirplane())
                .losArrivedate(tbLost.getLosArrivedate())
                .losRegdate(tbLost.getLosRegdate())
                .losIsfind(tbLost.getLosIsfind())
                .build();
        return Header.OK(lostApiResponse);
    }

    public LostApiResponse responseLost(TbLost tbLost) {
        LostApiResponse lostApiResponse = LostApiResponse.builder()
                .losIndex(tbLost.getLosIndex())
                .losType(tbLost.getLosType())
                .losImg(tbLost.getLosImg())
                .losAirportArea(tbLost.getLosAirportArea())
                .losAirplane(tbLost.getLosAirplane())
                .losArrivedate(tbLost.getLosArrivedate())
                .losRegdate(tbLost.getLosRegdate())
                .losIsfind(tbLost.getLosIsfind())
                .build();
        return lostApiResponse;
    }
}
