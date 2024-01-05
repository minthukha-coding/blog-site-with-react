import useFetch from "./useFetch";
import BlogList from "./BlogList"

function Home() {
  const {data:blogs,isLoading,error} = useFetch("https://localhost:7241/api/BlogAdoDotNet");
  
  return (
    <>
      <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    </>
  );
}

export default Home;