import React from "react"
import { FormContainer, InputContainer, Input, ButtonContainer, Button } from "./styles"

const PostForm = (props) => {
  return(
    <FormContainer onSubmit={props.handleSubmit}>
      <InputContainer>
        <Input 
          type="text" 
          placeholder="Title" 
          name="title" 
          value={props.form.title}
          onChange={props.handleChange}
          required
          minLength={5}
          />
        <Input 
          type="text" 
          placeholder="Body" 
          name="body" 
          value={props.form.body}
          onChange={props.handleChange}
          required
          minLength={16}
          />
      </InputContainer>
      <ButtonContainer>
        <Button type="submit">
          {
            props.isEdit ? "Edit post" : "Create post"
          }
        </Button>
      </ButtonContainer>
  </FormContainer>
  )
}

export default PostForm