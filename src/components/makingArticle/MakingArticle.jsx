import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styled from "./making.module.css";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";
import axios from "axios";

function MakingArticle() {
  const [newArticle, setNewArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
    message: "",
    imageUrl: "",
  });

  const onChangeArticle = (e) => {
    setNewArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeArticleMessage = (e) => {
    setNewArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };
  const handleCreateNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: 9,
      imageUrl: newArticle.imageUrl,
      title: newArticle.title,
      readingTime: newArticle.readingTime,
      date: newArticle.date,
      athor: newArticle.athor,
      content: newArticle.message,
    });
  };
  return (
    <div>
      <Navbar title="صنعت بلاگ" />
      <div className="container">
        <div className={styled.making}>
          <h3> ساخت مقاله</h3>
          <Input
            label="عنوان"
            name="title"
            handleChange={onChangeArticle}
            placeholder="لطفا عنوان را درج نمایید"
            type="text"
          />
          <Input
            label="تاریخ"
            name="date"
            handleChange={onChangeArticle}
            placeholder="لطفا تاریخ را انتخاب نمایید"
            type="text"
          />
          <Input
            label="نویسنده"
            name="athor"
            handleChange={onChangeArticle}
            placeholder="لطفا نام نویسنده را وارد نمایید"
            type="text"
          />
          <Input
            label="مدت زمان خواندن"
            name="readingTime"
            handleChange={onChangeArticle}
            placeholder="لطفا مدت زمان خواندن را درج نمایید"
            type="number"
          />
          <Input
            label="آدرس عکس"
            name="imageUrl"
            handleChange={onChangeArticle}
            placeholder="لطفا آدرس عکس مد نظر را درج نمایید"
            type="text"
          />
        </div>

        <Textarea label="متن" handleChange={handleChangeArticleMessage} />
        <div className={styled.buttonWrapper}>
          <button onClick={handleCreateNewArticle}>ساخت مقاله</button>
        </div>
      </div>
    </div>
  );
}

export default MakingArticle;
