import "./blog_post.css";
import React, { useState, useEffect } from 'react';
import {useParams, useLocation} from 'react-router-dom';

function BlogPost(props) {

  let {name} = useParams();
  let location = useLocation(); 

  const [data, setData] = useState({__html:""});

  useEffect(() => {
    fetch(`/post/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
    }
      return response.text();
    })
    .then(data => setData({__html: data}))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  console.log(location);

  return(
    <>
      <div className="body" dangerouslySetInnerHTML={data} />
    </>
  );

}

export default BlogPost;
