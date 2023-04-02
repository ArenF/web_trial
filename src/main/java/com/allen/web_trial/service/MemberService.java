package com.allen.web_trial.service;

import com.allen.web_trial.domain.Member;
import com.allen.web_trial.repository.MemberRepository;
import com.allen.web_trial.repository.MemoryMemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public class MemberService {

    private final MemberRepository memberRepository;


    public MemberService(MemberRepository repository) {
        this.memberRepository = repository;
    }

    public Long join(Member member) {
//        같은 이름이 있는 중복 회원은 안된다.
        validateDuplicatedMember(member);
        memberRepository.save(member);
        return member.getId();
    }
/*
    전체 회원 조회
z
* */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    public Optional<Member> findOne(Long memberId) {
        return memberRepository.findById(memberId);
    }

//중복 회원 확인
    private void validateDuplicatedMember(Member member) {
        memberRepository.findByName(member.getName()).ifPresent(m -> {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        });
    }


}
