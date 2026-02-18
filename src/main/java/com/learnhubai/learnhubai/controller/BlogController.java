package com.learnhubai.learnhubai.controller;

import com.learnhubai.learnhubai.dto.ApiResponse;
import com.learnhubai.learnhubai.model.Blog;
import com.learnhubai.learnhubai.service.BlogService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogService blogService;

    // GET ALL BLOGS (PAGINATION)
    @GetMapping
    public ApiResponse<Page<Blog>> getAllBlogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size
    ) {
        return new ApiResponse<>(
                true,
                blogService.getAllBlogs(page, size),
                "Blogs fetched successfully"
        );
    }

    // GET SINGLE BLOG BY SLUG
    @GetMapping("/{slug}")
    public ApiResponse<Blog> getBlogBySlug(@PathVariable String slug) {
        Blog blog = blogService.getBlogBySlug(slug);
        return new ApiResponse<>(
                true,
                blog,
                "Blog fetched successfully"
        );
    }

    // FEATURED BLOGS
    @GetMapping("/featured")
    public List<Blog> getFeaturedBlogs() {
        return blogService.getFeaturedBlogs();
    }

    // CATEGORY FILTER
    @GetMapping("/category/{category}")
    public List<Blog> getByCategory(@PathVariable String category) {
        return blogService.getBlogsByCategory(category);
    }

    // SEARCH
    @GetMapping("/search")
    public ApiResponse<Page<Blog>> search(
            @RequestParam String keyword,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "6") int size
    ) {
        return new ApiResponse<>(
                true,
                blogService.searchBlogs(keyword, page, size),
                "Search results"
        );
    }

    // CREATE BLOG
    @PostMapping
    public ApiResponse<Blog> createBlog(@Valid @RequestBody Blog blog) {
        return new ApiResponse<>(
                true,
                blogService.createBlog(blog),
                "Blog created successfully"
        );
    }

    // DELETE BLOG
    @DeleteMapping("/{id}")
    public void deleteBlog(@PathVariable String id) {
        blogService.deleteBlog(id);
    }


}