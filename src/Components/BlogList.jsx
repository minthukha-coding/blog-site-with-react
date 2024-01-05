const BlogList = ({ blogs }) => {
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.blog_Id} >
            <h2>{ blog.blog_Title }</h2>
            <p>Written by { blog.blog_Author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;