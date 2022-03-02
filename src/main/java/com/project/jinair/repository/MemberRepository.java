package com.project.jinair.repository;

import com.project.jinair.model.entity.member.TbMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<TbMember,  Long> {

    // 아이디 검색
    Optional<TbMember> findByMemUserid(String userid);

    // 로그인(아이디, 비밀번호 검색)
    Optional<TbMember> findByMemUseridAndMemUserpw(String userid, String userpw);

    // 인덱스 번호로 검색
    TbMember findByMemIndex(Long idx);

}
