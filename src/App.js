import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AiConcepts from "./pages/AiConcepts";
import ModernTools from "./pages/ModernTools";
import SimpleLearning from "./pages/SimpleLearning";
import CareerGrowth from "./pages/CareerGrowth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import AiConceptDetail from "./pages/AiConceptDetail";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/ai-concepts" element={<AiConcepts />} />
        <Route path="/modern-tools" element={<ModernTools />} />
        <Route path="/simple-learning" element={<SimpleLearning />} />
        <Route path="/career-growth" element={<CareerGrowth />} />
        <Route path="/ai-concepts/:slug" element={<AiConceptDetail />} />
      </Routes>
    </Router>
  );
}

export default App;