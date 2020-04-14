import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorname] = useState("");
    const [message, setMessage] = useState('');
    const changeOnclick = e => {
        e.preventDefault();

        const articles ={
            title,
            article,
            authorname
        };

setTitle("")
setArticle("")
setAuthorname("")

        axios.post("dashboard/articles/add",articles)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        })
    };

    return (
        <AddArticleContainer>
            <div className="conatiner">
             <h1> Add Article </h1>
             <span className="message">{message}</span>
        <form onSubmit={changeOnclick} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="authorname">Author Name</label>
          <input type="text" 
          value={authorname}
          onChange={e => setAuthorname(e.target.value)}
          className="form-control" placeholder="Author Name"/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-control" placeholder="Title"/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Article</label>
    <textarea 
    value={article}
    onChange={e => setArticle(e.target.value)}
    className="form-control" ></textarea>
  </div>
        <button type="submit" className="btn btn-primary">Post Article</button>
      </form>
      </div>
      </AddArticleContainer>
    )
}

export default AddArticle;

//main container

const AddArticleContainer = styled.div`
margin : 3rem auto;
padding : 3rem;
width : 31.25rem;

h1{
    font-weight : 450;
    color: var(--dark-green);
}

.btn-primary{
    margin-top: 2rem;
    background: var(--dark-green);
    border:none;
    &:hover{
        background: var(--light-green) ; 
    }
}

.message{
    font-weight : 300;
    color : tomato;
    padding: 1rem 1rem 1rem 0;
}

`;
