import styled from "styled-components"

export const PostArticle = styled.article`
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: black;
  padding: 10px;
  margin: 5px 0;
  border-bottom: 1px solid #bbbfb0;
  font-weight: 700;
  &:hover {
    box-shadow: 4px 4px 8px #bbbfb0;
  }
`

export const ArticleDiv = styled.div`
  width: 100%;
  margin: 10px;
`

export const PostButton = styled.button`
  padding: 8px;
  text-aling: center;
  font-size: 16px;
  color: white;
  cursor: pointer;
  background-color: ${props => {
    if(props.remove) {
      return "#A22522"
    }
    if(props.info) {
      return "#57CC99"
    }
    if(props.edit) {
      return "#6EA4BF"
    }
  }};
  border: none;
  border-radius: 5px;
  margin-right: 5px;
`