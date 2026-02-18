import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const concepts = [
  {
    title: "Machine Learning",
    slug: "machine-learning",
    description:
      "Machine Learning enables systems to learn patterns from data and make predictions."
  },
  {
    title: "Deep Learning",
    slug: "deep-learning",
    description:
      "Deep Learning uses neural networks with multiple layers to analyze complex patterns."
  },
  {
    title: "Natural Language Processing",
    slug: "nlp",
    description:
      "NLP allows computers to understand and generate human language."
  },
  {
    title: "Computer Vision",
    slug: "computer-vision",
    description:
      "Computer Vision enables machines to interpret visual data."
  },
  {
    title: "Generative AI",
    slug: "generative-ai",
    description:
      "Generative AI creates new content like text, images, and code."
  },
  {
    title: "Reinforcement Learning",
    slug: "reinforcement-learning",
    description:
      "Reinforcement Learning trains agents using rewards and penalties."
  }
];

export default function AiConcepts() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4">
          AI Core Concepts 🧠
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Click any concept to view detailed learning path.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {concepts.map((item, index) => (
          <Link to={`/ai-concepts/${item.slug}`} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          </Link>
        ))}

      </div>
    </div>
  );
}