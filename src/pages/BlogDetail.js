import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/blogs/${slug}`)
      .then((res) => {
        if (res.data?.success && res.data?.data) {
          setBlog(res.data.data);
        } else {
          setBlog(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setBlog(null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Loading Blog...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white px-6 pt-28 overflow-hidden">

      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto relative z-10"
      >

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-cyan-400 hover:text-cyan-300 transition"
        >
          ← Back
        </button>

        {/* IMAGE BANNER */}
        {blog.imageUrl && (
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
        )}

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
          {blog.title}
        </h1>

        {/* CATEGORY + AUTHOR */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {blog.category && (
            <span className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm">
              {blog.category}
            </span>
          )}

          {blog.author && (
            <span className="text-gray-400 text-sm">
              By {blog.author}
            </span>
          )}
        </div>

        {/* CONTENT CARD */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/10 transition duration-500"
        >
          <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {blog.content}
          </p>
        </motion.div>

        {/* VIDEO SECTION */}
        {blog.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">
              🎥 Related Video
            </h2>

            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500">
              <iframe
                className="w-full h-full"
                src={blog.videoUrl}
                title="Blog Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
}

export default BlogDetail;