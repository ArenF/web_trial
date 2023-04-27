package com.allen.web_trial.service;

import com.allen.web_trial.obj.PostsResponseDto;
import com.allen.web_trial.obj.PostsSaveRequestDto;
import com.allen.web_trial.repository.PostsRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class TestPostsService {

    @Autowired
    private PostsRepository postsRepository;

    @AfterEach
    public void afterEach() {
        postsRepository.deleteAll();
    }

    @Test
    public void testForSave() {
        String title = "test";
        String content = "test content";

        PostsService service = new PostsService(postsRepository);

        service.save(PostsSaveRequestDto.builder()
                .title(title)
                .content(content)
                .author("author user")
                .build());
        PostsResponseDto dto = service.findAll().get(0);
        assertThat(dto.getTitle()).isEqualTo(title);
        assertThat(dto.getContent()).isEqualTo(content);
    }
}
