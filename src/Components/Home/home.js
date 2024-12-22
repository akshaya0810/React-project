import React from "react";
import { useParams } from "react-router-dom";
import './home.css';

const Home = () => {
  const params = useParams();
  console.log(params);
  return<>
  <div><h1 className="header">Home Page</h1></div>
  <img 
        src="https://media.licdn.com/dms/image/D5612AQFa-giMNe-Feg/article-cover_image-shrink_600_2000/0/1712550768659?e=2147483647&v=beta&t=fvk4JJMUHups13MelTEqQtphHcdOUIsT0fQuaQsIr_U" 
        alt="Description" 
        className="bottom-image" 
      /> 
  </> 
};

export default Home;
