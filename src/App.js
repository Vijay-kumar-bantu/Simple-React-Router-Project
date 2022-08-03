import "./App.css";
import { Postprovider } from "./Postscontext";
import Posts from "./Posts";
import Post from "./Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Postprovider>
        <h1>Posts</h1>
        <Router>
          <Routes>
            <Route path="/" exact element={<Posts />} />
            <Route path="/Post/:id" element={<Post />} />
          </Routes>
        </Router>
      </Postprovider>
    </div>
  );
}

export default App;
