package com.allen.web_trial;

import com.allen.web_trial.repository.MemberRepository;
import com.allen.web_trial.repository.MemoryMemberRepository;
import com.allen.web_trial.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        return new MemoryMemberRepository();
    }
}
