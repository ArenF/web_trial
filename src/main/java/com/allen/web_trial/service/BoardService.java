package com.allen.web_trial.service;

import com.allen.web_trial.repository.BoardRepository;

public class BoardService {

    BoardRepository boardRepository;
    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    public BoardService() {

    }
}
