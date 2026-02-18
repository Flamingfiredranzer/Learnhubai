import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-slate-800 text-white px-8 py-4 flex justify-between items-center z-50 shadow-lg">
      <h1 className="text-2xl font-bold text-cyan-400">
        LearnHubAI 🚀
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>

        <Link to="/blogs" className="hover:text-cyan-400">
          Blogs
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;