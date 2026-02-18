import { motion } from "framer-motion";

const tools = [
  {
    name: "ChatGPT",
    category: "Conversational AI",
    description:
      "Advanced AI chatbot capable of generating human-like responses, coding assistance, and problem-solving.",
    link: "https://chat.openai.com"
  },
  {
    name: "TensorFlow",
    category: "Machine Learning Framework",
    description:
      "Open-source platform by Google for building and training machine learning models.",
    link: "https://www.tensorflow.org"
  },
  {
    name: "PyTorch",
    category: "Deep Learning Framework",
    description:
      "Flexible deep learning framework widely used for research and production AI systems.",
    link: "https://pytorch.org"
  },
  {
    name: "Hugging Face",
    category: "NLP & Transformers",
    description:
      "Provides state-of-the-art NLP models and APIs for language understanding and generation.",
    link: "https://huggingface.co"
  },
  {
    name: "OpenCV",
    category: "Computer Vision",
    description:
      "Open-source library for image processing and real-time computer vision applications.",
    link: "https://opencv.org"
  },
  {
    name: "LangChain",
    category: "LLM Applications",
    description:
      "Framework for developing applications powered by large language models.",
    link: "https://www.langchain.com"
  },
  {
    name: "Scikit-Learn",
    category: "Machine Learning",
    description:
      "Simple and efficient ML library for data mining and analysis.",
    link: "https://scikit-learn.org"
  },
  {
    name: "Keras",
    category: "Deep Learning",
    description:
      "High-level neural network API that runs on top of TensorFlow.",
    link: "https://keras.io"
  }
];

export default function ModernTools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Modern AI Tools 🤖
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore the most powerful AI tools and frameworks used in real-world
          machine learning, deep learning, NLP, and AI application development.
        </p>
      </motion.div>

      {/* TOOLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {tool.name}
            </h3>

            <p className="text-sm text-purple-300 mt-1">
              {tool.category}
            </p>

            <p className="text-gray-300 mt-4 text-sm">
              {tool.description}
            </p>

            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-4 py-2 bg-cyan-500 text-black rounded-lg hover:scale-105 transition duration-300"
            >
              Visit Official Site
            </a>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
