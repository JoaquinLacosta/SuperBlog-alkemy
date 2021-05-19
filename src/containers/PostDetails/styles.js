import styled from "styled-components"

export const HomeContainer = styled.main`
  width: 100%;
  background-color: #eceae9;
  padding: 20px;
  text-align: center;
  min-height: 100vh;
`

export const PostContainer = styled.div`
  max-width: 768px;
  min-width: 270px;
  width: 70%;
  margin: 0 auto;
  heigth: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 8px #bbbfb0;
  text-align: start;
`

export const PostTitle = styled.h2`
  border-bottom: 2px solid black;
  padding: 8px 0;
  margin-bottom: 20px;
`

export const PostBody = styled.p`
  margin-bottom: 20px;
`