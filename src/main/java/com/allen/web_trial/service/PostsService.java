package com.allen.web_trial.service;

import com.allen.web_trial.domain.Posts;
import com.allen.web_trial.obj.PostsResponseDto;
import com.allen.web_trial.obj.PostsSaveRequestDto;
import com.allen.web_trial.repository.PostsRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostsService {

    private final PostsRepository postsRepository;

    @Transactional
    public Long save(PostsSaveRequestDto requestDto) {
        return postsRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public PostsResponseDto findById(Long id) {
        return new PostsResponseDto(postsRepository.findById(id).orElseThrow());
    }

    @Transactional
    public List<PostsResponseDto> findAll() {
        return postsRepository.findAll().stream().map(PostsResponseDto::new).toList();
    }
}
