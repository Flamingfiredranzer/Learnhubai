package com.learnhubai.learnhubai.dto;

import lombok.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogDTO {

    private String id;
    private String title;
    private String slug;
    private String content;
    private String author;
    private String category;
    private boolean featured;
    private LocalDateTime createdAt;
}