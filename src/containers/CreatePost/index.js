import React, { useState } from "react"
import axios from "axios"
import { config } from "../../config"
import { connect } from "react-redux"
import { add_post_action } from "../../redux/actions/postActions"
import swal from "sweetalert"
import PostForm from "../../components/PostForm/index"
import { HomeContainer } from "./styles"

const CreatePost = (props) => {
  const [form, setForm] = useState({
    title: "",
    body: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(config.API_LINK, form)
      .then(res => {
        if(res.status === 201) {
          const { data } = res 
          data.id = props.blog_posts.flat().length + 1
          props.add_post_action(data)
          swal("Post created succesfully!", "", "success")
        }
      })
      .catch(err => swal("Error creating post", "Try again later", "error"))
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return(
    <>
      <HomeContainer>
        <PostForm form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </HomeContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    blog_posts: state.blog_posts.posts
  }
}

const mapDispatchToProps = {
  add_post_action
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);