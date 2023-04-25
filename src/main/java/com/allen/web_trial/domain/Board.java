package com.allen.web_trial.domain;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name = "board")
@Entity
@Getter
public class Board extends BaseTimeEntity {

    @Builder
    public Board(long id, String title, String content, Member author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    @Id
    @Column(name = "boardId", nullable = false)
    private long id;

    @Column(name = "title", length = 60)
    private String title;

    @Column(name = "contents")
    private String content;

    @ManyToOne
    @JoinColumn(name = "nickname")
    private Member author;
}
