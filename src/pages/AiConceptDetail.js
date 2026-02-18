import { useParams } from "react-router-dom";

const learningData = {
  "machine-learning": {
    title: "Machine Learning",
    overview:
      "Machine Learning is a subset of AI that allows systems to learn from data and improve automatically without being explicitly programmed.",

    youtube: "https://www.youtube.com/embed/GwIo3gDZCVQ",

    resources: [
      {
        name: "Scikit-Learn Documentation",
        link: "https://scikit-learn.org/stable/"
      },
      {
        name: "Kaggle Practice Platform",
        link: "https://www.kaggle.com/"
      }
    ],

    levels: {
      beginner: [
        "Learn Python Basics",
        "NumPy & Pandas",
        "Statistics & Probability",
        "Linear Regression"
      ],
      intermediate: [
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "K-Means Clustering"
      ],
      advanced: [
        "Hyperparameter Tuning",
        "XGBoost",
        "Model Deployment",
        "ML Pipelines"
      ]
    }
  },

  "deep-learning": {
    title: "Deep Learning",
    overview:
      "Deep Learning uses neural networks with multiple layers to solve complex problems such as image recognition and speech processing.",

    youtube: "https://www.youtube.com/embed/aircAruvnKk",

    resources: [
      {
        name: "TensorFlow Documentation",
        link: "https://www.tensorflow.org/"
      },
      {
        name: "PyTorch Documentation",
        link: "https://pytorch.org/"
      }
    ],

    levels: {
      beginner: [
        "Neural Network Basics",
        "Perceptron Model",
        "Activation Functions"
      ],
      intermediate: [
        "Convolutional Neural Networks (CNN)",
        "Recurrent Neural Networks (RNN)",
        "LSTM"
      ],
      advanced: [
        "Transformers",
        "GANs",
        "Transfer Learning"
      ]
    }
  },

  "nlp": {
    title: "Natural Language Processing",
    overview:
      "NLP enables machines to understand, interpret, and generate human language.",

    youtube: "https://www.youtube.com/embed/8rXD5-xhemo",

    resources: [
      {
        name: "HuggingFace Platform",
        link: "https://huggingface.co/"
      }
    ],

    levels: {
      beginner: [
        "Text Cleaning",
        "Tokenization",
        "Stopword Removal"
      ],
      intermediate: [
        "TF-IDF",
        "Word2Vec",
        "Sequence Models"
      ],
      advanced: [
        "Transformers",
        "BERT",
        "Large Language Models"
      ]
    }
  },

  "computer-vision": {
    title: "Computer Vision",
    overview:
      "Computer Vision enables machines to interpret and understand visual data from images and videos.",

    youtube: "https://www.youtube.com/embed/oXlwWbU8l2o",

    resources: [
      {
        name: "OpenCV Documentation",
        link: "https://opencv.org/"
      }
    ],

    levels: {
      beginner: [
        "Image Basics",
        "OpenCV Fundamentals",
        "Image Processing"
      ],
      intermediate: [
        "CNN for Vision",
        "Object Detection"
      ],
      advanced: [
        "YOLO",
        "Image Segmentation",
        "Face Recognition"
      ]
    }
  },

  "generative-ai": {
    title: "Generative AI",
    overview:
      "Generative AI creates new content such as text, images, audio, and code using deep learning models.",

    youtube: "https://www.youtube.com/embed/6af6bCkS2N0",

    resources: [
      {
        name: "OpenAI Documentation",
        link: "https://platform.openai.com/docs"
      }
    ],

    levels: {
      beginner: [
        "Intro to Generative Models",
        "Autoencoders"
      ],
      intermediate: [
        "GANs",
        "Diffusion Models"
      ],
      advanced: [
        "Transformers",
        "Fine-Tuning LLMs",
        "Prompt Engineering"
      ]
    }
  },

  "reinforcement-learning": {
    title: "Reinforcement Learning",
    overview:
      "Reinforcement Learning trains agents to make decisions by rewarding correct actions.",

    youtube: "https://www.youtube.com/embed/2pWv7GOvuf0",

    resources: [
      {
        name: "OpenAI Gym",
        link: "https://gym.openai.com/"
      }
    ],

    levels: {
      beginner: [
        "Markov Decision Process",
        "Q-Learning"
      ],
      intermediate: [
        "Deep Q Networks"
      ],
      advanced: [
        "Policy Gradient Methods",
        "Actor-Critic Algorithms"
      ]
    }
  }
};

export default function AiConceptDetail() {
  const { slug } = useParams();
  const concept = learningData[slug];

  if (!concept) {
    return <div className="text-white p-20">Concept not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20">

      {/* Title */}
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        {concept.title}
      </h1>

      {/* Overview */}
      <p className="text-gray-300 mb-10 max-w-3xl">
        {concept.overview}
      </p>

      {/* YouTube */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Recommended Video
        </h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src={concept.youtube}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Learning Resources
        </h2>
        <ul className="space-y-2">
          {concept.resources.map((res, index) => (
            <li key={index}>
              <a
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                {res.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Learning Path */}
      <div>
        <h2 className="text-2xl font-semibold text-purple-400 mb-6">
          Learning Path
        </h2>

        {Object.entries(concept.levels).map(([level, topics]) => (
          <div key={level} className="mb-8">
            <h3 className="text-xl font-semibold text-indigo-300 mb-3 capitalize">
              {level} Level
            </h3>
            <ul className="space-y-2">
              {topics.map((topic, index) => (
                <li key={index} className="bg-white/10 p-3 rounded-xl">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}