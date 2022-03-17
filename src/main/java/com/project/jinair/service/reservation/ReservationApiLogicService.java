package com.project.jinair.service.reservation;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.member.TbMember;
import com.project.jinair.model.entity.schedule.TbReservation;
import com.project.jinair.model.entity.schedule.TbSchedule;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.member.MemberApiRequest;
import com.project.jinair.model.network.request.schedule.ReserveApiRequest;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import com.project.jinair.repository.TbReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationApiLogicService implements CrudInterface<ReserveApiRequest, ReserveApiResponse> {

    private final TbReservationRepository tbReservationRepository;

    @Override
    public Header<ReserveApiResponse> create(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        TbReservation tbReservation = TbReservation.builder()
                .reUserindex(reserveApiRequest.getReUserindex())
                .rePercentpoint(reserveApiRequest.getRePercentpoint())
                .reStatus(reserveApiRequest.getReStatus())
                .reUserStatus(reserveApiRequest.getReUserStatus())
                .reReserNum(reserveApiRequest.getReReserNum())
                .rePayment(reserveApiRequest.getRePayment())
                .rePetsidx(reserveApiRequest.getRePetsidx())
                .reBaggageidx(reserveApiRequest.getReBaggageidx())
                .reInsuranceidx(reserveApiRequest.getReInsuranceidx())
                .reScheduleidx(reserveApiRequest.getReScheduleidx())
                .reTotal(reserveApiRequest.getReTotal())
                .build();
        TbReservation newTbReservation = tbReservationRepository.save(tbReservation);
        return response(newTbReservation);
    }

    @Override
    public Header<ReserveApiResponse> read(Long id) {
        return tbReservationRepository.findById(id)
                .map(reserve -> response(reserve))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    @Override
    public Header<ReserveApiResponse> update(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        Optional<TbReservation> reservation = tbReservationRepository.findById(reserveApiRequest.getReIndex());

        return reservation.map(reserve ->{
                    reserve.setReUserindex(reserveApiRequest.getReUserindex());
                    reserve.setRePercentpoint(reserveApiRequest.getRePercentpoint());
                    reserve.setReStatus(reserveApiRequest.getReStatus());
                    reserve.setReUserStatus(reserveApiRequest.getReUserStatus());
                    reserve.setReReserNum(reserveApiRequest.getReReserNum());
                    reserve.setRePayment(reserveApiRequest.getRePayment());
                    reserve.setRePetsidx(reserveApiRequest.getRePetsidx());
                    reserve.setReBaggageidx(reserveApiRequest.getReBaggageidx());
                    reserve.setReInsuranceidx(reserveApiRequest.getReInsuranceidx());
                    reserve.setReScheduleidx(reserveApiRequest.getReScheduleidx());
                    reserve.setReTotal(reserveApiRequest.getReTotal());

                    return reserve;
                })
                .map(reserve -> tbReservationRepository.save(reserve))
                .map(reserve -> response(reserve))
                .orElseGet(() -> Header.ERROR("데이터 없음"));
    }

    @Override
    public Header delete(Long id) {
        Optional<TbReservation> tbReservation = tbReservationRepository.findById(id);

        return tbReservation.map(reservation ->{
            tbReservationRepository.delete(reservation);
            return Header.OK();
        }).orElseGet(() -> Header.ERROR("NO DATA"));
    }

    private Header<ReserveApiResponse> response(TbReservation tbReservation){
        ReserveApiResponse reserveApiResponse = ReserveApiResponse.builder()
                .reIndex(tbReservation.getReIndex())
                .reUserindex(tbReservation.getReUserindex())
                .rePercentpoint(tbReservation.getRePercentpoint())
                .reStatus(tbReservation.getReStatus())
                .reUserStatus(tbReservation.getReUserStatus())
                .reReserNum(tbReservation.getReReserNum())
                .rePayment(tbReservation.getRePayment())
                .rePetsidx(tbReservation.getRePetsidx())
                .reBaggageidx(tbReservation.getReBaggageidx())
                .reInsuranceidx(tbReservation.getReInsuranceidx())
                .reScheduleidx(tbReservation.getReScheduleidx())
                .reTotal(tbReservation.getReTotal())
                .build();
        return Header.OK(reserveApiResponse);
    }

    public Long creating() {
        TbReservation tbReservation = TbReservation.builder()
                .build();
        TbReservation newTbReservation = tbReservationRepository.save(tbReservation);
        return newTbReservation.getReIndex();
    }


}
