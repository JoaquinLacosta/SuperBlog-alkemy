import React, { useState } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { add_post_action } from "../../redux/actions/postActions"
import swal from "sweetalert"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import { HomeContainer, FormContainer, InputContainer, Input, ButtonContainer, Button } from "./styles"

const CreatePost = (props) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    id: Math.random()
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts", form)
      .then(res => {
        if(res.status === 201) {
          const { data } = res 
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
      <Header />
      <HomeContainer>
        <FormContainer onSubmit={handleSubmit}>
          <InputContainer>
            <Input 
              type="text" 
              placeholder="Title" 
              name="title" 
              value={form.title}
              onChange={handleChange}
              required
              minLength={5}
              />
            <Input 
              type="text" 
              placeholder="Description" 
              name="description" 
              value={form.description}
              onChange={handleChange}
              required
              minLength={16}
              />
          </InputContainer>
          <ButtonContainer>
            <Button type="submit">
              Create post 
            </Button>
          </ButtonContainer>
        </FormContainer>
      </HomeContainer>
      <Footer />
    </>
  )
}

const mapDispatchToProps = {
  add_post_action
}

export default connect(null, mapDispatchToProps)(CreatePost);