import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { config } from "../../config"
import { useParams } from "react-router-dom"
import axios from "axios"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import Loader from "../../components/Loader/index"
import { HomeContainer, PostContainer, PostTitle, PostBody } from "./styles"
import swal from "sweetalert"

const PostDetails = (props) => {
  const [post, setPost] = useState()
  const { id } = useParams()
  const postData = props.blog_posts.flat().find(i => i.id == id)
  useEffect(() => {
    if(postData) {
      setPost(postData)
    } else {
      axios(config.API_LINK + id)
      .then(res => {
        if(res.status === 200) {
          setPost(res.data)
        }
      })
      .catch(err => swal("Error calling api", "", "error"))
    }
  }, [])

  return(
    <>
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
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    blog_posts: state.blog_posts.posts
  }
}

export default connect(mapStateToProps)(PostDetails);