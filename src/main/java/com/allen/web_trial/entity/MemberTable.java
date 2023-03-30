package com.allen.web_trial.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name = "memeberTable")
@Entity
public class MemberTable {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
}
