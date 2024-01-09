import {useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useFetch from "./useFetch";


const BlogDetails = () => {
  const  { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://localhost:7179/api/Blog/" + id);
  const navigate = useNavigate();

  const deleteAPI = () => {
    fetch("https://localhost:7179/api/Blog/" + blog.blog_Id, {
      method: "DELETE",
    }).then(() => {
      navigate('/')
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.blog_Title}</h2>
          <p>Written by {blog.blog_Author}</p>
          <div>{blog.blog_Body}</div>
          <button onClick={deleteAPI}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;