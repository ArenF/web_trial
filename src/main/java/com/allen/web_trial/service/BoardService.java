package com.allen.web_trial.service;

import com.allen.web_trial.dto.BoardCreateRequestDto;
import com.allen.web_trial.dto.BoardListResponseDto;
import com.allen.web_trial.dto.BoardResponseDto;
import com.allen.web_trial.dto.BoardUpdateRequestDto;
import com.allen.web_trial.entity.Board;
import com.allen.web_trial.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class BoardService {
    private final BoardRepository boardRepository;

    @Transactional
    public Long create(BoardCreateRequestDto requestDto) {
        return boardRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public Long update(Long id, BoardUpdateRequestDto requestDto) {
        Board board = boardRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        board.update(requestDto.getTitle(), requestDto.getContent());

        return id;
    }

    @Transactional
    public void delete(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(IllegalArgumentException::new);
        boardRepository.delete(board);
    }

    @Transactional(readOnly = true)
    public BoardResponseDto searchById(Long id) {
        Board board = boardRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        return new BoardResponseDto(board);
    }

    @Transactional(readOnly = true)
    public List<BoardListResponseDto> searchAllDesc() {
        return boardRepository.findAll().stream()
                .map(BoardListResponseDto::new)
                .collect(Collectors.toList());
    }
}
