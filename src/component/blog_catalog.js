import "./blog_catalog.css";
import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

function BlogCatalog(props) {

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
    <div className="grid-container">
      {data.map((item,index) => (
          <Link to={{ pathname:`/blog/${item.link}`, state:item }}>
            <div className="grid-item" key={index}>
              <img src={`/image/${item.img}`} />
              <div className="grid-item-caption">
                <div className="grid-item-title">{item.title}</div>
                <p className="grid-item-desc">{item.desc}</p>
                <hr/>
                <p className="grid-item-cred">
                  {item.author} | {item.published_on}
                </p>
              </div>
            </div>
          </Link>
        ))} 
    </div>
  );
}

export default BlogCatalog;
