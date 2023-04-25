package com.allen.web_trial.repository;

import com.allen.web_trial.domain.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class MemberJPARepositoryTest {

    @Autowired
    MemberRepository memberRepository;

//    @AfterEach
//    public void cleanUp() {
//        memberRepository.deleteAll();
//    }

    @Test
    public void testToLoad() {

        Member member = Member.builder()
                .email("hjh040@gmail.com")
                .nickname("allen")
                .password("root")
                .build();

        memberRepository.save(member);

        memberRepository.findAll().forEach(System.out::println);
    }
}
