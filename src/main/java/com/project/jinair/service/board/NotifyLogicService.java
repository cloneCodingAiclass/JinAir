package com.project.jinair.service.board;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.board.TbNotifi;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.board.NotifyApiRequest;
import com.project.jinair.model.network.response.board.NotifyApiResponse;
import com.project.jinair.repository.TbNotifiRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotifyLogicService implements CrudInterface<NotifyApiRequest, NotifyApiResponse> {

    private final TbNotifiRepository tbNotifiRepository;

    @Override
    public Header<NotifyApiResponse> create(Header<NotifyApiRequest> request) {
        NotifyApiRequest notifyApiRequest = request.getData();
        TbNotifi tbNotify = TbNotifi.builder()
                .noIndex(notifyApiRequest.getNoIndex())
                .noTitle(notifyApiRequest.getNoTitle())
                .noContents(notifyApiRequest.getNoContents())
                .noFile(notifyApiRequest.getNoFile())
                .noRegdate(notifyApiRequest.getNoRegdate())
                .build();
        TbNotifi newNotify = tbNotifiRepository.save(tbNotify);
        return response(newNotify);
    }

    @Override
    public Header<NotifyApiResponse> read(Long id) {
        return tbNotifiRepository.findByNoIndexOrderByNoIndexDesc(id)
            .map(notify -> response(notify))
            .orElseGet(
                    () -> Header.ERROR("데이터 없음")
            );
    }

    @Override
    public Header<NotifyApiResponse> update(Header<NotifyApiRequest> request) {
        NotifyApiRequest notifyApiRequest = request.getData();
        Optional<TbNotifi> tbNotify = tbNotifiRepository.findById(notifyApiRequest.getNoIndex());

        return tbNotify.map(notify -> {
                    notify.setNoIndex(notifyApiRequest.getNoIndex());
                    notify.setNoTitle(notifyApiRequest.getNoTitle());
                    notify.setNoContents(notifyApiRequest.getNoContents());

                    return notify;
                }).map(notify -> tbNotifiRepository.save(notify))
                .map(notify -> response(notify))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbNotifi> notify = tbNotifiRepository.findByNoIndexOrderByNoIndexDesc(id);
        return notify.map(noti -> {
            tbNotifiRepository.delete(noti);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    public Header<NotifyApiResponse> response(TbNotifi tbNotifi) {
        NotifyApiResponse notifyApiResponse = NotifyApiResponse.builder()
                .noIndex(tbNotifi.getNoIndex())
                .noTitle(tbNotifi.getNoTitle())
                .noContents(tbNotifi.getNoContents())
                .noFile(tbNotifi.getNoFile())
                .noRegdate(tbNotifi.getNoRegdate())
                .build();
        return Header.OK(notifyApiResponse);
    }

    public NotifyApiResponse responseNotifi(TbNotifi tbNotifi) {
        NotifyApiResponse notifyApiResponse = NotifyApiResponse.builder()
                .noIndex(tbNotifi.getNoIndex())
                .noTitle(tbNotifi.getNoTitle())
                .noContents(tbNotifi.getNoContents())
                .noFile(tbNotifi.getNoFile())
                .noRegdate(tbNotifi.getNoRegdate())
                .build();
        return notifyApiResponse;
    }

    // 리스트
    public Header<List<NotifyApiResponse>> search(Pageable pageable) {
        Page<TbNotifi> tbNotifi = tbNotifiRepository.findAll(pageable);
        List<NotifyApiResponse> notifyApiResponseList = tbNotifi.stream()
                .map(notifi -> responseNotifi(notifi))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(tbNotifi.getTotalPages())
                .totalElements(tbNotifi.getTotalElements())
                .currentPage(tbNotifi.getNumber())
                .currentElements(tbNotifi.getNumberOfElements())
                .build();
        return Header.OK(notifyApiResponseList, pagination);
    }


    public Header<List<NotifyApiResponse>> searchList(String a, Pageable pageable) {
        Page<TbNotifi> tbNotifi = tbNotifiRepository.findByNoTitleContaining(a, pageable);
        List<NotifyApiResponse> notifyApiResponseList = tbNotifi.stream()
                .map(noti -> responseNotifi(noti))
                .collect(Collectors.toList());
        Pagination pagination = Pagination.builder()
                .totalPages(tbNotifi.getTotalPages())
                .totalElements(tbNotifi.getTotalElements())
                .currentPage(tbNotifi.getNumber())
                .currentElements(tbNotifi.getNumberOfElements())
                .build();
        return Header.OK(notifyApiResponseList, pagination);
    }

}
