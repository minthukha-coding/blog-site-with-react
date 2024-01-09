import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.blog_Id} >
          <Link to={`/blogs/${blog.blog_Id}`}>
            <h2>{ blog.blog_Title }</h2>
            <p>Written by { blog.blog_Author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;