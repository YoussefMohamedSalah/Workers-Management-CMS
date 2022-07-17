import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { postsListContext } from '../Contexts/PostsListContext';
import PostsList from './PostsList';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import PostForm from '../Components/PostForm';
import axios from 'axios';
import Comments from './Comments';
import Post from './Post';
import Searched from './Searched';
import HomePage from './HomePage';
import Test from './Test';
import Login from './Login';
import { LoginContext } from '../Contexts/LoginContext';
import CompoundsFiltration from './CompoundsFiltration';

function Main() {
  const { compoundFilter, user } = useContext(LoginContext);
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem('plogPosts')) || []
  );
  const [users, setUSers] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const getData = async () => {
    const dataFromLocal = localStorage.getItem('plogPosts');
    if (dataFromLocal) {
      setPosts(JSON.parse(dataFromLocal));
    } else {
      try {
        const response = await axios.get('https://api.tawwr.com/posts');
        setPosts(response.data.data);
        console.log(response.data.data);
        localStorage.setItem('plogPosts', JSON.stringify(response.data.data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <postsListContext.Provider
      value={{ posts, setPosts, users, setUSers, modalShow, setModalShow }}>

    </postsListContext.Provider>
  );
}
// CommentsmodalShow, setCommentsModalShow
export default Main;

// const getData = async () => {
//   const check = localStorage.getItem('plogPosts');

//   if (check) {
//     setPosts(JSON.parse(check));
//   } else {
//     const API = axios.create({ baseURL: ' https://api.tawwr.com' });
//     //Get Posts
//     API.get('/posts').then((posts) =>
//       setPosts(posts.data.data.sort((a, b) => a.id - b.id))
//     );
//     localStorage.setItem('plogPosts', JSON.stringify(posts.data.data));
//   }
// };
