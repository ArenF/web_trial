package com.allen.web_trial.repository;

import com.allen.web_trial.domain.Board;
import com.allen.web_trial.domain.Member;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class MemberJPARepositoryTest {

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    BoardRepository boardRepository;

    @BeforeEach
    public void cleanUp() {
        memberRepository.deleteAll();
        boardRepository.deleteAll();
    }

    @Test
    public void testBoardRepository() {
        
    }

    @Test
    public void memberRepositoryTest() {

        Member member = Member.builder()
                .email("hjh040@gmail.com")
                .nickname("root")
                .password("root-password")
                .build();

        memberRepository.save(member);

        memberRepository.findAll().forEach(value -> {
            System.out.println("found : " + value.getNickname());
        });



    }
}
