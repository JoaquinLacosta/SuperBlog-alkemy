import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { edit_post_action } from "../../redux/actions/postActions"
import { connect } from "react-redux"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import PostForm from "../../components/PostForm/index"
import Loader from "../../components/Loader/index"
import { EditContainer } from "./styles"
import swal from "sweetalert"

const EditPost = (props) => {
  const [form, setForm] = useState({
    title: "",
    body: ""
  })
  const { id } = useParams()
  const postData = props.blog_posts[0].find(i => i.id == id)
  useEffect(() => {
    setForm(postData)
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if(res.status === 200) {
          props.edit_post_action(form)
          swal("Succesfully edited blog!", "", "success")
        }
      })
      .catch(err => {
        console.log(err)
        swal("Error editing post", "", "error")})
  }


  return(
    <>
      <Header />
      <EditContainer>
        {
          typeof form === "undefined"
          ? <Loader />
          : <PostForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isEdit/>
        }
      </EditContainer>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    blog_posts: state.blog_posts.posts
  }
}

const mapDispatchToProps = {
  edit_post_action
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);