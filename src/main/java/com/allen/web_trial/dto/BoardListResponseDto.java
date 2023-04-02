package com.allen.web_trial.dto;

import com.allen.web_trial.entity.Board;
import lombok.Getter;

@Getter
public class BoardListResponseDto {

    private Long id;
    private String member;
    private String title;

    public BoardListResponseDto(Board entity) {
        this.id = entity.getId();
        this.member = entity.getMemberEntity().getName();
        this.title = entity.getTitle();
    }
}
