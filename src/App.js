import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import "antd/dist/antd.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import feedData from './data';
import Cards from './components/Cards';
import useGetData from "./hook";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  const liveFeed = useGetData();
  const [renderedPosts, setRenderedPosts] = useState(liveFeed.slice(0,6)); 



  
  useEffect(() => {
    setRenderedPosts(liveFeed.slice(0, 6));

  }, [liveFeed])
  

  
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className="app-body">
          <Cards
            posts={liveFeed}
            renderedPosts={renderedPosts}
            setRenderedPosts={setRenderedPosts}
          />
        </div>
      </Router> 
    </div>
  );
}

export default App;
