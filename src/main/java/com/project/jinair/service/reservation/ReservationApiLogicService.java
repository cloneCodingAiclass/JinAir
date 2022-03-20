package com.project.jinair.service.reservation;

import com.project.jinair.ifs.CrudInterface;
import com.project.jinair.model.entity.schedule.TbReservation;
import com.project.jinair.model.enumclass.PaymentStatus;
import com.project.jinair.model.network.Header;
import com.project.jinair.model.network.request.schedule.ReserveApiRequest;
import com.project.jinair.model.network.response.schedule.ReserveApiResponse;
import com.project.jinair.repository.TbReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationApiLogicService implements CrudInterface<ReserveApiRequest, ReserveApiResponse> {

    private final TbReservationRepository tbReservationRepository;

    public Header<List<ReserveApiResponse>> find(Long startIdx, Long endIdx){
        List<TbReservation> tbReservations = tbReservationRepository.findAllByReIndexBetween(startIdx, endIdx);
        List<ReserveApiResponse> ReserveApiResponse = tbReservations.stream()
                .map(user -> responseReservation(user))
                .collect(Collectors.toList());
        return Header.OK(ReserveApiResponse);
    }

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
                .reSchBasicPrice(reserveApiRequest.getReSchBasicPrice())
                .reSchDepPoint(reserveApiRequest.getReSchDepPoint())
                .reSchArrPoint(reserveApiRequest.getReSchArrPoint())
                .reSchStartTime(reserveApiRequest.getReSchStartTime())
                .reSchEndTime(reserveApiRequest.getReSchEndTime())
                .reAirplainType(reserveApiRequest.getReAirplainType())
                .reSchName(reserveApiRequest.getReSchName())
                .reTripKind(reserveApiRequest.getReTripKind())
                .rePeopleType(reserveApiRequest.getRePeopleType())
                .reFirstName(reserveApiRequest.getReFirstName())
                .reLastName(reserveApiRequest.getReLastName())
                .reBirth(reserveApiRequest.getReBirth())
                .reGender(reserveApiRequest.getReGender())
                .reNation(reserveApiRequest.getReNation())
                .reMemberId(reserveApiRequest.getReMemberId())
                .reExtraSale(reserveApiRequest.getReExtraSale())
                .reEmail(reserveApiRequest.getReEmail())
                .reHpNation(reserveApiRequest.getReHpNation())
                .reHp(reserveApiRequest.getReHp())
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
                    reserve.setReSchBasicPrice(reserveApiRequest.getReSchBasicPrice());
                    reserve.setReSchDepPoint(reserveApiRequest.getReSchDepPoint());
                    reserve.setReSchArrPoint(reserveApiRequest.getReSchArrPoint());
                    reserve.setReSchStartTime(reserveApiRequest.getReSchStartTime());
                    reserve.setReSchEndTime(reserveApiRequest.getReSchEndTime());
                    reserve.setReAirplainType(reserveApiRequest.getReAirplainType());
                    reserve.setReSchName(reserveApiRequest.getReSchName());
                    reserve.setReTripKind(reserveApiRequest.getReTripKind());
                    reserve.setRePeopleType(reserveApiRequest.getRePeopleType());
                    reserve.setReFirstName(reserveApiRequest.getReFirstName());
                    reserve.setReLastName(reserveApiRequest.getReLastName());
                    reserve.setReBirth(reserveApiRequest.getReBirth());
                    reserve.setReGender(reserveApiRequest.getReGender());
                    reserve.setReNation(reserveApiRequest.getReNation());
                    reserve.setReMemberId(reserveApiRequest.getReMemberId());
                    reserve.setReExtraSale(reserveApiRequest.getReExtraSale());
                    reserve.setReEmail(reserveApiRequest.getReEmail());
                    reserve.setReHpNation(reserveApiRequest.getReHpNation());
                    reserve.setReHp(reserveApiRequest.getReHp());

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
                .reSchBasicPrice(tbReservation.getReSchBasicPrice())
                .reSchDepPoint(tbReservation.getReSchDepPoint())
                .reSchArrPoint(tbReservation.getReSchArrPoint())
                .reSchStartTime(tbReservation.getReSchStartTime())
                .reSchEndTime(tbReservation.getReSchEndTime())
                .reAirplainType(tbReservation.getReAirplainType())
                .reSchName(tbReservation.getReSchName())
                .reTripKind(tbReservation.getReTripKind())
                .rePeopleType(tbReservation.getRePeopleType())
                .reFirstName(tbReservation.getReFirstName())
                .reLastName(tbReservation.getReLastName())
                .reBirth(tbReservation.getReBirth())
                .reGender(tbReservation.getReGender())
                .reNation(tbReservation.getReNation())
                .reMemberId(tbReservation.getReMemberId())
                .reExtraSale(tbReservation.getReExtraSale())
                .reEmail(tbReservation.getReEmail())
                .reHpNation(tbReservation.getReHpNation())
                .reHp(tbReservation.getReHp())
                .build();
        return Header.OK(reserveApiResponse);
    }
    private ReserveApiResponse responseReservation(TbReservation tbReservation){
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
                .reSchBasicPrice(tbReservation.getReSchBasicPrice())
                .reSchDepPoint(tbReservation.getReSchDepPoint())
                .reSchArrPoint(tbReservation.getReSchArrPoint())
                .reSchStartTime(tbReservation.getReSchStartTime())
                .reSchEndTime(tbReservation.getReSchEndTime())
                .reAirplainType(tbReservation.getReAirplainType())
                .reSchName(tbReservation.getReSchName())
                .reTripKind(tbReservation.getReTripKind())
                .rePeopleType(tbReservation.getRePeopleType())
                .reFirstName(tbReservation.getReFirstName())
                .reLastName(tbReservation.getReLastName())
                .reBirth(tbReservation.getReBirth())
                .reGender(tbReservation.getReGender())
                .reNation(tbReservation.getReNation())
                .reMemberId(tbReservation.getReMemberId())
                .reExtraSale(tbReservation.getReExtraSale())
                .reEmail(tbReservation.getReEmail())
                .reHpNation(tbReservation.getReHpNation())
                .reHp(tbReservation.getReHp())
                .build();
        return reserveApiResponse;
    }

    public Long creating() {
        TbReservation tbReservation = TbReservation.builder()
                .build();
        TbReservation newTbReservation = tbReservationRepository.save(tbReservation);
        return newTbReservation.getReIndex();
    }

    public Header<ReserveApiResponse> readPayment(Long id, PaymentStatus paymentStatus){
        return  tbReservationRepository.findByReUserindexAndReStatus(id, paymentStatus)
                .map(reserve -> response(reserve))
                .orElseGet(
                        () -> Header.ERROR("NO DATA")
                );
    }

    public Header<TbReservation> paymentsUpdate(Header<ReserveApiRequest> request) {
        ReserveApiRequest reserveApiRequest = request.getData();
        List<TbReservation> reservation = tbReservationRepository.findAllByReUserindexAndReStatus(reserveApiRequest.getReIndex(), PaymentStatus.Progress);

        List<TbReservation> reservationList = new ArrayList<>();

        for (int i = 0; i < reservation.size(); i++) {
            TbReservation tbReservation = TbReservation.builder()
                    .reTotal(reservation.get(i).getReTotal())
                    .reStatus(reservation.get(i).getReStatus())
                    .rePayment(reservation.get(i).getRePayment())
                    .build();
            reservationList.add(tbReservation);
        }
        tbReservationRepository.saveAll(reservationList);
        return null;
    }

    public void member(Long reIndex, Long userid) {
        tbReservationRepository.findById(reIndex)
                .map(tbReservation -> {
                    tbReservation.setReUserindex(userid);
                    return tbReservation;
                }).map(tbReservation -> tbReservationRepository.save(tbReservation));

    }
}
