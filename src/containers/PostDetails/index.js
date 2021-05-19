import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import Loader from "../../components/Loader/index"
import { HomeContainer, PostContainer, PostTitle, PostBody } from "./styles"
import swal from "sweetalert"

const PostDetails = () => {
  const [post, setPost] = useState()
  const { id } = useParams()
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if(res.status === 200) {
          setPost(res.data)
        }
      })
      .catch(err => swal("Error calling api", "", "error"))
  }, [])

  console.log(post)
  return(
    <>
      <Header />
      <HomeContainer>
        {
          typeof post == "undefined" 
          ? <Loader />
          : <PostContainer>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </PostContainer>
        }
      </HomeContainer>
      <Footer />
    </>
  )
}

export default PostDetails;