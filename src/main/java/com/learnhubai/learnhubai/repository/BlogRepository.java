package com.learnhubai.learnhubai.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.learnhubai.learnhubai.model.Blog;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface BlogRepository extends MongoRepository<Blog, String> {

    Optional<Blog> findBySlug(String slug);

    List<Blog> findByCategory(String category);

    List<Blog> findByFeaturedTrue();

    Page<Blog> findByTitleContainingIgnoreCase(String keyword, Pageable pageable);
}