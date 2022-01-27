import{useState,useEffect}from 'react';
import BlogList from './BlogList';

const Home = () => {

//   const handleClick = () => {   
//     console.log("Thilini");
//   };
//   const handleClickAgain = (name) => {
//     console.log("hello" + name);
//   };

// const[name,setName]=useState('Thilini');
// const[age,setAge]=useState(23);


// const handleClick3=()=>{
//    setName('Abesekara');
//    setAge(25);
// }
const [blogs, setBlogs] = useState(null)

  const handleDelete=(id)=>{
       const newBlogs=blogs.filter(blog=>blog.id!==id);
       setBlogs(newBlogs);  
  }

  useEffect(()=>{
   fetch('http://localhost:8000/blogs')
  },[])

  return (
    <div className="home">
      
      {/* <button onClick={handleClick}>Click me</button>
      <br />
      <br />
      <button onClick={() => {handleClickAgain("  madushani");}} >click me again</button> */}



      {/* <p >My name is { name } and my age is {age}</p>
      <button onClick={handleClick3}>Click me</button> */}

     <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
     {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='kkk')} title="Thilini's Blogs"/> */}


    </div>
  );
};

export default Home;
