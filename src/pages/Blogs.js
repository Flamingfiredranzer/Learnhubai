import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = () => {
    setLoading(true);

    let url = `http://localhost:8080/api/blogs?page=${page}&size=6`;

    if (keyword.trim() !== "") {
      url = `http://localhost:8080/api/blogs/search?keyword=${keyword}&page=${page}&size=6`;
    }

    axios
      .get(url)
      .then((response) => {
        const pageData = response?.data?.data;

        setBlogs(pageData?.content || []);
        setTotalPages(pageData?.totalPages || 0);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setBlogs([]);
        setTotalPages(0);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    setPage(0);
    fetchBlogs();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white text-2xl">
        Loading Blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-28 px-6 text-white">

      <h1 className="text-4xl font-bold text-center mb-10 text-cyan-400">
        AI Blogs
      </h1>

      {/* SEARCH BAR */}
      <div className="max-w-4xl mx-auto flex mb-12">
        <input
          type="text"
          placeholder="Search blogs..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 p-3 rounded-l-lg bg-white/10 outline-none text-white"
        />
        <button
          onClick={handleSearch}
          className="px-6 bg-cyan-500 rounded-r-lg hover:bg-cyan-600 transition"
        >
          Search
        </button>
      </div>

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blogs/${blog.slug}`)}
            className="cursor-pointer bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">
              {blog.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {blog.excerpt || "Click to read more..."}
            </p>

            <div className="text-cyan-400 font-semibold">
              Read More →
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-4">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-600 transition"
          >
            Prev
          </button>

          <span className="px-4 py-2">
            Page {page + 1} of {totalPages}
          </span>

          <button
            disabled={page + 1 === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-gray-700 rounded disabled:opacity-50 hover:bg-gray-600 transition"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Blogs;