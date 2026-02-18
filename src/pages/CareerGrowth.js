import { motion } from "framer-motion";

const careers = [
  {
    role: "AI Engineer",
    salary: "₹8 - 20 LPA (India)",
    skills: "Python, ML, Deep Learning, APIs, Deployment",
    description:
      "Designs and builds intelligent systems and integrates AI models into real-world applications."
  },
  {
    role: "Machine Learning Engineer",
    salary: "₹10 - 25 LPA",
    skills: "Scikit-learn, TensorFlow, PyTorch, Data Pipelines",
    description:
      "Develops and optimizes machine learning models for prediction and automation."
  },
  {
    role: "Data Scientist",
    salary: "₹6 - 18 LPA",
    skills: "Statistics, Python, SQL, Data Visualization",
    description:
      "Analyzes structured and unstructured data to extract meaningful insights."
  },
  {
    role: "NLP Engineer",
    salary: "₹12 - 28 LPA",
    skills: "Transformers, HuggingFace, LLMs, Text Processing",
    description:
      "Builds AI systems that understand and generate human language."
  },
  {
    role: "MLOps Engineer",
    salary: "₹10 - 22 LPA",
    skills: "Docker, Kubernetes, CI/CD, Model Deployment",
    description:
      "Handles deployment, monitoring, and scaling of ML models in production."
  }
];

export default function CareerGrowth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          AI Career Growth 💼
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore high-demand AI careers and build your roadmap to success.
        </p>
      </motion.div>

      {/* CAREER GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {careers.map((career, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-400">
              {career.role}
            </h3>

            <p className="text-green-400 mt-2 font-medium">
              {career.salary}
            </p>

            <p className="text-gray-300 text-sm mt-4">
              {career.description}
            </p>

            <div className="mt-4 text-sm text-cyan-300">
              <strong>Skills:</strong> {career.skills}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
