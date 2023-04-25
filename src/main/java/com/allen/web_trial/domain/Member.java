package com.allen.web_trial.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;

import java.util.UUID;

@Entity(name = "Member")
@Getter
public class Member {

    @Builder
    public Member(String email, String nickname, String password) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
    }

    public Member() {
        this.email = "hjh040@gmail.com";
        this.nickname = "allen";
        this.password = "root";
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "nickname", nullable = false)
    private String nickname;

    @Column(name="password", nullable = false)
    private String password;
}
