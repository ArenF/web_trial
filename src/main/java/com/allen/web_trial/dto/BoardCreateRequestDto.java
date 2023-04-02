package com.allen.web_trial.dto;

import com.allen.web_trial.entity.Board;
import com.allen.web_trial.entity.MemberEntity;
import lombok.Builder;
import lombok.Getter;

@Getter
public class BoardCreateRequestDto {
    private MemberEntity member;
    private String title;
    private String content;

    @Builder
    public BoardCreateRequestDto(MemberEntity member, String title, String content) {
        this.member = member;
        this.title = title;
        this.content = content;
    }

    public Board toEntity() {
        return Board.builder()
                .member(member)
                .title(title)
                .content(content)
                .build();
    }
}
