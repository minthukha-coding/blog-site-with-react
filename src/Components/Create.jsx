import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [Blog_Title, setBlog_Title] = useState("");
  const [Blog_Author, setBlog_Author] = useState("");
  const [Blog_Body, setBlog_Body] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  const sumbitHandaler = (e) => {
    e.preventDefault();
    const blog = { Blog_Title, Blog_Author, Blog_Body };

    setisLoading(true);
    fetch("https://localhost:7179/api/Blog", {
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
          onChange={(e) => setBlog_Title(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={Blog_Body}
          onChange={(e) => setBlog_Body(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input
          type="text"
          required
          value={Blog_Author}
          onChange={(e) => setBlog_Author(e.target.value)}
        />
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
