package com.allen.web_trial.domain;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Table(name = "board")
@Entity
@Getter
public class Board extends BaseTimeEntity {

    @Builder
    public Board(String title, String content, String author, Integer viewCount, int notice_, int delete_) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.viewCount = viewCount;
        this.notice_ = notice_;
        this.delete_ = delete_;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "author", nullable = false, length = 25)
    private String author;

    @Column(name = "viewCount", nullable = false)
    private Integer viewCount;

    @Column(name = "notice_yn")
    private int notice_;

    @Column(name = "delete_yn")
    private int delete_;
}
