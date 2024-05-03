import "./blog_post.css";
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

function BlogPost({children}) {

  let {name} = useParams();

  const [data, setData] = useState({__html:""});

  useEffect(() => {
    fetch(`/post/${name}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      return response.text();
    })
    .then(data => setData({__html: data}))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return(
    <div className="body" dangerouslySetInnerHTML={data} />
  );

}

export default BlogPost;
