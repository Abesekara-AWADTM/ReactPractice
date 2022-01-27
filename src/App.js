import Navbar from "./Navbar";
import Home from "./Home";

const title = "welcome to the blog";
const likes = 50;
const person = { name: "thilini", age: 30 };
const link = "http://www.google.com";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{[1,2,3,4]}</p>
        <a href="http://www.google.com">Google</a>
        <br />
        <a href="{link}">Google</a> */}

        <Home />
      </div>
    </div>
  );
}

export default App;
