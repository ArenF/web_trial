package com.allen.web_trial.repository;

import com.allen.web_trial.domain.Member;
import org.springframework.stereotype.Repository;

import java.util.*;


public class MemoryMemberRepository implements MemberRepository {

//    현재 테스트 예제는 동시성 문제를 해결하지 않았다.
//    어텀 롱이나 Concurrent HashMap 을 이용해야 하지만 예제이니 넘어간다.
    private static Map<Long, Member> store = new HashMap<>();
//    0, 1, 2 키 값을 생성해주는 애
    private static long sequence = 0L;

    @Override
    public Member save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(), member);
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Member> findByName(String name) {
        return store.values().stream()
                .filter(member -> member.getName().equals(name))
                .findAny();
    }

    @Override
    public List<Member> findAll() {
        return new ArrayList<Member>(store.values());
    }

    public void clearStore() {
        store.clear();
    }
}
