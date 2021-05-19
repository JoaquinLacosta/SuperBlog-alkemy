import React from "react"
import axios from "axios"
import { PostArticle, ArticleDiv, PostButton } from "./styles"
import { FaInfo, FaTrash, FaRegEdit } from "react-icons/fa"

const PostItem = (props) => {
  const handleRemove = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => alert("Deleted"))
      .catch(err => console.log(err))
  }

  return(
    <PostArticle>
      <ArticleDiv>
        <h4>{props.title}</h4>
      </ArticleDiv>
      <ArticleDiv>
        <PostButton info>
          <i>
            {FaInfo()}
          </i>
        </PostButton>
        <PostButton remove onClick={() => handleRemove(props.id)}>
          <i>
            {FaTrash()}
          </i>
        </PostButton>
        <PostButton edit>
          <i>
            {FaRegEdit()}
          </i>
        </PostButton>
      </ArticleDiv>
    </PostArticle>
  )
}

export default PostItem