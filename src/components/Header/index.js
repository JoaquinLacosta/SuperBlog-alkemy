import React from "react"
import { Link } from "react-router-dom"
import { HeaderWrapper } from "./styles"


const Header = () => {
  return(
    <HeaderWrapper>
      <div className="Header__logo">
        <h1>SuperBlog</h1>
      </div>
      <div className="Header__button">
        <Link to="/posts/create">New post</Link>
      </div>
    </HeaderWrapper>
  )
}

export default Header