import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Article from "../../components/article/Article";
import styled from "./home.module.css";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading , setIsLoading]=useState(false)

  useEffect(() => {
    setIsLoading(true)

    axios.get("http://localhost:8000/articles").then((result) => {
      setArticles(result.data);
      setIsLoading(false)
    });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="صنعت بلاگ" />
      

      <div className="container">
        <h2>مقالات جدید</h2>

        {
          isLoading ? <Loading /> :( <div className={styled.articles}>
            {articles.map((result) => (
            <Link to= {`/article/${result.id}`}> <Article key={result.id} industry={result} /></Link>
            ))}
          </div>)
        }

    
       

        

      </div>
      <Footer />
    </div>
  );
}

export default Home;
