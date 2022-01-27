// const BlogList = (props) => { //0ne way to prop
//     const blogs=props.blogs;
//     const title=props.title;

const BlogList = ({ blogs, title,handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p> written by {blog.author}</p>
          <br/>
          <button
            style={{backgroundColor:'#c1c1c1', borderRadius: "8px" }}
            onClick={() => handleDelete(blog.id)} >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
