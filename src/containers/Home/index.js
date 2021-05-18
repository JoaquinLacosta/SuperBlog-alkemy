import React, { useState, useEffect } from "react"
import axios from "axios"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import PostItem from "../../components/PostItem/index"
import { HomeContainer } from "./styles.js"

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(data => setPosts(data.data))
      .catch(err => console.log(err))
  }, [])

  return(
    <>
      <Header />
      <HomeContainer>
        {
          posts.map(post => (
            <PostItem {...post} key={post.id} />
          ))
        }
      </HomeContainer>
      <Footer />
    </>
  )
}

export default Home