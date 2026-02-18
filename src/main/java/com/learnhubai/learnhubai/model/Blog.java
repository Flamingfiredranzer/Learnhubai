package com.learnhubai.learnhubai.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

@Document(collection = "blogs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Blog {

    @Id
    private String id;

    @NotBlank(message = "Title cannot be empty")
    private String title;

    @Indexed(unique = true)
    private String slug;

    @NotBlank(message = "Content cannot be empty")
    private String content;

    @NotBlank(message = "Author cannot be empty")
    private String author;

    @NotBlank(message = "Category cannot be empty")
    private String category;

    private String imageUrl;

    private String excerpt;

    private String videoUrl;

    private boolean featured = false;

    private LocalDateTime createdAt = LocalDateTime.now();
}