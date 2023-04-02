package com.allen.web_trial.entity;

import jakarta.persistence.*;

@Table(name = "member_table")
@Entity
public class MemberTable {

    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "nickName", nullable = false)
    private String name;

    @Column(name = "memberEmail", nullable = false, length = 30)
    private String email;

}
