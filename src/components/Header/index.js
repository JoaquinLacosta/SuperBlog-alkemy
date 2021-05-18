import React from "react"
import { HeaderWrapper, HeaderLogo, HeaderButton } from "./styles"


const Header = () => {
  return(
    <HeaderWrapper>
      <div>
        <HeaderLogo href="/">SuperBlog</HeaderLogo>
      </div>
      <div>
        <HeaderButton href="/posts/create">New post</HeaderButton>
      </div>
    </HeaderWrapper>
  )
}

export default Header