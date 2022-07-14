import React from 'react'
import Article from './Article';

function ArticleList({posts}) {
    const articleObj = posts?.map((art)=>
    (
        
         <div key = {art.id}>
            <Article
            title = {art.title}
            date = {art.date}
            preview = {art.preview}
            minutes = {art.minutes}
            />
        </div>
    ));
  return (

        <main>
            {articleObj}
        </main>
    
  )
}

export default ArticleList