import React, { useEffect } from "react"
import Loader from "../../components/Loader/index"
import swal from "sweetalert"
import { connect } from "react-redux"
import { add_post_action } from "../../redux/actions/postActions"
import axios from "axios"
import Header from "../../components/Header/index"
import Footer from "../../components/Footer/index"
import PostItem from "../../components/PostItem/index"
import { HomeContainer } from "./styles.js"

const Home = (props) => {
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        const { data } = res
        props.add_post_action(data)
      })
      .catch(err => swal("Error calling api", "Try again later", "error"))
  }, [])

  return(
    <>
      <Header />
      <HomeContainer>
        {
          typeof props.blog_posts[0] == "undefined" 
          ? <Loader />
          : props.blog_posts[0].map(post => (
            <PostItem {...post} key={post.id} />
          ))
        }
      </HomeContainer>
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    blog_posts: state.blog_posts.posts
  }
}

const mapDispatchToProps = {
  add_post_action,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)