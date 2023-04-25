package com.allen.web_trial;

import com.allen.web_trial.repository.BoardRepository;
import com.allen.web_trial.repository.MemberRepository;
import com.allen.web_trial.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    @Bean
    public BoardService boardService() {
        return new BoardService();
    }
}
