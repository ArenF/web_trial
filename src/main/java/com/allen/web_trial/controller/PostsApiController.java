package com.allen.web_trial.controller;

import com.allen.web_trial.obj.PostsResponseDto;
import com.allen.web_trial.obj.PostsSaveRequestDto;
import com.allen.web_trial.service.PostsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/saveForm")
public class PostsApiController {

    private final PostsService postsService;

    @RequestMapping(method = RequestMethod.POST, path = "/postRequest")
    public PostsResponseDto request(@RequestBody PostsSaveRequestDto dto) {
        return new PostsResponseDto(dto.toEntity());
    }

    @PostMapping(value = "/post")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }
}
