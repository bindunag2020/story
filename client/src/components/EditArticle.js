import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const EditArticle = (props) => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [authorname, setAuthorName] = useState("");
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
setAuthorName("")

        axios.put(`dashboard/articles/update/${props.match.params.id}`,articles)
        .then(res => setMessage(res.data))
        .catch(err => {
            console.log(err);
        })
    };

    useEffect(() => {
        axios.get(`dashboard/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(err => console.log(err));
    }, [])

    return (
        <EditArticleContainer>
            <div className="conatiner">
             <h1> Update Article </h1>
    <span className="message">{message}</span>
        <form onSubmit={changeOnclick} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="authorname">Author Name</label>
          <input type="text" 
          value={authorname}
          onChange={e => setAuthorName(e.target.value)}
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
        <button type="submit" className="btn btn-primary">Update Article</button>
      </form>
      </div>
      </EditArticleContainer>
    )
}

export default EditArticle;

//main container

const EditArticleContainer = styled.div`
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

    }}

.message{
    font-weight : 300;
    color : tomato;
    padding: 1rem 1rem 1rem 0;
}
`;
