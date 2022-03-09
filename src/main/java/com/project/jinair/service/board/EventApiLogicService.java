package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbEvent;
import com.project.jinair.model.entity.board.TbMagazine;
import com.project.jinair.model.enumclass.EventStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.board.EventApiRequest;
import com.project.jinair.model.network.response.board.EventApiResponse;
import com.project.jinair.model.network.response.board.MagazineApiResponse;
import com.project.jinair.repository.TbEventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EventApiLogicService implements CrudInterface<EventApiRequest, EventApiResponse> {

    private final TbEventRepository tbEventRepository;


    // 게시판 리스트
    public Header<List<EventApiResponse>> search() {
        List<TbEvent> tbEvents = tbEventRepository.findAll();
        List<EventApiResponse> eventApiResponses = tbEvents.stream()
                .map(users -> responseEvents(users))
                .collect(Collectors.toList());

        return Header.OK(eventApiResponses);
    }

    // 게시판 리스트
    public Header<List<EventApiResponse>> searchSelect(Pageable pageable, EventStatus evStatus) {
        Page<TbEvent> tbEvents = tbEventRepository.findByEvStatus(evStatus, pageable);
        List<EventApiResponse> eventApiResponses = tbEvents.stream()
                .map(users -> responseEvents(users))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbEvents.getTotalPages())
                .totalElements(tbEvents.getTotalElements())
                .currentPage(tbEvents.getNumber())
                .currentElements(tbEvents.getNumberOfElements())
                .build();
        return Header.OK(eventApiResponses, pagination);
    }

    @Override
    public Header<EventApiResponse> create(Header<EventApiRequest> request) {
        return null;
    }

    @Override
    public Header<EventApiResponse> read(Long id) {
        return tbEventRepository.findById(id)
                .map(tbEvent -> response(tbEvent))
                .orElseGet(
                        () -> Header.ERROR("데이터 없음")
                );
    }

    @Override
    public Header<EventApiResponse> update(Header<EventApiRequest> request) {
        return null;
    }

    @Override
    public Header delete(Long id) {
        Optional<TbEvent> tbEvent = tbEventRepository.findById(id);
        return tbEvent.map(evn -> {
            tbEventRepository.delete(evn);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }


    public Header<EventApiResponse> response(TbEvent tbEvent) {
        EventApiResponse eventApiResponse = EventApiResponse.builder()
                .evIndex(tbEvent.getEvIndex())
                .evTitle(tbEvent.getEvTitle())
                .evStartDay(tbEvent.getEvStartDay())
                .evEndDay(tbEvent.getEvEndDay())
                .evFileName(tbEvent.getEvFileName())
                .evFileOriname(tbEvent.getEvFileOriname())
                .evFileUrl(tbEvent.getEvFileUrl())
                .evContent(tbEvent.getEvContent())
                .evRegdate(tbEvent.getEvRegdate())
                .evStatus(tbEvent.getEvStatus())
                .build();
        return Header.OK(eventApiResponse);
    }





    private EventApiResponse responseEvents(TbEvent tbEvent){
        EventApiResponse eventApiResponse = EventApiResponse.builder()
                .evIndex(tbEvent.getEvIndex())
                .evTitle(tbEvent.getEvTitle())
                .evContent(tbEvent.getEvContent())
                .evFileName(tbEvent.getEvFileName())
                .evFileOriname(tbEvent.getEvFileOriname())
                .evFileUrl(tbEvent.getEvFileUrl())
                .evStartDay(tbEvent.getEvStartDay())
                .evEndDay(tbEvent.getEvEndDay())
                .evRegdate(tbEvent.getEvRegdate())
                .evStatus(tbEvent.getEvStatus())
                .build();
        return eventApiResponse;
    }

    @Transactional
    public void save(TbEvent tbEvent){
        TbEvent i = new TbEvent();
        i.setEvTitle(tbEvent.getEvTitle());
        i.setEvContent(tbEvent.getEvContent());
        i.setEvStartDay(tbEvent.getEvStartDay());
        i.setEvEndDay(tbEvent.getEvEndDay());
        i.setEvFileName(tbEvent.getEvFileName());
        i.setEvFileOriname(tbEvent.getEvFileOriname());
        i.setEvFileUrl(tbEvent.getEvFileUrl());
        i.setEvStatus(EventStatus.StartEvent);
        tbEventRepository.save(i);
    }
}
