package com.project.jinair.service.payment;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.payment.TbCouponRegist;
import com.project.jinair.model.entity.payment.TbPoint;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.Pagination;
import com.project.jinair.model.network.request.payment.PointApiRequest;
import com.project.jinair.model.network.response.payment.CouponRegistApiResponse;
import com.project.jinair.model.network.response.payment.PointApiResponse;
import com.project.jinair.repository.MemberRepository;
import com.project.jinair.repository.TbPointRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class PointApiService implements CrudInterface<PointApiRequest, PointApiResponse> {

    private final TbPointRepository tbPointRepository;
    private final MemberRepository memberRepository;

    @Override
    public Header<PointApiResponse> create(Header<PointApiRequest> request) {

        PointApiRequest pointApiRequest = request.getData();
        TbMember tbMember = memberRepository.findByMemIndex(43L);

        TbPoint tbPoint = TbPoint.builder()
                .poPoint(pointApiRequest.getPoPoint())
                .poMemo(pointApiRequest.getPoMemo())
                .poUserindex(tbMember.getMemIndex())
                .build();

        TbPoint newpoint = tbPointRepository.save(tbPoint);
        return response(newpoint);
    }

    @Override
    public Header<PointApiResponse> read(Long id) {
        return tbPointRepository.findById(id)
                .map(point -> response(point))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<PointApiResponse> update(Header<PointApiRequest> request) {
        PointApiRequest pointApiRequest = request.getData();
        Optional<TbPoint> tbPoint = tbPointRepository.findById(pointApiRequest.getPoIndex());

        return tbPoint.map(tbPoint1 -> {
            tbPoint1.setPoPoint(pointApiRequest.getPoPoint());
            tbPoint1.setPoMemo(pointApiRequest.getPoMemo());
            return tbPoint1;
        }).map(tbPoint1 -> tbPointRepository.save(tbPoint1))
                .map(tbPoint1 -> response(tbPoint1)).orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header delete(Long id) {
        Optional<TbPoint> tbPoint = tbPointRepository.findById(id);

        return tbPoint.map(point -> {
            tbPointRepository.delete(point);
            return Header.OK();
        }).orElseGet(()-> Header.ERROR("NO DATA"));
    }

    private Header<PointApiResponse> response(TbPoint tbPoint){
        PointApiResponse pointApiResponse = PointApiResponse.builder()
                .poIndex(tbPoint.getPoIndex())
                .poPoint(tbPoint.getPoPoint())
                .poMemo(tbPoint.getPoMemo())
                .poUserindex(tbPoint.getPoUserindex())
                .build();
        return Header.OK(pointApiResponse);
    }
    private PointApiResponse responsePoint(TbPoint tbPoint) {
        PointApiResponse pointApiResponse = PointApiResponse.builder()
                .poIndex(tbPoint.getPoIndex())
                .poPoint(tbPoint.getPoPoint())
                .poMemo(tbPoint.getPoMemo())
                .poUserindex(tbPoint.getPoUserindex())
                .build();
        return pointApiResponse;
    }
    public Header<List<PointApiResponse>> search(Pageable pageable) {
        Page<TbPoint> tbPoints = tbPointRepository.findAll(pageable);
        List<PointApiResponse> pointApiResponses = tbPoints.stream()
                .map(users -> responsePoint(users))
                .collect(Collectors.toList());

        Pagination pagination = Pagination.builder()
                .totalPages(tbPoints.getTotalPages())
                .totalElements(tbPoints.getTotalElements())
                .currentPage(tbPoints.getNumber())
                .currentElements(tbPoints.getNumberOfElements())
                .build();
        return Header.OK(pointApiResponses, pagination);
    }
}