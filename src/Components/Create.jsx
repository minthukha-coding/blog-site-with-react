import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const sumbitHandaler = (e) => {
    e.preventDefault();
    const blog = { Blog_Title, Blog_Author, Blog_Content };

    setisLoading(true);
    fetch("https://localhost:7241/api/BlogAdoDotNet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog add");
      setisLoading(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={sumbitHandaler}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={Blog_Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog_Author:</label>
        <input
          type="text"
          required
          value={Blog_Author}
          onChange={(e) => setContent(e.target.value)}
        />
               
         <label>Blog Content:</label>
        <input
          type="text"
          required
          value={Blog_Content}
          onChange={(e) => setContent(e.target.value)}
        />
        {/* <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select> */}
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button>Addiing...</button>}
      </form>
    </div>
  );
};

export default Create;
