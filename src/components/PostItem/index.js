import React from "react"
import { config } from "../../config"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import swal from "sweetalert"
import { delete_post_action } from "../../redux/actions/postActions"
import axios from "axios"
import { PostArticle, ArticleDiv, PostButton } from "./styles"
import { FaInfo, FaTrash, FaRegEdit } from "react-icons/fa"

const PostItem = (props) => {
  const history = useHistory()


  const handleRemove = (id) => {
    axios.delete(config.API_LINK + id)
      .then(res => {
        if(res.status === 200) {
          props.delete_post_action(id)
          swal("Succesfully deleted post", "", "success")
        }
      })
      .catch(err => swal("Error deleting post", "Try again later", "error"))
  }

  const handleInfo = (id) => {
    history.push(`/posts/${id}`)
  }

  const handleEdit = (id) => {
    history.push(`/posts/${id}/edit`)
  }

  return(
    <PostArticle>
      <ArticleDiv>
        <h4>{props.title}</h4>
      </ArticleDiv>
      <ArticleDiv>
        <PostButton info onClick={() => handleInfo(props.id)}>
          <i>
            {FaInfo()}
          </i>
        </PostButton>
        <PostButton remove onClick={() => handleRemove(props.id)}>
          <i>
            {FaTrash()}
          </i>
        </PostButton>
        <PostButton edit onClick={() => handleEdit(props.id)}>
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