import "./blog_catalog.css";
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function BlogCatalog({children}) {

  let {name} = useParams();

  const [data, setData] = useState({"state":"pending"});

  useEffect(() => {
    fetch(`/post/catalog.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      return response.json();
    })
    .then(data => setData(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  if(data.hasOwnProperty("state")){
    return <div>Wait for a bit.</div>
  }
  return(
    <div className="body">
      {data.map((item,index) => (
          <div className="grid-item" key={index}>
            <img src={`/image/${item.img}`} />
            <a href={`/blog/post`}>{item.title}</a>
            <p>{item.desc}</p>
            <hr/>
            <p>{item.author} | {item.published_on}</p>
          </div>
        ))} 
    </div>
  );
}

export default BlogCatalog;
