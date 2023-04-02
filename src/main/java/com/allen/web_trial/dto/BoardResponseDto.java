package com.allen.web_trial.dto;

import com.allen.web_trial.entity.Board;
import lombok.Getter;

@Getter
public class BoardResponseDto {
    private Long id;
    private String member;
    private String title;
    private String content;

    public BoardResponseDto(Board entity) {
       this.id = entity.getId();
       this.member = entity.getMemberEntity().getName();
       this.title = entity.getTitle();
       this.content = entity.getContent();
    }
}
