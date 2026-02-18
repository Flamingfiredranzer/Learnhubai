import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBrain, FaRocket, FaBookOpen, FaRobot } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const stats = [
    { number: "10+", label: "AI Articles" },
    { number: "5+", label: "AI Categories" },
    { number: "100%", label: "Free Learning" },
  ];

  const features = [
    { icon: <FaBrain />, title: "AI Concepts", link: "/ai-concepts" },
    { icon: <FaRobot />, title: "Modern Tools", link: "/modern-tools" },
    { icon: <FaBookOpen />, title: "Simple Learning", link: "/simple-learning" },
    { icon: <FaRocket />, title: "Career Growth", link: "/career-growth" },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* ================= HERO SECTION WITH VIDEO ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 scale-110 animate-slowZoom"
        >
          <source src="/videos/ai-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75 -z-10"></div>

        {/* Content */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          LearnAiHub 🚀
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl max-w-2xl text-gray-300"
        >
          Master Artificial Intelligence, explore cutting-edge AI tools,
          and read powerful real-world tech blogs in one powerful platform.
        </motion.p>

        <div className="flex gap-6 mt-10">
          <button
            onClick={() => navigate("/blogs")}
            className="px-8 py-4 bg-cyan-500 rounded-xl text-lg font-semibold 
                       transition-transform duration-300 
                       hover:scale-105 hover:shadow-2xl"
          >
            Explore Blogs
          </button>

          <Link
            to="/ai-concepts"
            className="px-8 py-4 border border-cyan-400 rounded-xl text-lg 
                       transition-transform duration-300
                       hover:scale-105 hover:bg-cyan-500 hover:text-black"
          >
            Start Learning
          </Link>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-20">
        <div className="grid md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center shadow-xl"
            >
              <h2 className="text-4xl font-bold text-cyan-400">
                {item.number}
              </h2>
              <p className="mt-2 text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">
          Why Learnaihub?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 px-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Link to={feature.link} key={index}>
              <div
                className="bg-gradient-to-br from-white/10 to-white/5 
                           p-8 rounded-2xl text-center shadow-2xl 
                           backdrop-blur-lg cursor-pointer
                           transition-transform duration-300
                           hover:scale-105 hover:shadow-cyan-500/20"
              >
                <div className="text-4xl text-cyan-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-20 text-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 
                        p-12 rounded-3xl max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Level Up Your AI Skills?
          </h2>
          <button
            onClick={() => navigate("/blogs")}
            className="px-8 py-3 bg-black text-white rounded-xl 
                       transition-transform duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* ================= DOMAIN FOR SALE ================= */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-5 text-center font-semibold">
        🚀 Premium Domain <span className="font-bold">learnaihub.in</span> is Available for Sale!  
        Interested? Contact the founders below.
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-gray-300">

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Founder
            </h3>
            <p className="font-semibold text-white">Gurucharan P</p>
            <p>
              <a href="tel:9740043604" className="hover:text-cyan-400">
                📞 9740043604
              </a>
            </p>
            <p>
              <a href="mailto:cguru203@gmail.com" className="hover:text-cyan-400">
                📧 cguru203@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              Co-Founder
            </h3>
            <p className="font-semibold text-white">Harish G</p>
            <p>
              <a href="tel:9731337072" className="hover:text-cyan-400">
                📞 9731337072
              </a>
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 mt-10 text-sm">
          © 2026 LearnAiHub. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;