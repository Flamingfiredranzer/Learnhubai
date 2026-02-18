package com.learnhubai.learnhubai.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.learnhubai.learnhubai.repository.BlogRepository;
import com.learnhubai.learnhubai.model.Blog;
import com.learnhubai.learnhubai.exception.BlogNotFoundException;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BlogService {

    private final BlogRepository blogRepository;

    public Page<Blog> getAllBlogs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return blogRepository.findAll(pageable);
    }

    public Blog getBlogBySlug(String slug) {
        return blogRepository.findBySlug(slug)
                .orElseThrow(() ->
                        new BlogNotFoundException("Blog not found with slug: " + slug));
    }

    public List<Blog> getBlogsByCategory(String category) {
        return blogRepository.findByCategory(category);
    }

    public Page<Blog> searchBlogs(String keyword, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        return blogRepository.findByTitleContainingIgnoreCase(keyword, pageable);
    }

    public List<Blog> getFeaturedBlogs() {
        return blogRepository.findByFeaturedTrue();
    }

    public Blog createBlog(Blog blog) {
        blog.setSlug(generateSlug(blog.getTitle()));
        return blogRepository.save(blog);
    }

    public void deleteBlog(String id) {
        blogRepository.deleteById(id);
    }

    private String generateSlug(String title) {
        return title.toLowerCase()
                .replaceAll("[^a-z0-9\\s]", "")
                .replaceAll("\\s+", "-");
    }
}