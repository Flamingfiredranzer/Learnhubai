import { motion } from "framer-motion";

const roadmap = [
  {
    level: "Beginner Level",
    color: "text-green-400",
    steps: [
      "Learn Python fundamentals (Variables, Loops, Functions)",
      "Understand Data Structures (Lists, Dictionaries, Tuples)",
      "Basic Mathematics (Linear Algebra, Probability)",
      "Introduction to Machine Learning concepts",
      "Learn NumPy & Pandas for data handling"
    ]
  },
  {
    level: "Intermediate Level",
    color: "text-yellow-400",
    steps: [
      "Supervised vs Unsupervised Learning",
      "Algorithms: Linear Regression, Decision Trees, KNN",
      "Model Evaluation & Cross Validation",
      "Deep Learning basics (Neural Networks)",
      "Build mini ML projects"
    ]
  },
  {
    level: "Advanced Level",
    color: "text-cyan-400",
    steps: [
      "Deep Learning (CNN, RNN, Transformers)",
      "Natural Language Processing (NLP)",
      "Computer Vision Projects",
      "Deploy ML models using Flask / FastAPI",
      "MLOps & Model Monitoring"
    ]
  }
];

export default function SimpleLearning() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Simple AI Learning Path 📘
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Follow this structured roadmap to master Artificial Intelligence step by step.
        </p>
      </motion.div>

      {/* ROADMAP CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {roadmap.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          >
            <h3 className={`text-2xl font-semibold mb-6 ${item.color}`}>
              {item.level}
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              {item.steps.map((step, i) => (
                <li key={i}>• {step}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
