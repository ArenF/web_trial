package com.allen.web_trial.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Table(name = "member_table")
@Entity
public class MemberEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nickName", nullable = false)
    private String name;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "memberEmail", nullable = false, length = 30)
    private String email;

    @Column(name = "uniqueId", nullable = false)
    private Long uuid;

    @Builder
    public MemberEntity(String name, String password, String email, Long uuid) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.uuid = uuid;
    }
}
