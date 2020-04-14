import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Article = props => {
    const [title, setTitle] = useState("")
    const [article, setArticle] = useState("")
    const [authorname, setAuthorName] = useState("")

    useEffect(() => {
        axios.get(`dashboard/articles/${props.match.params.id}`)
        .then(res => [
            setTitle(res.data.title),
            setArticle(res.data.article),
            setAuthorName(res.data.authorname)
        ])
        .catch(err => console.log(err));
    }, [props]);
    return (
        <MainContainer>
            <h2>{title}</h2>
    <p>{article}</p>
    <p className="badge badge-secondary">{authorname}</p>
    <br/>
    <Link to='/dashboard' type="submit" className="btn btn-primary">Home
    </Link>
        </MainContainer>
    )
}

export default Article

//main container

const MainContainer =styled.div`
margin : 6rem auto;
padding : 3rem 14rem;

h2{
    text-align: center;
    font-weight : 450;
    color: var(--dark-green);
}

.btn-primary{
  
    background: var(--dark-green);
    border:none;
    &:hover{
        background: var(--light-green) ; 
    }
`;

