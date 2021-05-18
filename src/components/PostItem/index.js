import React from "react"
import { PostArticle, ArticleDiv, PostButton } from "./styles"
import { FaInfo, FaTrash, FaRegEdit } from "react-icons/fa"

const PostItem = (props) => {
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
        <PostButton remove>
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