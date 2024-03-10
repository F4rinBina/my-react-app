import Navbar from "../../components/Navbar/Navbar";
import styled from "./article.module.css";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading/Loading";

function ArticlePage() {
  const[article,setArticle]=useState({})
  const[isLoading , setIsLoading]=useState(false) 

  const params=useParams()
  useEffect(()=>{
    setIsLoading(true)

    axios.get(`http://localhost:8000/articles/${params.id}`).then((result)=>{
      setArticle(result.data)
      setIsLoading(false)
    })

  },[])


  return (
    <div className={styled.articlePage}>
      <Navbar title="صنعت بلاگ" />
      <div className="container">
        {
          isLoading ?<Loading />:<><h4>عنوان:{article.title}</h4>
          <p> تاریخ:{article.date}</p>
          <p>نویسنده:{article.athor}</p>
          <img src={article.imageUrl} alt="" />
          <p>
           {article.content}
          </p>
          
          </>
        }
        
    
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;
