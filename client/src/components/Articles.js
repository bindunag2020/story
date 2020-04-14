import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import axios from 'axios'
const Articles = ({posts}) => {
    const [article, setArticle] = useState([])
    //delete artcle by id
    const deleteArticle = id =>{
        axios.delete(`dashboard/articles/${id}`)
        .then(res => alert(res.data)) 
        setArticle(article.filter(elem => elem._id!==id))
    }
    return (
        <MainContainer>
            {posts.map((article, key) => (
                <div className="conatiner" key={key}>
                    <Link to={{
                        pathname: `dashboard/article/${article
                        ._id}`
                    }}>
                 <h2>{article.title}</h2>
                 </Link>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">{article.authorname}</span>
            <div className="row my-3">
                <div className="col-sm-2">
                    <Link to={`dashboard/update/${article._id}`} className="btn btn-outline-success">
                        Edit Article
                    </Link>
                </div>
                <div className="col-sm-2">
                    <button onClick={() =>deleteArticle(article._id)} 
                    className="btn btn-outline-danger">
                        Delete Article
                    </button>
                </div>
                </div>
                <hr/>
            </div>
            ))}
        </MainContainer>
    );
};

export default Articles

//main container

const MainContainer = styled.div`
margin : 7rem 7rem;

img{
    width: 7rem;
    display : block;
    margin : 0 auto;
}
`;