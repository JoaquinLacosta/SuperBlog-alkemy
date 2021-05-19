import React from "react"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import { HomeContainer, FormContainer, InputContainer, Input } from "./styles"

const PostDetails = () => {
  return(
    <>
      <Header />
      <HomeContainer>
        <FormContainer>
          <InputContainer>
            <Input type="text" placeholder="Title"/>
            <Input type="text" placeholder="Description"/>
          </InputContainer>
          <div>
            <button>
              xd 
            </button>
          </div>
        </FormContainer>
      </HomeContainer>
      <Footer />
    </>
  )
}

export default PostDetails;