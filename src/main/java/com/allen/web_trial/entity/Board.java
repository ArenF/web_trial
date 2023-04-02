package com.allen.web_trial.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "board")
public class Board {
    @Id
    @GeneratedValue
    @Column(name = "boardId")
    private Long id;

    @ManyToOne(cascade = CascadeType.MERGE, targetEntity = MemberEntity.class)
    @JoinColumn(name = "memberId", updatable = true)
    private MemberEntity memberEntity;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Builder
    public Board(MemberEntity member, String title, String content) {
        this.memberEntity = member;
        this.title = title;
        this.content = content;
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
