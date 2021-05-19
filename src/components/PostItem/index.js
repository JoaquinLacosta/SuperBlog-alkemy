import React from "react"
import { connect } from "react-redux"
import { delete_post_action } from "../../redux/actions/postActions"
import axios from "axios"
import { PostArticle, ArticleDiv, PostButton } from "./styles"
import { FaInfo, FaTrash, FaRegEdit } from "react-icons/fa"

const PostItem = (props) => {
  const handleRemove = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        if(res.status == 200) {
          props.delete_post_action(id)
        }
      })
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

const mapDispatchToProps = {
  delete_post_action
}

export default connect(null, mapDispatchToProps)(PostItem)