import React from "react"
import { Link } from "react-router-dom"
import { HeaderWrapper, HeaderLogo, HeaderButton } from "./styles"


const Header = () => {
  return(
    <HeaderWrapper>
      <div>
        <Link style={HeaderLogo} to="/">SuperBlog</Link>
      </div>
      <div>
        <Link style={HeaderButton} to="/posts/create">New post</Link>
      </div>
    </HeaderWrapper>
  )
}

export default Header