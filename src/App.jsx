import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import MakingArticle from "./components/makingArticle/MakingArticle";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route  path="/article/:id"  element={<ArticlePage/>}/>
          <Route path="/Making an article" element={<MakingArticle/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
