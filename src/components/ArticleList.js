import React from "react";
import Article from "./Article"




function ArticleList (props) {
    const {posts} = props;
    const articleComponents = posts.map ((post)=>(
        <Article key ={post.id} post ={post} title= {post.title} date={post.date} preview ={post.preview}/>
    ))
    return (<main>
        {articleComponents}
    </main>)
}

export default ArticleList